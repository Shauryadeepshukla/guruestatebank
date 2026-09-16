import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  MessageCircle,
  Search,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { insights, insightCategories } from "../data/insights.js";

import InsightArticle from "./InsightsArticle.jsx";
const ease = [0.22, 1, 0.36, 1];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [advisorOpen, setAdvisorOpen] = useState(false);

  const filteredArticles = useMemo(() => {
    const search = query.trim().toLowerCase();

    return insights.filter((article) => {
      const categoryMatch =
        activeCategory === "All" || article.category === activeCategory;

      const searchMatch =
        !search ||
        article.title.toLowerCase().includes(search) ||
        article.excerpt.toLowerCase().includes(search) ||
        article.category.toLowerCase().includes(search);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, query]);

  const featured = insights.find((article) => article.featured) || insights[0];
  if (selectedArticle) {
    return (
      <InsightArticle
        article={selectedArticle}
        onBack={() => setSelectedArticle(null)}
      />
    );
  }
  return (
    <main className="bg-[#F7F4EE] text-[#070D14]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#070D14] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85"
            alt=""
            className="h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#070D14] via-[#070D14]/90 to-[#070D14]/50" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#070D14] to-transparent" />
        </div>

        {/* Architectural grid */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute left-[12%] top-0 h-full w-px bg-white/20" />
          <div className="absolute left-[38%] top-0 h-full w-px bg-white/10" />
          <div className="absolute right-[18%] top-0 h-full w-px bg-white/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-10 lg:pb-32">
          <div className="grid items-end gap-16 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#C9A15A]" />

                <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C9A15A]">
                  INSIGHTS & PERSPECTIVES
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease,
                }}
                className="max-w-5xl font-serif text-6xl leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-[92px]"
              >
                Understand
                <br />
                the market.
                <br />
                <span className="text-[#C9A15A]">Then decide.</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease,
              }}
              className="max-w-md lg:ml-auto"
            >
              <p className="text-base leading-7 text-white/55 md:text-lg">
                Useful, practical content for people buying, investing in or
                simply trying to understand real estate.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs tracking-[0.2em] text-white/40">
                <BookOpen size={16} className="text-[#C9A15A]" />
                PRACTICAL REAL ESTATE KNOWLEDGE
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FILTERS
      ===================================================== */}

      <section className="border-y border-black/10 bg-[#EEEAE2] px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {insightCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-4 py-2.5 text-xs font-medium transition ${
                    activeCategory === category
                      ? "bg-[#070D14] text-white"
                      : "border border-black/10 text-[#5B6470] hover:border-[#C9A15A]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-72">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5B6470]"
              />

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles"
                className="h-11 w-full border border-black/10 bg-[#F7F4EE] pl-11 pr-4 text-sm outline-none transition focus:border-[#C9A15A]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLES
      ===================================================== */}

      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.28em] text-[#C9A15A]">
                EXPLORE
              </span>

              <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] md:text-5xl">
                Latest perspectives
              </h2>
            </div>

            <span className="hidden text-xs text-[#5B6470] md:block">
              {filteredArticles.length} articles
            </span>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: (index % 3) * 0.06,
                    ease,
                  }}
                  className="group"
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-[1.25/1] overflow-hidden bg-[#E7E2D9]">
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute left-4 top-4">
                        <span className="bg-[#F7F4EE]/95 px-3 py-2 text-[10px] font-semibold tracking-[0.15em] text-[#070D14]">
                          {article.category.toUpperCase()}
                        </span>
                      </div>

                      <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[#C9A15A] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight size={17} />
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className="pt-5"
                      onClick={() => setSelectedArticle(article)}
                    >
                      <div className="mb-3 flex items-center gap-3 text-[11px] text-[#7B828B]">
                        <span>{article.readTime}</span>

                        <span className="h-1 w-1 rounded-full bg-[#C9A15A]" />

                        <span>{article.date}</span>
                      </div>

                      <h3 className="font-serif text-2xl leading-tight tracking-[-0.02em] transition-colors group-hover:text-[#8D6C32]">
                        {article.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#5B6470]">
                        {article.excerpt}
                      </p>

                      <button
                        type="button"
                        onClick={() => setSelectedArticle(article)}
                        className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em]"
                      >
                        Read Article
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="border border-black/10 px-6 py-20 text-center">
              <h3 className="font-serif text-3xl">No articles found.</h3>

              <p className="mt-3 text-sm text-[#5B6470]">
                Try another category or search term.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#070D14] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.28em] text-[#C9A15A]">
              NEED A SECOND PERSPECTIVE?
            </span>

            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Reading is a start.
              <br />
              <span className="text-[#C9A15A]">
                A conversation can make it clearer.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/45">
              Tell us what you're considering and speak with our team about your
              property decision.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-5 border border-[#C9A15A] px-7 py-5 text-sm font-medium transition hover:bg-[#C9A15A] hover:text-[#070D14]"
          >
            Talk to an Advisor
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>

      {/* =====================================================
          FLOATING ADVISOR UI
      ===================================================== */}

      <div className="fixed bottom-6 right-6 z-[80]">
        {advisorOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 15,
              scale: 0.96,
            }}
            className="mb-3 w-[280px] overflow-hidden border border-white/10 bg-[#070D14] p-5 text-white shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#C9A15A] shadow-[0_0_12px_rgba(201,161,90,0.8)]" />

                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#C9A15A]">
                    GURU ESTATES BANK
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-2xl">Need clarity?</h3>

                <p className="mt-2 text-xs leading-5 text-white/50">
                  Tell us what you're considering and speak with an advisor.
                </p>
              </div>

              <button
                onClick={() => setAdvisorOpen(false)}
                className="text-white/40 transition hover:text-white"
                aria-label="Close advisor"
              >
                <X size={17} />
              </button>
            </div>

            <a
              href="/contact"
              className="mt-5 flex items-center justify-between bg-[#C9A15A] px-4 py-3 text-xs font-semibold text-[#070D14] transition hover:bg-[#d8b873]"
            >
              Talk to an Advisor
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        )}

        <motion.button
          onClick={() => setAdvisorOpen((value) => !value)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-3 border border-[#C9A15A]/40 bg-[#070D14] px-4 py-3 text-white shadow-xl backdrop-blur"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#C9A15A] text-[#070D14]">
            <MessageCircle size={17} />

            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#070D14] bg-[#C9A15A]" />
          </span>

          <span className="hidden text-left sm:block">
            <span className="block text-[9px] font-semibold tracking-[0.2em] text-[#C9A15A]">
              GURU ADVISORY
            </span>

            <span className="mt-0.5 block text-xs font-medium">
              Talk to an Advisor
            </span>
          </span>

          <ArrowUpRight
            size={15}
            className="text-white/40 transition group-hover:text-[#C9A15A]"
          />
        </motion.button>
      </div>
    </main>
  );
}
