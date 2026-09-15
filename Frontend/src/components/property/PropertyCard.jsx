import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function PropertyCard({ property, onView }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden bg-white shadow-sm"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 bg-[#070d14]/85 px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#c9a15a]">
          {property.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#5b6470]">
          <MapPin size={13} />
          {property.location}
        </p>

        <h3 className="mt-2 font-display text-2xl">{property.title}</h3>

        <div className="mt-5 flex items-center justify-between border-t border-[#070d14]/10 pt-4">
          <span className="text-sm font-semibold">{property.price}</span>

          <button
            type="button"
            onClick={onView}
            aria-label={`View details for ${property.title}`}
            className="grid h-9 w-9 place-items-center border border-[#070d14]/15 transition-all duration-300 hover:border-[#c9a15a] hover:bg-[#c9a15a]"
          >
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
