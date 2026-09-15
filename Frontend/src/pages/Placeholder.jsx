import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";

export default function Placeholder({title,eyebrow}) {
  return <section className="min-h-[70vh] bg-ivory pb-28 pt-40"><div className="container-guru"><Reveal><p className="text-[11px] tracking-[.28em] text-champagne">{eyebrow}</p><h1 className="mt-4 max-w-5xl font-display text-6xl md:text-8xl">{title}</h1><p className="mt-7 max-w-xl text-base leading-8 text-muted">This page is scaffolded and ready for the next implementation phase, using the same Guru Estates Bank design system.</p><Button className="mt-8" to="/contact">TALK TO AN ADVISOR</Button></Reveal></div></section>;
}
