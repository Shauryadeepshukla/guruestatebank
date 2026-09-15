import { useEffect } from "react";
import {
  ArrowUpRight,
  Building2,
  Check,
  Clock3,
  MapPin,
  X,
} from "lucide-react";

export default function Popup({ open, onClose, data, type = "default" }) {
  // Prevent background scrolling while popup is open
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Close with Escape
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open || !data) return null;

  const isDeveloper = type === "developer";
  const isProject = type === "project";
  const isProperty = type === "property";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={data.name || data.title}
    >
      {/* BACKDROP */}
      <button
        type="button"
        aria-label="Close popup"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-[#120b0a]/75 backdrop-blur-md"
      />

      {/* MODAL */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-[#f8f3ea] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
        {/* CLOSE */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#240d0d]/90 text-white backdrop-blur transition-all duration-300 hover:rotate-90 hover:bg-[#671f1c]"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* HEADER IMAGE */}
        {(data.image || data.logo) && (
          <div className="relative h-56 shrink-0 overflow-hidden sm:h-72">
            {data.image ? (
              <>
                <img
                  src={data.image}
                  alt={data.name || data.title || "Property"}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#240d0d] via-[#240d0d]/30 to-transparent" />
              </>
            ) : (
              <div className="flex h-full items-center justify-center bg-[#240d0d]">
                <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-[#c9a15a]/30 bg-[#671f1c] font-display text-3xl text-[#c9a15a]">
                  {data.logo}
                </div>
              </div>
            )}

            <div className="absolute bottom-6 left-6 right-16 text-white sm:bottom-8 sm:left-8">
              {data.type && (
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#c9a15a]">
                  {data.type}
                </p>
              )}

              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                {data.name || data.title}
              </h2>

              {data.location && (
                <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="h-4 w-4 text-[#c9a15a]" />
                  {data.location}
                  {data.locality && ` · ${data.locality}`}
                </div>
              )}
            </div>
          </div>
        )}

        {/* CONTENT */}
        <div className="overflow-y-auto">
          <div className="p-6 sm:p-8 lg:p-10">
            {/* TOP META */}
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[#120b0a]/10 bg-[#120b0a]/10 sm:grid-cols-2 lg:grid-cols-4">
              {data.price && (
                <Meta label="Starting Price" value={data.price} highlight />
              )}

              {data.configuration && (
                <Meta label="Configuration" value={data.configuration} />
              )}

              {data.area && <Meta label="Area" value={data.area} />}

              {data.status && <Meta label="Status" value={data.status} />}

              {data.projectCount !== undefined && (
                <Meta label="Projects" value={data.projectCount} />
              )}
            </div>

            {/* DESCRIPTION */}
            {data.description && (
              <section className="mt-10">
                <SectionHeading>Overview</SectionHeading>

                <p className="mt-4 max-w-3xl text-base leading-8 text-[#5b4c47]">
                  {data.description}
                </p>
              </section>
            )}

            {data.shortDescription && (
              <section className="mt-10">
                <SectionHeading>Overview</SectionHeading>

                <p className="mt-4 max-w-3xl text-base leading-8 text-[#5b4c47]">
                  {data.shortDescription}
                </p>
              </section>
            )}

            {/* PROJECT / PROPERTY DETAILS */}
            {(data.developer ||
              data.possession ||
              data.investmentType ||
              data.category) && (
              <section className="mt-10">
                <SectionHeading>Key Details</SectionHeading>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {data.developer && (
                    <Detail label="Developer" value={data.developer} />
                  )}

                  {data.category && (
                    <Detail label="Category" value={data.category} />
                  )}

                  {data.possession && (
                    <Detail label="Possession" value={data.possession} />
                  )}

                  {data.investmentType && (
                    <Detail label="Suitable For" value={data.investmentType} />
                  )}
                </div>
              </section>
            )}

            {/* MARKETS */}
            {data.markets?.length > 0 && (
              <section className="mt-10">
                <SectionHeading>Markets</SectionHeading>

                <div className="mt-4 flex flex-wrap gap-2">
                  {data.markets.map((market) => (
                    <span
                      key={market}
                      className="inline-flex items-center gap-2 rounded-full border border-[#120b0a]/10 bg-white px-4 py-2 text-sm text-[#5b4c47]"
                    >
                      <MapPin className="h-3.5 w-3.5 text-[#9b3028]" />
                      {market}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* HIGHLIGHTS */}
            {data.highlights?.length > 0 && (
              <section className="mt-10">
                <SectionHeading>Highlights</SectionHeading>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {data.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-xl border border-[#120b0a]/10 bg-white p-4"
                    >
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ead7ad]">
                        <Check className="h-3.5 w-3.5 text-[#671f1c]" />
                      </div>

                      <span className="text-sm leading-6 text-[#5b4c47]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* AMENITIES */}
            {data.amenities?.length > 0 && (
              <section className="mt-10">
                <SectionHeading>Amenities & Features</SectionHeading>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {data.amenities.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-b border-[#120b0a]/10 py-3"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c9a15a]" />
                      <span className="text-sm text-[#5b4c47]">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* TAGS */}
            {data.tags?.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2">
                {data.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#240d0d] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ead7ad]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CUSTOM SECTIONS */}
            {data.sections?.map((section) => (
              <section key={section.title} className="mt-10">
                <SectionHeading>{section.title}</SectionHeading>

                {section.text && (
                  <p className="mt-4 text-sm leading-7 text-[#5b4c47]">
                    {section.text}
                  </p>
                )}

                {section.items?.length > 0 && (
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-[#120b0a]/10 bg-white p-4 text-sm text-[#5b4c47]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* FOOTER CTA */}
          <div className="sticky bottom-0 border-t border-[#c9a15a]/20 bg-[#240d0d] p-5 text-white sm:px-8 sm:py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a15a]">
                  Interested?
                </p>

                <p className="mt-1 text-sm text-white/60">
                  Speak with a Guru Estates Bank advisor about this opportunity.
                </p>
              </div>

              <div className="flex gap-3">
                {data.href && (
                  <a
                    href={data.href}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
                  >
                    View Details
                  </a>
                )}

                <a
                  href="#/contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#c9a15a] px-5 py-3 text-sm font-bold text-[#240d0d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ead7ad]"
                >
                  Talk to an Advisor
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px w-8 bg-[#c9a15a]" />

      <h3 className="font-display text-2xl text-[#120b0a]">{children}</h3>
    </div>
  );
}

function Meta({ label, value, highlight = false }) {
  return (
    <div className="bg-white p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9b3028]">
        {label}
      </p>

      <p
        className={`mt-2 text-sm font-semibold ${
          highlight ? "text-[#671f1c]" : "text-[#120b0a]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="border border-[#120b0a]/10 bg-white p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9b3028]">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold leading-6 text-[#120b0a]">
        {value}
      </p>
    </div>
  );
}
