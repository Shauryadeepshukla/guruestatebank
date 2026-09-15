import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileCTA from "./MobileCTA";

export default function SiteLayout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header scrolled={scrolled} />
      <main>{children}</main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
