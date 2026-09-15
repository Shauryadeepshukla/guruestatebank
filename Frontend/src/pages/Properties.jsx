import { useMemo, useState } from "react";
import Popup from "../components/layout/Popup";
import {
  ArrowUpRight,
  ChevronDown,
  MapPin,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { properties } from "../data/properties";
import PropertyCard from "../components/property/PropertyCard";
import Reveal from "../components/ui/Reveal";
const propertyTypes = ["All", "Residential", "Commercial"];
const configurations = [
  "All Configurations",
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "4 BHK",
  "5+ BHK",
];
const locations = ["All Locations", "Gurugram", "Delhi", "Noida", "Faridabad"];
export default function Properties() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const [location, setLocation] = useState("All Locations");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [configuration, setConfiguration] = useState("All Configurations");
  const [showFilters, setShowFilters] = useState(false);
  const filtered = useMemo(() => {
    return properties.filter((property) => {
      const searchable =
        ` ${property.title || ""} ${property.location || ""} ${property.type || ""} ${property.developer || ""} ${property.configuration || ""} `.toLowerCase();
      const matchesQuery =
        !query.trim() || searchable.includes(query.toLowerCase());
      const matchesType = type === "All" || property.type === type;
      const matchesLocation =
        location === "All Locations" ||
        (property.location || "")
          .toLowerCase()
          .includes(location.toLowerCase());
      const matchesConfiguration =
        configuration === "All Configurations" ||
        (property.configuration || "")
          .toLowerCase()
          .includes(configuration.toLowerCase());
      return (
        matchesQuery && matchesType && matchesLocation && matchesConfiguration
      );
    });
  }, [query, type, location, configuration]);
  const activeFilters = [
    type !== "All" && type,
    location !== "All Locations" && location,
    configuration !== "All Configurations" && configuration,
  ].filter(Boolean);
  const clearFilters = () => {
    setQuery("");
    setType("All");
    setLocation("All Locations");
    setConfiguration("All Configurations");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ee] text-[#070d14]">
      {" "}
      {/* ------------------------------------------------ HERO ------------------------------------------------ */}{" "}
      <section className="relative bg-[#240d0d] px-5 pb-20 pt-32 text-white sm:px-8 lg:px-10 lg:pb-28 lg:pt-44">
        {" "}
        {/* Decorative architectural lines */}{" "}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {" "}
          <div className="hishaurya absolute right-[12%] top-0 h-full w-px bg-[#c9a15a]/10" />{" "}
          <div className="absolute right-[25%] top-0 h-full w-px bg-[#c9a15a]/10" />{" "}
          <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.04]" />{" "}
          <div className="absolute -right-32 top-20 h-96 w-96 rounded-full border border-[#c9a15a]/10" />{" "}
          <div className="absolute -right-20 top-32 h-72 w-72 rounded-full border border-[#c9a15a]/10" />{" "}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#c9a15a]/30 to-transparent" />{" "}
        </div>{" "}
        <div className="relative mx-auto max-w-[1400px]">
          {" "}
          <Reveal>
            {" "}
            <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em] text-[#c9a15a]">
              {" "}
              <span className="h-px w-8 bg-[#c9a15a]" /> Property Directory{" "}
            </div>{" "}
          </Reveal>{" "}
          <Reveal delay={0.08}>
            {" "}
            <h1 className="mt-7 max-w-4xl font-display text-5xl leading-[0.95] tracking-[-0.035em] sm:text-7xl lg:text-[100px]">
              {" "}
              Find a place <br />{" "}
              <span className="text-[#c9a15a]">worth owning.</span>{" "}
            </h1>{" "}
          </Reveal>{" "}
          <Reveal delay={0.14}>
            {" "}
            <div className="mt-8 flex max-w-2xl items-start gap-4">
              {" "}
              <div className="mt-2 h-px w-10 shrink-0 bg-[#c9a15a]" />{" "}
              <p className="text-sm leading-7 text-white/60 sm:text-base">
                {" "}
                A considered selection of residential, commercial and investment
                opportunities, curated around your goals.{" "}
              </p>{" "}
            </div>{" "}
          </Reveal>{" "}
          {/* Hero meta */}{" "}
          <Reveal delay={0.2}>
            {" "}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.2em] text-white/40">
              {" "}
              <span>Residential</span> <span>Commercial</span>{" "}
              <span>Investment</span> <span>NRI Advisory</span>{" "}
            </div>{" "}
          </Reveal>{" "}
        </div>{" "}
      </section>{" "}
      {/* ------------------------------------------------ SEARCH / FILTER BAR ------------------------------------------------ */}{" "}
      <section className="relative z-20 -mt-8 px-5 sm:px-8 lg:px-10">
        {" "}
        <Reveal>
          {" "}
          <div className="mx-auto max-w-[1400px]">
            {" "}
            <div className="border border-[#c9a15a]/20 bg-[#070d14] p-3 shadow-[0_25px_70px_rgba(7,13,20,0.18)] sm:p-4">
              {" "}
              <div className="grid gap-3 lg:grid-cols-[1.7fr_1fr_1fr_1fr_auto]">
                {" "}
                {/* Search */}{" "}
                <div className="group flex min-h-[58px] items-center gap-3 border border-white/10 bg-white/[0.04] px-4 transition-colors duration-300 focus-within:border-[#c9a15a]/60">
                  {" "}
                  <Search
                    size={17}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#c9a15a]"
                  />{" "}
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search property, location or developer"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                  />{" "}
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="text-white/30 transition-colors hover:text-white"
                    >
                      {" "}
                      <X size={15} />{" "}
                    </button>
                  )}{" "}
                </div>{" "}
                {/* Type */}{" "}
                <FilterSelect
                  value={type}
                  onChange={setType}
                  options={propertyTypes}
                />{" "}
                {/* Location */}{" "}
                <FilterSelect
                  value={location}
                  onChange={setLocation}
                  options={locations}
                />{" "}
                {/* Configuration */}{" "}
                <FilterSelect
                  value={configuration}
                  onChange={setConfiguration}
                  options={configurations}
                />{" "}
              </div>{" "}
              {/* Expanded filters */}{" "}
            </div>{" "}
          </div>{" "}
        </Reveal>{" "}
      </section>{" "}
      {/* ------------------------------------------------ RESULTS HEADER ------------------------------------------------ */}{" "}
      <section className="px-5 pt-14 sm:px-8 lg:px-10 lg:pt-20">
        {" "}
        <div className="mx-auto max-w-[1400px]">
          {" "}
          <Reveal>
            {" "}
            <div className="flex flex-col justify-between gap-6 border-b border-[#070d14]/10 pb-6 md:flex-row md:items-end">
              {" "}
              <div>
                {" "}
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#b54a4a]">
                  {" "}
                  Curated Opportunities{" "}
                </p>{" "}
                <div className="mt-2 flex items-baseline gap-3">
                  {" "}
                  <h2 className="font-display text-4xl sm:text-5xl">
                    {" "}
                    Properties{" "}
                  </h2>{" "}
                  <span className="text-xs text-[#5b6470]">
                    {" "}
                    {filtered.length.toString().padStart(2, "0")}{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="text-xs text-[#5b6470]">
                {" "}
                Showing{" "}
                <span className="font-medium text-[#070d14]">
                  {" "}
                  {filtered.length}{" "}
                </span>{" "}
                opportunities{" "}
              </div>{" "}
            </div>{" "}
          </Reveal>{" "}
          {/* Active filters */}{" "}
          {activeFilters.length > 0 && (
            <Reveal>
              {" "}
              <div className="flex flex-wrap items-center gap-2 border-b border-[#070d14]/10 py-4">
                {" "}
                <span className="mr-2 text-[9px] uppercase tracking-[0.2em] text-[#5b6470]">
                  {" "}
                  Active:{" "}
                </span>{" "}
                {activeFilters.map((filter) => (
                  <span
                    key={filter}
                    className="flex items-center gap-2 border border-[#c9a15a]/40 bg-[#c9a15a]/10 px-3 py-1.5 text-[10px] uppercase tracking-wider text-[#070d14]"
                  >
                    {" "}
                    {filter}{" "}
                  </span>
                ))}{" "}
                <button
                  onClick={clearFilters}
                  className="ml-2 text-[9px] uppercase tracking-[0.2em] text-[#b54a4a] transition-colors hover:text-[#070d14]"
                >
                  {" "}
                  Clear all{" "}
                </button>{" "}
              </div>{" "}
            </Reveal>
          )}{" "}
        </div>{" "}
      </section>{" "}
      {/* ------------------------------------------------ PROPERTY GRID ------------------------------------------------ */}{" "}
      <section className="px-5 pb-32 pt-8 sm:px-8 lg:px-10">
        {" "}
        <div className="mx-auto max-w-[1400px]">
          {" "}
          {filtered.length > 0 ? (
            <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {" "}
              {filtered.map((property, index) => (
                <Reveal
                  key={property.id || property.title}
                  delay={index * 0.06}
                >
                  {" "}
                  <PropertyCard
                    property={property}
                    onView={() => setSelectedProperty(property)}
                  />{" "}
                </Reveal>
              ))}{" "}
            </div>
          ) : (
            <EmptyState clearFilters={clearFilters} />
          )}{" "}
        </div>{" "}
      </section>{" "}
      <Popup
        open={!!selectedProperty}
        onClose={() => setSelectedProperty(null)}
        data={selectedProperty}
        type="property"
      />
      {/* ------------------------------------------------ BOTTOM CTA ------------------------------------------------ */}{" "}
      <section className="relative overflow-hidden bg-[#240d0d] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
        {" "}
        <div className="pointer-events-none absolute inset-0">
          {" "}
          <div className="absolute right-[10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#c9a15a]/10" />{" "}
          <div className="absolute right-[16%] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full border border-[#c9a15a]/10" />{" "}
        </div>{" "}
        <div className="relative mx-auto flex max-w-[1400px] flex-col justify-between gap-10 md:flex-row md:items-end">
          {" "}
          <div className="max-w-2xl">
            {" "}
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a15a]">
              {" "}
              Need a more considered search?{" "}
            </p>{" "}
            <h2 className="mt-5 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
              {" "}
              Let our advisors <br />{" "}
              <span className="text-[#c9a15a]">curate it for you.</span>{" "}
            </h2>{" "}
          </div>{" "}
          <button className="group flex w-fit items-center gap-4 border border-[#c9a15a]/60 px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-[#c9a15a] transition-all duration-300 hover:bg-[#c9a15a] hover:text-[#070d14]">
            {" "}
            Talk to an Advisor{" "}
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />{" "}
          </button>{" "}
        </div>{" "}
      </section>{" "}
    </main>
  );
}
/* --------------------------------------------- SELECT COMPONENT --------------------------------------------- */ function FilterSelect({
  value,
  onChange,
  options,
}) {
  return (
    <div className="relative">
      {" "}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[58px] w-full appearance-none border border-white/10 bg-white/[0.04] px-4 pr-10 text-left text-xs text-white outline-none transition-colors duration-300 hover:border-white/20 focus:border-[#c9a15a]/60"
      >
        {" "}
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#070d14] text-white"
          >
            {" "}
            {option}{" "}
          </option>
        ))}{" "}
      </select>{" "}
      <ChevronDown
        size={15}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#c9a15a]"
      />{" "}
    </div>
  );
}
/* --------------------------------------------- ADVANCED FILTER --------------------------------------------- */ function AdvancedFilter({
  label,
  value,
}) {
  return (
    <button className="flex items-center justify-between border border-white/10 bg-white/[0.04] px-4 py-3 text-left transition-colors hover:border-[#c9a15a]/40">
      {" "}
      <span>
        {" "}
        <span className="block text-[8px] uppercase tracking-[0.2em] text-white/30">
          {" "}
          {label}{" "}
        </span>{" "}
        <span className="mt-1 block text-xs text-white/70"> {value} </span>{" "}
      </span>{" "}
      <ChevronDown size={14} className="text-[#c9a15a]" />{" "}
    </button>
  );
}
/* --------------------------------------------- EMPTY STATE --------------------------------------------- */ function EmptyState({
  clearFilters,
}) {
  return (
    <div className="border border-[#070d14]/10 bg-white px-6 py-20 text-center sm:py-28">
      {" "}
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a15a]/40">
        {" "}
        <MapPin size={20} className="text-[#c9a15a]" />{" "}
      </div>{" "}
      <p className="mt-6 text-[10px] uppercase tracking-[0.25em] text-[#b54a4a]">
        {" "}
        No matching properties{" "}
      </p>{" "}
      <h3 className="mt-3 font-display text-3xl">
        {" "}
        Nothing matched your search.{" "}
      </h3>{" "}
      <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#5b6470]">
        {" "}
        Try adjusting your location, property type or configuration. Our
        advisors can also help you find opportunities that aren't currently
        listed.{" "}
      </p>{" "}
      <button
        onClick={clearFilters}
        className="mt-7 border border-[#070d14] px-6 py-3 text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-[#070d14] hover:text-white"
      >
        {" "}
        Reset Search{" "}
      </button>{" "}
    </div>
  );
}
