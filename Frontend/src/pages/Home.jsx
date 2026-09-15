import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { properties } from "../data/properties";

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const solutions = [
  [
    "01",
    "Buy",
    "Find a home that fits your lifestyle, location and budget.",
    "Explore Homes",
  ],
  [
    "02",
    "Invest",
    "Explore opportunities selected around location, demand and long-term potential.",
    "Explore Investments",
  ],
  [
    "03",
    "Sell",
    "Position your property effectively and connect with the right buyers.",
    "Talk to an Advisor",
  ],
  [
    "04",
    "Lease",
    "Find practical rental solutions for residential and commercial needs.",
    "Explore Leasing",
  ],
  [
    "05",
    "Advise",
    "Get an informed second opinion before making a significant property decision.",
    "Speak to an Advisor",
  ],
];

const whyGuru = [
  [
    "Market Intelligence",
    "Understand the location, project and factors that can influence long-term demand.",
    TrendingUp,
  ],
  [
    "Curated Opportunities",
    "Explore projects selected against clear criteria rather than an endless list.",
    Sparkles,
  ],
  [
    "Transparent Process",
    "Know what you're considering, why it may fit and what happens next.",
    ShieldCheck,
  ],
  [
    "End-to-End Support",
    "From discovery and shortlisting to documentation and transaction coordination.",
    Building2,
  ],
  [
    "After-Sales Assistance",
    "Our relationship does not end when the paperwork is complete.",
    Check,
  ],
  [
    "Client-First Approach",
    "Your goals, timeline and budget shape the recommendations we make.",
    Users,
  ],
];

function GoldLine() {
  return <span className="block h-px w-14 bg-[#C9A15A]" />;
}

