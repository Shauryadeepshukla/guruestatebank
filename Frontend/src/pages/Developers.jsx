import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  MapPin,
  Search,
  ShieldCheck,
} from "lucide-react";
import { developers } from "../data/developers";
import Popup from "../components/layout/Popup";

export default function Developers() {
  const [query, setQuery] = useState("");
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const filteredDevelopers = useMemo(() => {
    const search = query.toLowerCase().trim();

    if (!search) return developers;

    return developers.filter((developer) =>
      `${developer.name} ${developer.description} ${developer.markets.join(" ")}`
        .toLowerCase()
        .includes(search),
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-[#f8f3ea] text-[#120b0a]">
      <Popup />
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#240d0d] text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full border border-[#c9a15a]/20" />
          <div className="absolute right-20 top-20 h-[420px] w-[420px] rounded-full border border-[#c9a15a]/10" />

          <div className="absolute bottom-0 left-0 h-px w-full bg-[#c9a15a]/20" />

          <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.04]" />
          <div className="absolute right-[12%] top-0 h-full w-px bg-white/[0.04]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-[#c9a15a]">
              OUR NETWORK
            </p>

            <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-8xl">
              Our Developer
              <span className="block italic text-[#ead7ad]">Partners.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Explore projects from developers we work with across key
              real-estate markets.
            </p>
          </div>

          {/* SEARCH */}
          <div className="mt-12 max-w-2xl">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 backdrop-blur-xl">
              <Search className="h-5 w-5 text-[#c9a15a]" />

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search developers"
                className="w-full bg-transparent py-5 text-sm text-white outline-none placeholder:text-white/35"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-[#9b3028]">
              DEVELOPER DIRECTORY
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Established names.
              <br />
              Relevant opportunities.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#5b4c47] lg:justify-self-end">
            We work with established and emerging developers to bring relevant
            opportunities to our clients. Explore their profiles, markets and
            associated projects before making your next property decision.
          </p>
        </div>

        {/* DEVELOPER GRID */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDevelopers.map((developer, index) => (
            <article
              key={developer.id || developer.name}
              className="group relative overflow-hidden rounded-2xl border border-[#120b0a]/10 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a15a]/50 hover:shadow-[0_25px_70px_rgba(36,13,13,0.12)]"
              style={{
                animation: `fadeUp 0.7s ease ${index * 80}ms both`,
              }}
            >
              {/* TOP DECORATION */}
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full border border-[#c9a15a]/20 transition duration-500 group-hover:scale-125" />

              <div className="relative">
                {/* LOGO */}
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#240d0d] font-display text-xl text-[#c9a15a] transition duration-500 group-hover:bg-[#671f1c]">
                    {developer.logo ||
                      developer.name
                        .split(" ")
                        .map((word) => word[0])
                        .slice(0, 2)
                        .join("")}
                  </div>

                  <div className="flex items-center gap-1.5 rounded-full bg-[#f4ecdf] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#671f1c]">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#c9a15a]" />
                    Verified
                  </div>
                </div>

                {/* NAME */}
                <h3 className="mt-7 font-display text-2xl transition-colors group-hover:text-[#671f1c]">
                  {developer.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#5b4c47]">
                  {developer.description}
                </p>

                {/* MARKETS */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {developer.markets.map((market) => (
                    <span
                      key={market}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#120b0a]/10 px-3 py-1.5 text-xs text-[#5b4c47]"
                    >
                      <MapPin className="h-3 w-3 text-[#9b3028]" />
                      {market}
                    </span>
                  ))}
                </div>

                {/* PROJECT COUNT */}
                <div className="mt-7 flex items-center gap-3 border-t border-[#120b0a]/10 pt-5">
                  <Building2 className="h-4 w-4 text-[#c9a15a]" />

                  <span className="text-sm text-[#5b4c47]">
                    <strong className="text-[#120b0a]">
                      {developer.projectCount}
                    </strong>{" "}
                    Projects
                  </span>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => setSelectedDeveloper(developer)}
                  className="mt-6 flex w-full items-center justify-between text-sm font-bold text-[#671f1c]"
                >
                  View Developer
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#671f1c]/20 transition-all duration-300 group-hover:bg-[#671f1c] group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* EMPTY */}
        {filteredDevelopers.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-[#120b0a]/20 bg-white px-6 py-20 text-center">
            <Building2 className="mx-auto h-10 w-10 text-[#c9a15a]" />

            <h3 className="mt-5 font-display text-3xl">No developers found</h3>

            <p className="mt-3 text-sm text-[#5b4c47]">
              Try searching for another developer or market.
            </p>

            <button
              onClick={() => setQuery("")}
              className="mt-6 rounded-full bg-[#671f1c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9b3028]"
            >
              Reset Search
            </button>
          </div>
        )}
      </section>

      {/* TRUST NOTE */}
      <section className="border-y border-[#c9a15a]/20 bg-[#ead7ad]/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="text-sm font-semibold text-[#671f1c]">
              A note on developer information
            </p>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-[#5b4c47]">
              Developer names, logos and claims should only be displayed with
              appropriate permission and verification.
            </p>
          </div>

          <a
            href="#/contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#240d0d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#671f1c]"
          >
            Talk to an Advisor
            <ArrowUpRight className="h-4 w-4 text-[#c9a15a]" />
          </a>
        </div>
      </section>
      <Popup
        open={!!selectedDeveloper}
        onClose={() => setSelectedDeveloper(null)}
        data={selectedDeveloper}
        type="developer"
      />
    </main>
  );
}
