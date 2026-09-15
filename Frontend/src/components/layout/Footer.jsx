import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const links = [
    "Properties",
    "Projects",
    "Developers",
    "Services",
    "Insights",
    "About",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0b0909] text-white">
      {/* subtle background architecture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-[38%] bg-[#240d0d]" />

        <div className="absolute right-[12%] top-0 h-full w-px bg-[#b8965a]/10" />

        <div className="absolute right-[25%] top-0 h-full w-px bg-[#b8965a]/5" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#b8965a]/30 to-transparent" />
      </div>

      <div className="container-guru relative z-10 py-20 md:py-28">
        {/* Main content */}
        <div className="grid gap-16 lg:grid-cols-[1.5fr_.65fr_.8fr]">
          {/* Brand */}
          <div className="relative">
            <p className="mb-7 text-[10px] font-medium tracking-[.35em] text-[#c5a46d]">
              GURU ESTATES BANK
            </p>

            <h2 className="max-w-2xl font-display text-5xl leading-[1.02] tracking-[-.025em] md:text-6xl lg:text-[5.2rem]">
              Invest in
              <br />
              <span className="text-[#c5a46d]">a better tomorrow.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/45">
              Curated properties. Strategic advice. Clearer decisions.
            </p>

            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-8 border-b border-[#c5a46d]/60 pb-3 text-[11px] font-semibold tracking-[.22em] text-[#c5a46d] transition-all duration-500 hover:border-[#c5a46d] hover:text-white"
            >
              TALK TO AN ADVISOR
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c5a46d]/40 transition-all duration-500 group-hover:border-[#c5a46d] group-hover:bg-[#c5a46d] group-hover:text-[#0b0909]">
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </span>
            </Link>
          </div>

          {/* Explore */}
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-7 bg-[#c5a46d]" />

              <p className="text-[10px] tracking-[.25em] text-white/35">
                EXPLORE
              </p>
            </div>

            <nav className="flex flex-col">
              {links.map((item, index) => (
                <Link
                  key={item}
                  to={"/" + item.toLowerCase()}
                  className="group flex items-center justify-between border-b border-white/[0.07] py-3.5 text-sm text-white/55 transition-all duration-300 hover:pl-2 hover:text-[#c5a46d]"
                >
                  <span>{item}</span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-7 bg-[#c5a46d]" />

              <p className="text-[10px] tracking-[.25em] text-white/35">
                CONNECT
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="tel:+910000000000"
                className="group flex items-center gap-4 text-sm text-white/55 transition-colors duration-300 hover:text-[#c5a46d]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-[#c5a46d]/40">
                  <Phone size={14} />
                </span>
                +91 828288 8888
              </a>

              <a
                href="mailto:hello@gurubank.example"
                className="group flex items-center gap-4 text-sm text-white/55 transition-colors duration-300 hover:text-[#c5a46d]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-[#c5a46d]/40">
                  <Mail size={14} />
                </span>
                hello@guruestatesbank.in
              </a>

              <div className="pt-8">
                <p className="max-w-xs text-[11px] leading-6 text-white/25">
                  Real estate advisory and investment solutions designed around
                  long-term value.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Large brand mark */}
        <div className="mt-24 overflow-hidden border-t border-white/[0.08] pt-8">
          <div className="flex items-end justify-between gap-8">
            <span className="font-display text-[13vw] font-light leading-[.7] tracking-[-.07em] text-white/[0.035]">
              GEB
            </span>

            <span className="mb-1 hidden text-right text-[9px] uppercase tracking-[.25em] text-white/20 md:block">
              ESTATES
              <br />
              BANK
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[10px] uppercase tracking-[.12em] text-white/25 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Guru Estates Bank</span>

          <span>Real Estate Advisory & Investment</span>

          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