function SectionKicker({ children, dark = false }) {
  return (
    <div
      className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] ${
        dark ? "text-[#C9A15A]" : "text-[#B54A4A]"
      }`}
    >
      <GoldLine />
      {children}
    </div>
  );
}

function CurvedDivider({ dark = false, flip = false }) {
  return (
    <div
      className={`pointer-events-none relative z-20 -mb-px h-16 overflow-hidden ${
        flip ? "rotate-180" : ""
      } ${dark ? "bg-[#070D14]" : "bg-[#F7F4EE]"}`}
    >
      <div
        className={`absolute -left-[5%] top-2 h-28 w-[110%] rounded-[50%] ${
          dark ? "bg-[#F7F4EE]" : "bg-[#070D14]"
        }`}
      />
    </div>
  );
}

function HomeFilter({ label, value, options, onChange }) {
  return (
    <div className="relative bg-[#101720]">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-20 w-full appearance-none bg-transparent px-5 pb-4 pr-12 pt-7 text-left text-sm text-white outline-none transition hover:bg-[#151e28] focus:ring-1 focus:ring-inset focus:ring-[#C9A15A]/50"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#070D14] text-white"
          >
            {option}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute left-5 top-3 text-[9px] uppercase tracking-[.2em] text-white/25">
        {label}
      </div>

      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#C9A15A]"
      />
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Search tab
  const [activeTab, setActiveTab] = useState("Buy");

  // Search filters
  const [homeFilters, setHomeFilters] = useState({
    location: "All Locations",
    type: "All",
    configuration: "All Configurations",
  });

  // Filter the actual properties array
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const propertyLocation = (property.location || "").toLowerCase();

      const propertyType = property.type || "";

      const propertyConfiguration = (
        property.configuration || ""
      ).toLowerCase();

      const selectedLocation = homeFilters.location.toLowerCase();

      const selectedConfiguration = homeFilters.configuration.toLowerCase();

      const matchesLocation =
        homeFilters.location === "All Locations" ||
        propertyLocation.includes(selectedLocation);

      const matchesType =
        homeFilters.type === "All" || propertyType === homeFilters.type;

      const matchesConfiguration =
        homeFilters.configuration === "All Configurations" ||
        propertyConfiguration.includes(selectedConfiguration);

      return matchesLocation && matchesType && matchesConfiguration;
    });
  }, [homeFilters]);

  // Send filters to /properties
  const searchUrl = useMemo(() => {
    const params = new URLSearchParams();

    if (homeFilters.location !== "All Locations") {
      params.set("location", homeFilters.location);
    }

    if (homeFilters.type !== "All") {
      params.set("type", homeFilters.type);
    }

    if (homeFilters.configuration !== "All Configurations") {
      params.set("configuration", homeFilters.configuration);
    }

    params.set("tab", activeTab);

    const queryString = params.toString();

    return queryString ? `/properties?${queryString}` : "/properties";
  }, [homeFilters, activeTab]);

  return (
    <main className="overflow-hidden bg-[#F7F4EE] text-[#070D14]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="relative min-h-[94svh] overflow-hidden bg-[#070D14] text-white"
      >
        <motion.img
          style={{
            y: heroY,
            scale: heroScale,
          }}
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=90"
          alt="Premium architectural residence"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(201,161,90,.16),transparent_30%)]" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#070D14]/95 via-[#070D14]/62 to-[#070D14]/15" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#070D14]/80 via-transparent to-transparent" />

        <div className="absolute inset-5 border border-white/10 sm:inset-8 lg:inset-10" />

        <div className="absolute bottom-10 left-10 hidden h-28 w-px bg-gradient-to-t from-[#C9A15A] to-transparent lg:block" />

        <div className="absolute right-10 top-28 hidden h-px w-28 bg-gradient-to-l from-[#C9A15A] to-transparent lg:block" />

        <div className="relative z-10 mx-auto flex min-h-[94svh] max-w-7xl items-end px-7 pb-28 pt-36 sm:px-10 lg:px-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            className="max-w-5xl"
          >
            <SectionKicker dark>
              Real Estate Advisory & Investment
            </SectionKicker>

            <h1 className="mt-7 max-w-4xl font-serif text-[3.7rem] leading-[.9] tracking-[-0.055em] sm:text-7xl lg:text-[7.8rem]">
              Invest in a
              <br />
              <span className="text-[#C9A15A]">Better Tomorrow.</span>
            </h1>

            <div className="mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row sm:items-start">
              <p className="text-lg leading-8 text-white/85">
                Curated properties. Strategic advice. Clearer decisions.
              </p>

              <span className="hidden h-px w-16 bg-white/20 sm:mt-4 sm:block" />

              <p className="max-w-md text-sm leading-7 text-white/55">
                Whether you're buying your first home, building a portfolio or
                exploring opportunities from overseas.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/properties"
                className="group inline-flex items-center justify-center gap-3 bg-[#C9A15A] px-7 py-4 text-sm font-semibold text-[#070D14] transition hover:bg-[#dfbd7c]"
              >
                Explore Properties
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold backdrop-blur transition hover:border-[#C9A15A]/60 hover:bg-white/10"
              >
                Talk to an Advisor
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-7 right-8 z-10 hidden items-center gap-3 text-[9px] uppercase tracking-[.28em] text-white/45 lg:flex">
          Scroll to explore
          <ArrowDownRight size={15} className="text-[#C9A15A]" />
        </div>
      </section>

      {/* =====================================================
          FLOATING PROOF
      ===================================================== */}

      <section className="relative z-30 -mt-12 overflow-hidden px-5 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute -right-24 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 lg:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border border-[#C9A15A]/20"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-10 rounded-full border border-[#C9A15A]/10"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-24 rounded-full border border-dashed border-[#C9A15A]/20"
          />

          <motion.span
            animate={{ rotate: 360 }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-24"
          >
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#C9A15A] shadow-[0_0_18px_rgba(201,161,90,.8)]" />
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease,
          }}
          className="relative mx-auto grid max-w-7xl overflow-hidden border border-black/10 bg-white shadow-[0_24px_80px_rgba(7,13,20,.12)] md:grid-cols-[1.2fr_2fr]"
        >
          <div className="relative overflow-visible border-b border-black/10 p-7 md:border-b-0 md:border-r lg:p-9">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute -right-16 -top-16 z-50 h-44 w-44 rounded-full border border-[#C9A15A]/15"
            />

            <SectionKicker>Our Approach</SectionKicker>

            <h2 className="relative mt-4 max-w-sm font-serif text-3xl leading-tight lg:text-4xl">
              A smarter way to navigate real estate.
            </h2>

            <div className="mt-8 flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-[#5B6470]/60">
              <span className="h-px w-8 bg-[#C9A15A]" />
              People. Property. Possibilities.
            </div>
          </div>

          <div className="relative grid grid-cols-2 sm:grid-cols-4">
            {[
              ["Years of Experience", 20],
              ["Projects / Properties", 100],
              ["Clients", 500],
              ["Developer Partners", 20],
            ].map(([label, value], i) => (
              <motion.div
                key={label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1 + i * 0.08,
                  duration: 0.6,
                  ease,
                }}
                className="group relative border-b border-r border-black/10 p-6 last:border-r-0 sm:border-b-0 lg:p-8"
              >
                <div className="font-serif text-3xl text-[#C9A15A] transition-transform duration-500 group-hover:-translate-y-1 lg:text-4xl">
                  {value}+
                </div>

                <p className="mt-2 max-w-[120px] text-xs leading-5 text-[#5B6470]">
                  {label}
                </p>

                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-[#C9A15A]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 1.1 + i * 0.08,
                    duration: 0.7,
                    ease,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <div className="border-b border-black/10 bg-[#F7F4EE] py-5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-8 whitespace-nowrap text-[10px] uppercase tracking-[.35em] text-[#5B6470]"
        >
          {[...Array(2)]
            .flatMap(() => [
              "Residential",
              "Commercial",
              "Investment",
              "NRI Advisory",
              "Strategic Guidance",
              "Curated Opportunities",
            ])
            .map((item, i) => (
              <span key={i} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="text-[#C9A15A]">✦</span>
              </span>
            ))}
        </motion.div>
      </div>

      {/* =====================================================
          SEARCH
      ===================================================== */}

      <section className="relative bg-[#070D14] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C9A15A]/50 to-transparent" />

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
          >
            <SectionKicker dark>Property Discovery</SectionKicker>

            <h2 className="mt-5 font-serif text-4xl sm:text-6xl">
              Find Your Next Opportunity
            </h2>

            <p className="mt-5 max-w-xl text-white/50">
              Search curated properties based on what matters to you.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease,
            }}
            className="relative mt-12 overflow-hidden border border-white/10 bg-white/[.035] shadow-2xl"
          >
            {/* Tabs */}

            <div className="flex overflow-x-auto border-b border-white/10">
              {["Buy", "Invest", "Rent", "Commercial"].map((tab) => (
                <button
                  type="button"
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative shrink-0 px-5 py-4 text-sm transition sm:px-7 ${
                    activeTab === tab
                      ? "text-[#C9A15A]"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {tab}

                  {activeTab === tab && (
                    <motion.span
                      layoutId="active-home-tab"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-[#C9A15A]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Filters */}

            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              <HomeFilter
                label="Location"
                value={homeFilters.location}
                options={[
                  "All Locations",
                  "Gurugram",
                  "Delhi",
                  "Noida",
                  "Faridabad",
                ]}
                onChange={(value) =>
                  setHomeFilters((prev) => ({
                    ...prev,
                    location: value,
                  }))
                }
              />

              <HomeFilter
                label="Property Type"
                value={homeFilters.type}
                options={["All", "Residential", "Commercial"]}
                onChange={(value) =>
                  setHomeFilters((prev) => ({
                    ...prev,
                    type: value,
                  }))
                }
              />

              <HomeFilter
                label="Configuration"
                value={homeFilters.configuration}
                options={[
                  "All Configurations",
                  "1 BHK",
                  "2 BHK",
                  "3 BHK",
                  "4 BHK",
                  "5+ BHK",
                ]}
                onChange={(value) =>
                  setHomeFilters((prev) => ({
                    ...prev,
                    configuration: value,
                  }))
                }
              />
            </div>

            {/* Search Result */}

            <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-white/40">
                <span className="text-[#C9A15A]">
                  {filteredProperties.length}
                </span>{" "}
                {filteredProperties.length === 1 ? "property" : "properties"}{" "}
                match your selection
              </div>

              <a
                href={searchUrl}
                className="inline-flex items-center justify-center gap-3 bg-[#C9A15A] px-7 py-4 text-sm font-semibold text-[#070D14] transition hover:bg-[#dfbd7c]"
              >
                <Search size={16} />
                Search Properties
              </a>
            </div>
          </motion.div>

          {/* Small preview of filtered properties */}

          {filteredProperties.length > 0 && (
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {filteredProperties.slice(0, 3).map((property) => (
                <div
                  key={property.id}
                  className="border border-white/10 bg-white/[.03] p-5"
                >
                  <p className="text-[9px] uppercase tracking-[.2em] text-[#C9A15A]">
                    {property.location}
                  </p>

                  <h3 className="mt-2 font-serif text-xl">{property.title}</h3>

                  <div className="mt-4 flex items-center justify-between text-xs text-white/40">
                    <span>{property.configuration}</span>

                    <span>{property.type}</span>
                  </div>

                  <p className="mt-3 text-sm text-white/70">{property.price}</p>
                </div>
              ))}
            </div>
          )}

          {filteredProperties.length === 0 && (
            <div className="mt-8 border border-white/10 p-8 text-center">
              <p className="font-serif text-2xl">No properties found</p>

              <p className="mt-2 text-sm text-white/40">
                Try changing one or more filters.
              </p>
            </div>
          )}
        </div>
      </section>

      <CurvedDivider dark />

      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
          >
            <SectionKicker>What We Do</SectionKicker>

            <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">
              Real Estate Solutions for Every Goal
            </h2>

            <p className="mt-5 max-w-2xl text-[#5B6470]">
              Different goals need different strategies. Choose the path that
              fits what you're looking to achieve.
            </p>
          </motion.div>

          <div className="mt-14 grid border-l border-t border-black/10 lg:grid-cols-5">
            {solutions.map(([num, title, body, cta], i) => (
              <motion.a
                href="/contact"
                key={title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.65,
                  ease,
                }}
                className="group relative min-h-[300px] overflow-hidden border-b border-r border-black/10 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl lg:p-8"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-[#C9A15A]/20 transition duration-700 group-hover:scale-[2.5]" />

                <span className="text-xs text-[#C9A15A]">{num}</span>

                <h3 className="mt-20 font-serif text-3xl">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#5B6470]">{body}</p>

                <span className="absolute bottom-7 left-7 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest transition group-hover:text-[#B54A4A]">
                  {cta}

                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED OPPORTUNITIES
      ===================================================== */}

      <section className="relative bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-[#C9A15A] to-transparent" />

        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={reveal}
            >
              <SectionKicker>Curated Selection</SectionKicker>

              <h2 className="mt-5 font-serif text-4xl sm:text-6xl">
                Featured Opportunities
              </h2>

              <p className="mt-5 max-w-xl text-[#5B6470]">
                Explore selected properties from trusted developers across key
                real-estate markets.
              </p>
            </motion.div>

            <a
              href="/properties"
              className="group inline-flex items-center gap-2 text-sm font-semibold"
            >
              View All Properties
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {properties.map((property, i) => (
              <motion.a
                href={`/properties/${property.id}`}
                key={property.id}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.7,
                  ease,
                }}
                className={`group ${i === 1 ? "lg:translate-y-10" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e4dc]">
                  {property.image && property.image !== "..." ? (
                    <img
                      src={property.image}
                      alt={property.title}
                      className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#101720]">
                      <Building2
                        size={55}
                        strokeWidth={1}
                        className="text-[#C9A15A]/40"
                      />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#070D14]/85 via-transparent to-transparent opacity-80" />

                  <span className="absolute left-5 top-5 border border-white/20 bg-[#070D14]/70 px-3 py-2 text-[9px] uppercase tracking-widest text-white backdrop-blur">
                    {property.type}
                  </span>

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-[10px] uppercase tracking-[.2em] text-[#C9A15A]">
                      {property.location}
                    </p>

                    <h3 className="mt-2 font-serif text-3xl">
                      {property.title}
                    </h3>
                  </div>
                </div>

                <div className="border-x border-b border-black/10 px-5 py-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#5B6470]">
                      {property.configuration}
                    </span>

                    <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider">
                      View
                      <ArrowRight size={13} />
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-medium text-[#070D14]">
                    {property.price}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <CurvedDivider flip />

      {/* =====================================================
          WHY GURU
      ===================================================== */}

      <section className="relative px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={reveal}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <SectionKicker>Our Difference</SectionKicker>

              <h2 className="mt-5 font-serif text-4xl leading-[1.05] sm:text-6xl">
                Why Choose Guru Estates Bank?
              </h2>

              <p className="mt-7 max-w-md leading-7 text-[#5B6470]">
                Real estate is a significant decision. We combine market
                understanding, curated opportunities and personalised guidance
                to help you move forward with greater clarity.
              </p>

              <a
                href="/why-guru"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold"
              >
                Discover Our Approach
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {whyGuru.map(([title, body, Icon], i) => (
                <motion.div
                  key={title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.6,
                  }}
                  className="group relative min-h-[240px] overflow-hidden border-b border-r border-black/10 p-7 transition hover:bg-white sm:p-9"
                >
                  <span className="absolute right-6 top-6 text-[9px] text-black/15">
                    0{i + 1}
                  </span>

                  <Icon
                    size={21}
                    strokeWidth={1.4}
                    className="text-[#C9A15A] transition-transform duration-500 group-hover:scale-110"
                  />

                  <h3 className="mt-10 font-serif text-2xl">{title}</h3>

                  <p className="mt-3 text-sm leading-6 text-[#5B6470]">
                    {body}
                  </p>

                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C9A15A] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DARK EDITORIAL BAND
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#070D14] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
        <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-[#C9A15A]/10" />

        <div className="absolute -left-12 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-[#C9A15A]/10" />

        <div className="absolute right-0 top-0 h-px w-1/2 bg-gradient-to-l from-[#C9A15A]/60 to-transparent" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-3">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={reveal}
            >
              <SectionKicker dark>Partners</SectionKicker>

              <h2 className="mt-5 font-serif text-4xl">
                Our Developer Partners
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/50">
                We work with established and emerging developers to bring
                relevant opportunities to our clients.
              </p>

              <a
                href="/developers"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#C9A15A]"
              >
                View Developers
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="border-y border-white/10 py-10 lg:border-x lg:border-y-0 lg:px-10"
            >
              <SectionKicker dark>Client Stories</SectionKicker>

              <h2 className="mt-5 font-serif text-4xl">What Our Clients Say</h2>

              <p className="mt-7 font-serif text-xl leading-8 text-white/80">
                “Real estate decisions become clearer when you have the right
                information and someone who understands your goals.”
              </p>

              <p className="mt-6 text-[9px] uppercase tracking-widest text-white/30">
                Approved testimonials to be added
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={reveal}
            >
              <SectionKicker dark>Knowledge</SectionKicker>

              <h2 className="mt-5 font-serif text-4xl">
                Insights & Perspectives
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/50">
                Practical guidance on markets, property decisions and
                real-estate investment.
              </p>

              <div className="mt-8">
                {[
                  "Market Insights",
                  "Investment Guides",
                  "Buying Guides",
                  "Property Updates",
                ].map((item) => (
                  <a
                    href="/insights"
                    key={item}
                    className="group flex items-center justify-between border-b border-white/10 py-4 text-sm text-white/65 transition hover:text-[#C9A15A]"
                  >
                    {item}

                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CurvedDivider dark flip />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#C9A15A] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-[#070D14]/10" />

        <div className="absolute -right-2 -top-2 h-56 w-56 rounded-full border border-[#070D14]/10" />

        <div className="absolute bottom-0 left-0 h-px w-1/2 bg-[#070D14]/20" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionKicker>Ready When You Are</SectionKicker>

            <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[.95] tracking-tight sm:text-7xl">
              Let's Find Your Next Opportunity
            </h2>

            <p className="mt-6 max-w-xl text-[#070D14]/65">
              Tell us what you're looking for and we'll help you identify the
              next best step.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#070D14] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#151e28]"
            >
              Talk to an Advisor
              <ArrowRight size={16} />
            </a>

            <a
              href="https://wa.me/"
              className="inline-flex items-center justify-center border border-[#070D14]/25 px-7 py-4 text-sm font-semibold text-[#070D14] transition hover:bg-[#070D14]/5"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
