import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  to = "/contact",
  variant = "gold",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-[.14em] transition-all duration-300";
  const variants = {
    gold: "bg-champagne text-ink hover:bg-ink hover:text-champagne border border-champagne",
    dark: "bg-ink text-white hover:bg-champagne hover:text-ink border border-ink",
    outline:
      "border border-white/30 text-white hover:border-champagne hover:text-champagne",
  };
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <ArrowUpRight size={15} />
    </Link>
  );
}
