import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRightSquareIcon,
  Brain,
  Check,
  Compass,
  Handshake,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Market Intelligence",
    description:
      "We look beyond the property itself to understand the location, connectivity, demand and broader market context.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Curated Opportunities",
    description:
      "We focus on relevance rather than volume, helping clients explore opportunities that align with their goals.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Transparent Guidance",
    description:
      "We explain the opportunity, the process and the next steps in straightforward language.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Personalised Advisory",
    description:
      "Your budget, timeline, intended use and investment objective shape the conversation.",
    icon: Target,
  },
  {
    number: "05",
    title: "End-to-End Support",
    description:
      "We coordinate the journey from discovery and shortlisting through documentation and transaction support.",
    icon: Layers3,
  },
  {
    number: "06",
    title: "Long-Term Relationships",
    description:
      "Our objective is not a one-time transaction; it is to build a relationship clients can return to as their property needs evolve.",
    icon: Handshake,
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "We start with your goals, budget, timeline and intended use.",
  },
  {
    number: "02",
    title: "Shortlist",
    text: "Relevant opportunities are brought into focus instead of an endless list.",
  },
  {
    number: "03",
    title: "Evaluate",
    text: "We help you understand the property, context and next steps.",
  },
  {
    number: "04",
    title: "Move Forward",
    text: "Once you're comfortable, we coordinate the journey ahead.",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function WhyGuru() {
  return (
    <main className="bg-[#F7F4EE] text-[#070D14]">
      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden bg-[#070D14] text-white">
        {/* Architectural background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85"
            alt=""
            className="h-full w-full object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#070D14] via-[#070D14]/85 to-[#070D14]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070D14] via-transparent to-[#070D14]/40" />
        </div>

        {/* Architectural lines */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute left-[12%] top-0 h-full w-px bg-white/20" />
          <div className="absolute left-[38%] top-0 h-full w-px bg-white/10" />
          <div className="absolute right-[18%] top-0 h-full w-px bg-white/10" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-6 pb-20 pt-32 lg:px-10 lg:pb-24">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#C9A15A]" />
              <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C9A15A]">
                OUR DIFFERENCE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[92px]"
            >
              Real Estate
              <br />
              Decisions,
              <br />
              <span className="text-[#C9A15A]">With More Clarity.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
              className="mt-10 max-w-2xl"
            >
              <p className="text-base leading-7 text-white/65 md:text-lg">
                Property decisions can be complex. Our role is to simplify the
                process, bring relevant opportunities to the table and help you
                understand what you're considering before you move ahead.
              </p>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
              href="/contact"
              className="mt-10 inline-flex items-center gap-4 border border-[#C9A15A]/60 px-6 py-4 text-sm font-medium transition hover:bg-[#C9A15A] hover:text-[#070D14]"
            >
              Speak to an Advisor
              <ArrowUpRightSquareIcon />
            </motion.a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] tracking-[0.25em] text-white/40 lg:flex">
          SCROLL
          <ArrowDownRight size={15} />
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.28em] text-[#C9A15A]">
              THE GURU APPROACH
            </span>

            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Less noise.
              <br />
              <span className="text-[#C9A15A]">More context.</span>
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-lg leading-8 text-[#5B6470] md:text-xl">
              We combine market understanding, relevant opportunities and
              personalised guidance to make the property journey easier to
              navigate.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-medium">
              <span className="h-px w-10 bg-[#C9A15A]" />
              People. Property. Possibilities.
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-black/10 bg-[#EEEAE2]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-16 max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.28em] text-[#C9A15A]">
              SIX PRINCIPLES
            </span>

            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] md:text-6xl">
              What makes the
              <br />
              <span className="text-[#C9A15A]">difference.</span>
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.article
                  key={pillar.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.05,
                    ease,
                  }}
                  className="group relative min-h-[360px] overflow-hidden bg-[#F7F4EE] p-8 transition-colors duration-500 hover:bg-[#070D14] hover:text-white md:p-10 lg:p-12"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs tracking-widest text-[#C9A15A]">
                      {pillar.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center border border-black/10 transition-colors group-hover:border-[#C9A15A]/40">
                      <Icon
                        size={20}
                        strokeWidth={1.4}
                        className="text-[#C9A15A]"
                      />
                    </div>
                  </div>

                  <div className="mt-24 max-w-md">
                    <h3 className="font-serif text-3xl tracking-[-0.02em] md:text-4xl">
                      {pillar.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-[#5B6470] transition-colors group-hover:text-white/55">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="absolute bottom-8 right-8 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    <ArrowRight size={20} className="text-[#C9A15A]" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-[#070D14] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.28em] text-[#C9A15A]">
                THE JOURNEY
              </span>

              <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-6xl">
                From first
                <br />
                conversation
                <br />
                to <span className="text-[#C9A15A]">decision.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/45">
                A structured approach helps turn a complex property decision
                into a clearer sequence of conversations and choices.
              </p>
            </div>

            <div className="border-t border-white/10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease,
                  }}
                  className="group grid gap-5 border-b border-white/10 py-8 md:grid-cols-[70px_180px_1fr] md:items-center"
                >
                  <span className="font-mono text-xs text-[#C9A15A]">
                    {step.number}
                  </span>

                  <h3 className="font-serif text-2xl transition-colors group-hover:text-[#C9A15A]">
                    {step.title}
                  </h3>

                  <p className="max-w-md text-sm leading-7 text-white/45">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="relative overflow-hidden bg-[#C9A15A] px-6 py-24 lg:px-10 lg:py-32">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-[#070D14]/10" />
        <div className="pointer-events-none absolute -right-5 -top-5 h-48 w-48 rounded-full border border-[#070D14]/10" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <span className="text-[11px] font-semibold tracking-[0.28em] text-[#070D14]/60">
              OUR PROMISE
            </span>

            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Property deserves
              <br />
              more than a sales pitch.
            </h2>

            <div className="mt-10 flex max-w-2xl gap-4">
              <Check className="mt-1 shrink-0" size={20} />

              <p className="text-base leading-7 text-[#070D14]/70">
                It deserves context, clarity and a team that understands what
                you are trying to achieve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F7F4EE] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 border-t border-black/10 pt-10 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.28em] text-[#C9A15A]">
              START A CONVERSATION
            </span>

            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] md:text-6xl">
              Have a property decision
              <br />
              <span className="text-[#C9A15A]">in mind?</span>
            </h2>
          </div>

          <a
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-5 border border-[#070D14] px-7 py-5 text-sm font-medium transition hover:bg-[#070D14] hover:text-white"
          >
            Speak to an Advisor
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowRight size={18} />
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}

function ArrowUpRightIcon() {
  return (
    <span className="inline-flex">
      <ArrowUpRight size={17} />
    </span>
  );
}
