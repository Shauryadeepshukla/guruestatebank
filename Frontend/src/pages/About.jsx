import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Compass,
  Eye,
  Gem,
  Handshake,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const values = [
  {
    number: "01",
    title: "Integrity",
    text: "Integrity in every conversation and every recommendation.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Clarity",
    text: "Clarity over complexity, so important decisions feel easier to navigate.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Relationships",
    text: "We focus on long-term relationships rather than one-time transactions.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Client First",
    text: "Your goals, timeline and budget shape the recommendations we make.",
    icon: Users,
  },
  {
    number: "05",
    title: "Execution",
    text: "Professional execution from discovery through the transaction journey.",
    icon: Target,
  },
  {
    number: "06",
    title: "Learning",
    text: "Continuous market learning keeps our perspective relevant and informed.",
    icon: Eye,
  },
];

const stats = [
  ["01", "Curated", "Opportunities"],
  ["02", "Clear", "Guidance"],
  ["03", "End-to-End", "Support"],
];

export default function About() {
  return (
    <main className="overflow-hidden bg-[#f8f3ea] text-[#120b0a]">
      {/* HERO */}
      <section className="relative min-h-[78vh] overflow-hidden bg-[#240d0d] text-[#f8f3ea]">
        {/* Architectural background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full border border-[#c9a15a]/20" />
          <div className="absolute -right-20 -top-20 h-[390px] w-[390px] rounded-full border border-[#c9a15a]/10" />
          <div className="absolute right-[18%] top-0 h-full w-px bg-[#c9a15a]/10" />
          <div className="absolute right-[42%] top-0 h-full w-px bg-[#c9a15a]/5" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-[#c9a15a]/15" />
          <div className="absolute left-[-10%] top-[45%] h-px w-[55%] bg-[#c9a15a]/10" />
        </div>

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-24">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-[#c9a15a]" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ead7ad]">
                About Guru Estates Bank
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease }}
              className="max-w-4xl font-[var(--font-display)] text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
            >
              Property decisions,
              <span className="block italic text-[#c9a15a]">made clearer.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease }}
              className="mt-8 max-w-2xl text-base leading-8 text-[#f8f3ea]/70 sm:text-lg"
            >
              Guru Estates Bank is a real-estate advisory platform helping
              buyers, investors and NRIs navigate property opportunities with
              clarity and confidence.
            </motion.p>
          </div>

          <div className="absolute bottom-8 right-5 hidden text-right sm:block lg:right-10">
            <p className="font-[var(--font-display)] text-4xl text-[#c9a15a]">
              GEB
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/40">
              People. Property. Possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f8f3ea] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.4fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9b3028]">
              Our Approach
            </span>

            <h2 className="mt-5 max-w-lg font-[var(--font-display)] text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
              Less noise.
              <br />
              <span className="text-[#671f1c]">Better decisions.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="border-l border-[#c9a15a]/50 pl-6 sm:pl-10"
          >
            <p className="text-lg leading-9 text-[#120b0a]/70 sm:text-xl">
              Real estate is a significant decision. We combine market
              understanding, curated opportunities and personalised guidance to
              help you move forward with greater clarity.
            </p>

            <p className="mt-6 text-base leading-8 text-[#120b0a]/55">
              Instead of overwhelming clients with endless options, our role is
              to understand what matters, filter the opportunity set and help
              make the next step more considered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-[#c9a15a]/30 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="group relative overflow-hidden bg-[#240d0d] p-8 text-[#f8f3ea] sm:p-12 lg:p-16"
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-[#c9a15a]/20 transition-transform duration-700 group-hover:scale-125" />

              <Gem className="relative h-7 w-7 text-[#c9a15a]" />

              <p className="relative mt-16 text-xs font-bold uppercase tracking-[0.25em] text-[#c9a15a]">
                Our Mission
              </p>

              <h3 className="relative mt-5 font-[var(--font-display)] text-3xl leading-tight sm:text-4xl">
                Make real-estate decisions clearer.
              </h3>

              <p className="relative mt-6 max-w-xl leading-8 text-white/60">
                To make real-estate decisions clearer through relevant
                opportunities, transparent guidance and dependable support.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="group relative overflow-hidden bg-[#671f1c] p-8 text-[#f8f3ea] sm:p-12 lg:p-16"
            >
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full border border-[#c9a15a]/20 transition-transform duration-700 group-hover:scale-125" />

              <Eye className="relative h-7 w-7 text-[#ead7ad]" />

              <p className="relative mt-16 text-xs font-bold uppercase tracking-[0.25em] text-[#ead7ad]">
                Our Vision
              </p>

              <h3 className="relative mt-5 font-[var(--font-display)] text-3xl leading-tight sm:text-4xl">
                A trusted partner for property-led growth.
              </h3>

              <p className="relative mt-6 max-w-xl leading-8 text-white/60">
                To become a trusted real-estate advisory partner for people
                building homes, businesses and long-term wealth through
                property.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#f8f3ea] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9b3028]">
              What We Stand For
            </span>

            <h2 className="mt-5 font-[var(--font-display)] text-4xl tracking-[-0.03em] sm:text-5xl">
              Principles behind
              <span className="italic text-[#671f1c]">
                {" "}
                every recommendation.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-[#c9a15a]/30 bg-[#c9a15a]/20 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    ease,
                  }}
                  className="group bg-[#f8f3ea] p-7 transition-colors duration-300 hover:bg-white sm:p-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-[#9b3028]">
                      {item.number}
                    </span>

                    <Icon className="h-5 w-5 text-[#c9a15a] transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="mt-12 font-[var(--font-display)] text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#120b0a]/55">
                    {item.text}
                  </p>

                  <div className="mt-8 h-px w-8 bg-[#c9a15a] transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM / HUMAN SIDE */}
      <section className="bg-[#120b0a] px-5 py-20 text-[#f8f3ea] sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a15a]">
              Meet The Team
            </span>

            <h2 className="mt-5 max-w-xl font-[var(--font-display)] text-4xl leading-tight sm:text-5xl">
              People behind the
              <span className="italic text-[#c9a15a]"> perspective.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-white/60">
              Meet the people who bring market knowledge, property expertise and
              client support together.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Market Knowledge", "Property Expertise", "Client Support"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="border border-[#c9a15a]/25 px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#ead7ad]"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <a
              href="#/contact"
              className="group mt-10 inline-flex items-center gap-3 border-b border-[#c9a15a] pb-2 text-sm font-semibold"
            >
              Talk to Our Team
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="relative overflow-hidden bg-[#671f1c] px-5 py-20 text-center text-[#f8f3ea] sm:px-8 lg:py-28">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a15a]/15" />

        <div className="relative mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ead7ad]">
            People. Property. Possibilities.
          </p>

          <h2 className="mt-6 font-[var(--font-display)] text-4xl leading-tight sm:text-6xl">
            The right property decision
            <span className="block italic text-[#c9a15a]">
              starts with the right conversation.
            </span>
          </h2>

          <a
            href="#/contact"
            className="mt-9 inline-flex items-center gap-3 bg-[#c9a15a] px-7 py-4 text-sm font-bold text-[#120b0a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ead7ad]"
          >
            Talk to an Advisor
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
