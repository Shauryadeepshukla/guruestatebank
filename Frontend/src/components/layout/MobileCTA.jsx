import { Link } from "react-router-dom";
import { MessageCircle, Search } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-amber-400/60 p-2 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <Link
          to="/properties"
          className="flex items-center justify-center gap-2 bg-white/10 py-3 text-[11px] font-semibold tracking-wider text-white"
        >
          <Search size={15} /> SEARCH
        </Link>
        <a
          href="https://wa.me/+918282888888"
          className="flex items-center justify-center gap-2 bg-champagne py-3 text-[11px] font-semibold tracking-wider text-ink"
        >
          <MessageCircle size={15} /> WHATSAPP
        </a>
      </div>
    </div>
  );
}
