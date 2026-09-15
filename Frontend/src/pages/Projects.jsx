import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  MapPin,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { projects } from "../data/projects";
import Popup from "../components/layout/Popup";
const categories = ["All", "Residential", "Commercial", "Luxury", "New Launch"];

export default function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const filteredProjects = useMemo(() => {
    const search = query.toLowerCase().trim();

    return projects.filter((project) => {
      const matchesCategory =
        category === "All" ||
        project.type === category ||
        project.category === category;

      const matchesSearch =
        !search ||
        `${project.name} ${project.location} ${project.developer} ${project.type}`
          .toLowerCase()
          .includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [query, category]);

  return (
    <main className="min-h-screen bg-[#f8f3ea] text-[#120b0a]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#240d0d] text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-[-8%] top-[-30%] h-[600px] w-[600px] rounded-full border border-[#c9a15a]/20" />
          <div className="absolute right-[4%] top-[-18%] h-[450px] w-[450px] rounded-full border border-[#c9a15a]/10" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-[#c9a15a]/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-[#c9a15a]">
              CURATED REAL ESTATE OPPORTUNITIES
            </p>

            <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-8xl">
              Explore
              <span className="block italic text-[#ead7ad]">Projects.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Explore curated residential and commercial projects with project
              details, locations, configurations and enquiry options.
            </p>
          </div>

          {/* SEARCH */}
          <div className="mt-12 max-w-5xl">
            <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl md:flex-row">
              <div className="flex flex-1 items-center gap-3 px-5">
                <Search className="h-5 w-5 text-[#c9a15a]" />

                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by project, location or developer"
                  className="w-full bg-transparent py-5 text-sm text-white outline-none placeholder:text-white/35"
                />
              </div>

              <button className="flex items-center justify-center gap-2 border-t border-white/10 px-7 py-5 text-sm font-semibold transition hover:bg-[#c9a15a] hover:text-[#240d0d] md:border-l md:border-t-0">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY BAR */}
      <section className="sticky top-0 z-20 border-b border-[#120b0a]/10 bg-[#f8f3ea]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-4 sm:px-8 lg:px-10">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                category === item
                  ? "bg-[#671f1c] text-white shadow-lg"
                  : "text-[#5b4c47] hover:bg-[#ead7ad]/50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.25em] text-[#9b3028]">
              SELECTED OPPORTUNITIES
            </p>

            <h2 className="font-display text-4xl sm:text-5xl">
              Projects worth exploring
            </h2>
          </div>

          <p className="text-sm text-[#5b4c47]">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "Project" : "Projects"} Found
          </p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id || project.name}
                className="group overflow-hidden rounded-2xl border border-[#120b0a]/10 bg-white shadow-[0_15px_50px_rgba(36,13,13,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(36,13,13,0.14)]"
                style={{
                  animation: `fadeUp 0.7s ease ${index * 80}ms both`,
                }}
              >
                {/* IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#240d0d]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#240d0d]/80 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="rounded-full bg-[#240d0d]/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#ead7ad] backdrop-blur">
                      {project.status || "Featured"}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="flex items-center gap-2 text-xs text-white/70">
                      <MapPin className="h-3.5 w-3.5 text-[#c9a15a]" />
                      {project.location}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b3028]">
                    {project.type}
                  </p>

                  <h3 className="mt-2 font-display text-2xl transition-colors duration-300 group-hover:text-[#671f1c]">
                    {project.name}
                  </h3>

                  <div className="mt-5 space-y-3 border-y border-[#120b0a]/10 py-5 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[#5b4c47]">Developer</span>
                      <span className="font-medium">{project.developer}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#5b4c47]">Configuration</span>
                      <span className="font-medium">
                        {project.configuration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#5b4c47]">Starting Price</span>
                      <span className="font-semibold text-[#671f1c]">
                        {project.price}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="mt-6 flex w-full items-center justify-between rounded-xl bg-[#240d0d] px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#671f1c]"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4 text-[#c9a15a]" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#120b0a]/20 bg-white px-6 py-20 text-center">
            <Building2 className="mx-auto h-10 w-10 text-[#c9a15a]" />

            <h3 className="mt-5 font-display text-3xl">No projects found</h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#5b4c47]">
              We couldn't find a project matching your search. Try broadening
              your search or speak to an advisor for personalised options.
            </p>

            <a
              href="#/contact"
              className="mt-7 inline-flex rounded-full bg-[#671f1c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9b3028]"
            >
              Talk to an Advisor
            </a>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-[#671f1c] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-[#c9a15a]">
                NEED A SHORTLIST?
              </p>

              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
                Tell us what you're looking for.
              </h2>
            </div>

            <a
              href="#/contact"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#c9a15a] px-7 py-4 text-sm font-bold text-[#240d0d] transition hover:bg-[#ead7ad] hover:shadow-xl"
            >
              Talk to an Advisor
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      <Popup
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        data={selectedProject}
        type="project"
      />
    </main>
  );
}
