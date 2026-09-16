import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { useEffect } from "react";

const ease = [0.22, 1, 0.36, 1];

export default function InsightArticle({ article, onBack }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [article]);

  if (!article) {
    return (
      <main className="min-h-screen bg-[#F7F4EE] px-6 py-32 text-[#070D14]">
        <div className="mx-auto max-w-4xl">
          <p className="text-lg">Article not found.</p>

          <button
            onClick={onBack}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
          >
            <ArrowLeft size={16} />
            Back to Insights
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F7F4EE] text-[#070D14]">
      {/* Back */}
      <section className="px-6 pt-28 md:px-10 lg:px-16 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#5B6470]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              <ArrowLeft size={16} />
            </span>
            Back to Insights
          </button>
        </div>
      </section>

      {/* Article Header */}
      <section className="px-6 pb-16 pt-12 md:px-10 lg:px-16 lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="mb-6 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#B18A4A]">
              <span>{article.category}</span>

              <span className="h-1 w-1 rounded-full bg-[#B18A4A]" />

              <span className="flex items-center gap-2 text-[#5B6470]">
                <Clock size={13} />
                {article.readTime}
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-5xl lg:text-7xl">
              {article.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5B6470] md:text-xl">
              {article.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-7xl overflow-hidden"
        >
          <img
            src={article.image}
            alt={article.title}
            className="h-[320px] w-full object-cover md:h-[500px] lg:h-[650px]"
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <article className="mx-auto max-w-3xl">
          {/* Introduction */}
          <p className="text-xl leading-9 text-[#303842] md:text-2xl md:leading-10">
            {article.content.introduction}
          </p>

          <div className="my-14 h-px bg-[#070D14]/10" />

          {/* Sections */}
          <div className="space-y-14">
            {article.content.sections.map((section, index) => (
              <motion.section
                key={section.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease,
                }}
              >
                <h2 className="font-serif text-2xl tracking-[-0.02em] md:text-3xl">
                  {section.heading}
                </h2>

                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-[#5B6470] md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Conclusion */}
          {article.content.conclusion && (
            <div className="mt-16 border-l-2 border-[#B18A4A] pl-6">
              <p className="text-lg leading-8 text-[#303842]">
                {article.content.conclusion}
              </p>
            </div>
          )}
        </article>
      </section>

      {/* Advisor CTA */}
      <section className="bg-[#070D14] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A15A]">
              GURU ADVISORY
            </p>

            <h2 className="font-serif text-3xl leading-tight md:text-5xl">
              Have a property decision in mind?
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/60">
              Talk to an advisor for a clearer view of your property
              requirements and options.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex items-center gap-3 self-start border border-[#C9A15A] px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#C9A15A] transition hover:bg-[#C9A15A] hover:text-[#070D14] md:self-auto"
          >
            Talk to an Advisor
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
