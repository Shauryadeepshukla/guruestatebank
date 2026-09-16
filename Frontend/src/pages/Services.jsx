import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  Check,
  CircleDollarSign,
  Home,
  KeyRound,
  LandPlot,
  LineChart,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Real Estate Investment",
    shortTitle: "Investment",
    description:
      "Make property decisions with a clearer view of the opportunity.",
    body: "We help investors explore projects by considering location, pricing, demand, developer track record and the investment objective behind the purchase.",
    icon: LineChart,
    cta: "Explore Investment Opportunities",
    tags: ["Market Context", "Demand", "Developer Review"],
  },
  {
    number: "02",
    title: "Residential Properties",
    shortTitle: "Residential",
    description: "Find a home that fits the way you want to live.",
    body: "From first homes to premium residences, we help you shortlist properties around location, lifestyle, configuration and budget.",
    icon: Home,
    cta: "Explore Residential Properties",
    tags: ["Homes", "Premium Residences", "Shortlisting"],
  },
  {
    number: "03",
    title: "Commercial Real Estate",
    shortTitle: "Commercial",
    description:
      "Find commercial opportunities built around business potential.",
    body: "Explore offices, retail and other commercial opportunities with guidance on location, usability, demand and investment considerations.",
    icon: Building2,
    cta: "Explore Commercial Properties",
    tags: ["Office", "Retail", "Commercial"],
  },
  {
    number: "04",
    title: "Property Advisory",
    shortTitle: "Advisory",
    description: "A second opinion can make a significant decision clearer.",
    body: "Talk to our team about your shortlist, budget, location or investment objective before you commit.",
    icon: ShieldCheck,
    cta: "Talk to an Advisor",
    tags: ["Second Opinion", "Due Diligence", "Guidance"],
  },
  {
    number: "05",
    title: "SCO & Plots",
    shortTitle: "SCO & Plots",
    description:
      "Explore land and high-street opportunities with a practical lens.",
    body: "Evaluate location, development potential, access, surrounding ecosystem and the intended use before making a decision.",
    icon: LandPlot,
    cta: "Explore SCO & Plots",
    tags: ["Land", "High Street", "Development"],
  },
  {
    number: "06",
    title: "Leasing & Rentals",
    shortTitle: "Leasing",
    description: "Find practical leasing and rental solutions.",
    body: "We help connect requirements with relevant residential and commercial opportunities.",
    icon: KeyRound,
    cta: "Explore Leasing",
    tags: ["Residential", "Commercial", "Rental"],
  },
  {
    number: "07",
    title: "Financial Assistance",
    shortTitle: "Financing",
    description: "Understand the financing side of your property decision.",
    body: "Where applicable, our team can help coordinate the next steps around financing and documentation with relevant partners.",
    icon: CircleDollarSign,
    cta: "Discuss Financing",
    tags: ["Financing", "Documentation", "Coordination"],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We start with your requirement, timeline, budget and objective.",
  },
  {
    number: "02",
    title: "Shortlist",
    text: "Relevant opportunities are brought together around what matters to you.",
  },
  {
    number: "03",
    title: "Evaluate",
    text: "We help you look at the location, project and surrounding context.",
  },
  {
    number: "04",
    title: "Move Forward",
    text: "Once you are comfortable, we help coordinate the next steps.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  return (
    <main className="overflow-hidden bg-[#070D14] text-[#F7F4EE]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[82vh] border-b border-white/10">
        {/* Ambient architectural lines */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-10%] top-[-15%] h-[650px] w-[650px] rounded-full border border-[#C9A15A]/10" />
          <div className="absolute right-[3%] top-[-5%] h-[520px] w-[520px] rounded-full border border-[#C9A15A]/10" />
          <div className="absolute right-[16%] top-[12%] h-[300px] w-[300px] rounded-full border border-[#C9A15A]/10" />

          <motion.div
            className="absolute right-[27%] top-[15%] h-2 w-2 rounded-full bg-[#C9A15A]"
            animate={{
              y: [0, 80, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="absolute bottom-0 left-[8%] h-px w-[84%] bg-white/10" />
          <div className="absolute left-[8%] top-0 h-full w-px bg-white/5" />
          <div className="absolute right-[8%] top-0 h-full w-px bg-white/5" />
        </div>

        <div className="relative mx-auto flex min-h-[82vh] max-w-[1440px] items-center px-6 py-32 lg:px-12">
          <div className="grid w-full gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-4xl"
            >
              <div className="mb-8 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.28em] text-[#C9A15A]">
                <span className="h-px w-12 bg-[#C9A15A]" />
                Real Estate Solutions
              </div>

              <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                Property decisions,
                <span className="block text-[#C9A15A]">made clearer.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[#AEB5BE] sm:text-lg">
                From finding a home to evaluating an investment, Guru Estates
                Bank brings together property discovery, market understanding
                and personalised guidance.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="group inline-flex items-center gap-3 bg-[#C9A15A] px-6 py-4 text-sm font-semibold text-[#070D14] transition hover:bg-[#D7B873]"
                >
                  Explore Services
                  <ArrowDownRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-sm font-medium transition hover:border-[#C9A15A]/60 hover:text-[#C9A15A]"
                >
                  Talk to an Advisor
                  <ArrowRight size={17} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="lg:pb-2"
            >
              <div className="border-l border-[#C9A15A]/40 pl-6 lg:ml-auto lg:max-w-sm">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A15A]">
                  Our approach
                </p>

                <p className="mt-5 font-serif text-2xl leading-snug text-[#F7F4EE]">
                  Different goals need different strategies.
                </p>

                <p className="mt-5 text-sm leading-7 text-[#8E98A4]">
                  Whether you're buying, investing, leasing or seeking a second
                  opinion, choose the service that fits your objective.
                </p>

                <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#737D89]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A15A]" />
                  Residential
                  <span>•</span>
                  Commercial
                  <span>•</span>
                  Investment
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE INTRO
      ========================================================= */}
      <section className="bg-[#F7F4EE] text-[#070D14]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9A7840]">
                What We Do
              </p>

              <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#69717A]">
                <span className="h-px w-10 bg-[#C9A15A]" />
                Services
              </div>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                A more considered way to navigate{" "}
                <span className="text-[#9A7840]">real estate.</span>
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-8 text-[#5B6470]">
                Property decisions can involve many moving parts. Our services
                are designed to help you identify relevant opportunities,
                understand the context and decide what to explore next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section id="services" className="bg-[#F7F4EE] text-[#070D14]">
        <div className="mx-auto max-w-[1440px] px-6 pb-28 lg:px-12 lg:pb-40">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.05,
                      },
                    },
                  }}
                  className={`group relative flex min-h-[460px] flex-col justify-between overflow-hidden border border-[#D8D3CA] bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-[#C9A15A]/70 hover:shadow-[0_25px_70px_rgba(7,13,20,0.10)] ${
                    index === 0 ? "md:col-span-2 xl:col-span-2" : ""
                  }`}
                >
                  {/* hover line */}
                  <div className="absolute left-0 top-0 h-1 w-0 bg-[#C9A15A] transition-all duration-500 group-hover:w-full" />

                  <div>
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs tracking-[0.2em] text-[#9A7840]">
                        {service.number}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center border border-[#D8D3CA] transition group-hover:border-[#C9A15A] group-hover:bg-[#070D14] group-hover:text-[#C9A15A]">
                        <Icon size={19} strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="mt-12 max-w-2xl font-serif text-3xl leading-tight tracking-[-0.02em]">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-[#4F5964]">
                      {service.description}
                    </p>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#7A828B]">
                      {service.body}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[#E1DDD5] px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-[#747B83]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="mt-10 flex items-center justify-between border-t border-[#E4E0D8] pt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#070D14]"
                  >
                    <span>{service.cta}</span>

                    <span className="flex h-8 w-8 items-center justify-center border border-[#D8D3CA] transition group-hover:border-[#C9A15A] group-hover:bg-[#C9A15A]">
                      <ArrowRight size={14} />
                    </span>
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          DARK ADVISORY BAND
      ========================================================= */}
      <section className="relative border-y border-white/10 bg-[#0B1118]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-100px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#C9A15A]/10" />
          <div className="absolute right-[-30px] top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-[#C9A15A]/10" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A15A]">
                Property Advisory
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
                Not sure what
                <span className="block text-[#C9A15A]">to choose?</span>
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-[#AEB5BE]">
                A second opinion can make a significant decision clearer. Talk
                to our team about your shortlist, budget, location or investment
                objective before you commit.
              </p>

              <a
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#F7F4EE]"
              >
                Talk to an Advisor
                <ArrowRight
                  size={17}
                  className="text-[#C9A15A] transition-transform group-hover:translate-x-2"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="bg-[#070D14]">
        <div className="mx-auto max-w-[1440px] px-6 py-28 lg:px-12 lg:py-40">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A15A]">
                How It Works
              </p>

              <h2 className="mt-6 max-w-md font-serif text-4xl leading-tight sm:text-5xl">
                From requirement
                <span className="block text-[#C9A15A]">to next step.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#7F8994]">
                Our process keeps the conversation focused on your objectives
                rather than simply presenting an endless list of properties.
              </p>
            </div>

            <div>
              {process.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group grid grid-cols-[70px_1fr] border-t border-white/10 py-8 last:border-b"
                >
                  <span className="font-mono text-xs tracking-[0.15em] text-[#C9A15A]">
                    {item.number}
                  </span>

                  <div className="grid gap-3 md:grid-cols-[180px_1fr]">
                    <h3 className="font-serif text-2xl text-[#F7F4EE]">
                      {item.title}
                    </h3>

                    <p className="max-w-xl text-sm leading-7 text-[#818B96]">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE PRINCIPLES
      ========================================================= */}
      <section className="bg-[#F7F4EE] text-[#070D14]">
        <div className="mx-auto max-w-[1440px] px-6 py-28 lg:px-12 lg:py-36">
          <div className="mb-16 max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9A7840]">
              Our Difference
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Guidance built around
              <span className="text-[#9A7840]"> your objective.</span>
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-[#D8D3CA] bg-[#D8D3CA] sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Relevant opportunities",
              "Market understanding",
              "Transparent guidance",
              "End-to-end support",
            ].map((item, index) => (
              <div key={item} className="bg-[#F7F4EE] p-7 lg:p-9">
                <div className="mb-8 flex h-9 w-9 items-center justify-center border border-[#C9A15A] text-[#9A7840]">
                  <Check size={15} />
                </div>

                <p className="font-serif text-xl">{item}</p>

                <p className="mt-3 text-sm leading-6 text-[#737B84]">
                  {index === 0 &&
                    "Focus on opportunities relevant to what you are trying to achieve."}
                  {index === 1 &&
                    "Look beyond the property to the surrounding market context."}
                  {index === 2 &&
                    "Understand what you are considering and what happens next."}
                  {index === 3 &&
                    "Support through discovery, shortlisting and transaction coordination."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#C9A15A] text-[#070D14]">
        <div className="pointer-events-none absolute right-[-120px] top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full border border-[#070D14]/10" />
        <div className="pointer-events-none absolute right-[-50px] top-1/2 h-[340px] w-[340px] -translate-y-1/2 rounded-full border border-[#070D14]/10" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#5E4824]">
                Let's Talk Property
              </p>

              <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Let's find your
                <span className="block">next opportunity.</span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-[#51401F]">
                Tell us what you're looking for and we'll help you identify the
                right next step.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#070D14] px-6 py-4 text-sm font-semibold text-[#F7F4EE] transition hover:bg-[#151D27]"
              >
                Talk to an Advisor
                <ArrowRight size={16} />
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 border border-[#070D14]/30 px-6 py-4 text-sm font-semibold transition hover:border-[#070D14]"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
