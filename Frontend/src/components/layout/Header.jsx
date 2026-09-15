import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/hero.png";
const nav = [
  ["Home", "/"],
  ["Properties", "/properties"],
  ["Projects", "/projects"],
  ["Developers", "/developers"],
  ["Services", "/services"],
  ["Why Guru", "/why-guru"],
  ["About", "/about"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
];

const callbackItems = [
  "REQUEST A CALLBACK",
  "SPEAK WITH AN ADVISOR",
  "PERSONALISED PROPERTY GUIDANCE",
  "REQUEST A CALLBACK",
];

export default function Header({ scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-50
          border-b transition-all duration-500
          ${
            scrolled
              ? "border-white/10 bg-[#070D14]/95 shadow-[0_10px_40px_rgba(0,0,0,.25)] backdrop-blur-2xl"
              : "border-white/10 bg-[#070D14]/55 backdrop-blur-md"
          }
        `}
      >
        {/* Top moving callback strip */}
        <div className="hidden h-7 overflow-hidden border-b border-white/10 bg-[#070D14] lg:block">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max whitespace-nowrap"
          >
            {[...callbackItems, ...callbackItems].map((item, index) => (
              <Link
                key={`${item}-${index}`}
                to="/contact"
                className="flex items-center justify-center gap-5 px-8 text-[8px] font-semibold tracking-[0.3em] text-white/45 transition hover:text-[#C9A15A]"
              >
                <span className="text-[#C9A15A]">✦</span>
                {item}
              </Link>
            ))}
          </motion.div>
        </div>

        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3 text-white">
            <img
              src={logo}
              className="
                grid  w-46 place-items-center
                border border-[#C9A15A]/80
                font-serif text-lg text-[#C9A15A]
                transition duration-500
                group-hover:bg-[#C9A15A]
                group-hover:text-[#070D14]
              "
            ></img>

            {/* <span className="leading-none">
              <span className="block text-[10px] tracking-[0.3em] text-white/60">
                GURU
              </span>

              <span className="block text-sm font-semibold tracking-[0.12em]">
                ESTATES BANK
              </span>
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 xl:flex">
            {nav.map(([label, href]) => (
              <NavLink
                key={href}
                to={href}
                className={({ isActive }) => `
                  group relative py-2
                  text-[11px] tracking-[0.04em]
                  transition-colors duration-300
                  ${
                    isActive
                      ? "text-[#C9A15A]"
                      : "text-white/65 hover:text-white"
                  }
                `}
              >
                {label}

                <span
                  className="
                    absolute inset-x-0 -bottom-0.5
                    mx-auto h-px origin-left
                    scale-x-0 bg-[#C9A15A]
                    transition-transform duration-300
                    group-hover:scale-x-100
                  "
                />
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/contact"
              className="
                group flex items-center gap-2
                border border-[#C9A15A]
                bg-[#C9A15A]
                px-5 py-3
                text-[10px] font-bold
                tracking-[0.14em]
                text-[#070D14]
                transition-all duration-300
                hover:bg-transparent
                hover:text-[#C9A15A]
              "
            >
              TALK TO AN ADVISOR
              <ArrowUpRight
                size={14}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(true)}
            className="
              grid h-11 w-11 place-items-center
              border border-white/15
              bg-white/5
              text-white
              backdrop-blur
              transition hover:border-[#C9A15A]/60
              xl:hidden
            "
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-[60]
              overflow-y-auto
              bg-[#070D14]
              text-white
            "
          >
            {/* Mobile Header */}
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
              <Link
                onClick={() => setOpen(false)}
                to="/"
                className="flex items-center gap-3"
              >
                <span
                  className="
                    grid h-9 w-9 place-items-center
                    border border-[#C9A15A]
                    font-serif text-lg
                    text-[#C9A15A]
                  "
                >
                  G
                </span>

                <span className="text-sm font-semibold tracking-[0.12em]">
                  GURU ESTATES BANK
                </span>
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="
                  grid h-11 w-11 place-items-center
                  border border-white/15
                  text-white
                "
                aria-label="Close menu"
              >
                <X size={21} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <motion.nav
              initial="hidden"
              animate="show"
              className="mx-auto flex max-w-7xl flex-col px-5 pt-8 sm:px-8"
            >
              {nav.map(([label, href], i) => (
                <motion.div
                  key={href}
                  custom={i}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 18,
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.045,
                        duration: 0.45,
                      },
                    },
                  }}
                >
                  <Link
                    onClick={() => setOpen(false)}
                    to={href}
                    className="
                      group flex items-center
                      justify-between
                      border-b border-white/10
                      py-4
                      font-serif text-3xl
                      transition-colors
                      hover:text-[#C9A15A]
                    "
                  >
                    {label}

                    <ArrowUpRight
                      size={18}
                      className="
                        text-white/20
                        transition
                        group-hover:text-[#C9A15A]
                      "
                    />
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <Link
                onClick={() => setOpen(false)}
                to="/contact"
                className="
                  mt-8 inline-flex w-full
                  items-center justify-center
                  gap-3
                  bg-[#C9A15A]
                  px-6 py-4
                  text-xs font-bold
                  tracking-[0.15em]
                  text-[#070D14]
                "
              >
                TALK TO AN ADVISOR
                <ArrowUpRight size={16} />
              </Link>

              {/* Mobile Callback */}
              <Link
                onClick={() => setOpen(false)}
                to="/contact"
                className="
                  mt-3 flex items-center
                  justify-center gap-2
                  border border-white/10
                  py-4
                  text-[10px]
                  font-semibold
                  tracking-[0.18em]
                  text-white/50
                "
              >
                <Phone size={13} className="text-[#C9A15A]" />
                REQUEST A CALLBACK
              </Link>
            </motion.nav>

            {/* Decorative mobile detail */}
            <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/2 translate-y-1/2 rounded-full border border-[#C9A15A]/10" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 translate-x-1/2 translate-y-1/2 rounded-full border border-[#C9A15A]/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
