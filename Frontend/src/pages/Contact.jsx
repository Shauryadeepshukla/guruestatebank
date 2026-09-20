import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const interests = [
  "Buying a Home",
  "Property Investment",
  "Commercial Property",
  "SCO / Plot",
  "Leasing / Rental",
  "Property Advisory",
  "NRI Requirement",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");

    const form = e.target;
    const formData = new FormData(form);

    // Web3Forms Access Key
    formData.append("access_key", "6a4675e0-a0cb-4a5e-a9d1-820162e76ac1");

    // Email subject
    formData.append("subject", "New Property Enquiry - Guru Estates Bank");

    // Sender name shown in email
    formData.append("from_name", "Guru Estates Bank Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setSubmitError("Unable to submit your enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);

      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="overflow-hidden bg-[#f8f3ea] text-[#120b0a]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#240d0d] text-[#f8f3ea]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-28 -top-28 h-[480px] w-[480px] rounded-full border border-[#c9a15a]/20" />

          <div className="absolute -right-10 -top-10 h-[320px] w-[320px] rounded-full border border-[#c9a15a]/10" />

          <div className="absolute right-[18%] top-0 h-full w-px bg-[#c9a15a]/10" />

          <div className="absolute left-[10%] top-0 h-full w-px bg-white/5" />

          <div className="absolute bottom-0 left-0 h-px w-full bg-[#c9a15a]/15" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-12 bg-[#c9a15a]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ead7ad]">
              Let's Talk Property
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.9,
              ease,
            }}
            className="mt-7 max-w-5xl font-[var(--font-display)] text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
          >
            Tell us what
            <span className="block italic text-[#c9a15a]">
              you're looking for.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.8,
              ease,
            }}
            className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg"
          >
            Share your requirement and our team will help you identify the right
            next step.
          </motion.p>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTACT AREA
      ========================================================= */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_0.7fr]">
          {/* =====================================================
              FORM
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="bg-white p-6 shadow-[0_20px_70px_rgba(36,13,13,0.07)] sm:p-10 lg:p-12"
          >
            {submitted ? (
              /* =================================================
                 SUCCESS MESSAGE
              ================================================= */
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#c9a15a] bg-[#f8f3ea]">
                  <Send className="h-6 w-6 text-[#671f1c]" />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-[#9b3028]">
                  Enquiry Received
                </p>

                <h2 className="mt-4 max-w-lg font-[var(--font-display)] text-4xl">
                  Thank you.
                </h2>

                <p className="mt-4 max-w-md leading-7 text-[#120b0a]/55">
                  We've received your enquiry and a member of our team will get
                  in touch shortly.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setSubmitError("");
                  }}
                  className="mt-8 border-b border-[#671f1c] pb-1 text-sm font-semibold text-[#671f1c]"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <>
                {/* FORM HEADER */}
                <div className="mb-10">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9b3028]">
                    Your Requirement
                  </span>

                  <h2 className="mt-4 font-[var(--font-display)] text-3xl sm:text-4xl">
                    Start a conversation.
                  </h2>
                </div>

                {/* =================================================
                    FORM
                ================================================= */}
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* FULL NAME + PHONE */}
                  <div className="grid gap-7 sm:grid-cols-2">
                    <Field
                      label="Full Name"
                      name="name"
                      placeholder="Your name"
                      required
                    />

                    <Field
                      label="Phone Number"
                      name="phone"
                      placeholder="+91"
                      type="tel"
                      required
                    />
                  </div>

                  {/* EMAIL */}
                  <Field
                    label="Email Address"
                    name="email"
                    placeholder="you@example.com"
                    type="email"
                    required
                  />

                  {/* =================================================
                      INTEREST
                  ================================================= */}
                  <div>
                    <label className="mb-3 block text-xs font-bold uppercase tracking-[0.16em] text-[#120b0a]/55">
                      I'm Interested In
                    </label>

                    <div className="grid gap-2 sm:grid-cols-2">
                      {interests.map((interest) => (
                        <label
                          key={interest}
                          className="group flex cursor-pointer items-center gap-3 border border-[#120b0a]/10 px-4 py-3 transition-all duration-200 hover:border-[#c9a15a] hover:bg-[#f8f3ea]/50"
                        >
                          <input
                            type="radio"
                            name="interest"
                            value={interest}
                            required
                            className="h-4 w-4 accent-[#671f1c]"
                          />

                          <span className="text-sm text-[#120b0a]/70">
                            {interest}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* LOCATION + BUDGET */}
                  <div className="grid gap-7 sm:grid-cols-2">
                    <Field
                      label="Preferred Location"
                      name="location"
                      placeholder="e.g. Gurugram"
                    />

                    <Field
                      label="Budget"
                      name="budget"
                      placeholder="e.g. ₹2 Cr – ₹5 Cr"
                    />
                  </div>

                  {/* PROJECT */}
                  <Field
                    label="Project"
                    name="project"
                    placeholder="Optional — tell us if you have a specific project in mind"
                  />

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-3 block text-xs font-bold uppercase tracking-[0.16em] text-[#120b0a]/55"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us a little more about what you're looking for..."
                      className="w-full resize-none border border-[#120b0a]/10 bg-[#f8f3ea]/40 px-4 py-4 text-sm leading-6 outline-none transition-colors duration-200 placeholder:text-[#120b0a]/30 focus:border-[#c9a15a]"
                    />
                  </div>

                  {/* =================================================
                      PRIVACY + SUBMIT
                  ================================================= */}
                  <div className="border-t border-[#120b0a]/10 pt-7">
                    <p className="text-xs leading-6 text-[#120b0a]/45">
                      By submitting this form, you agree to be contacted
                      regarding your enquiry. See our{" "}
                      <a
                        href="/privacy-policy"
                        className="font-semibold text-[#671f1c] underline underline-offset-2"
                      >
                        Privacy Policy
                      </a>{" "}
                      for more information.
                    </p>

                    {/* ERROR MESSAGE */}
                    {submitError && (
                      <div className="mt-5 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                        {submitError}
                      </div>
                    )}

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#671f1c] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#240d0d] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Enquiry
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>

          {/* =====================================================
              CONTACT INFO
          ===================================================== */}
          <motion.aside
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease,
            }}
            className="space-y-4"
          >
            {/* CALL */}
            <ContactCard
              icon={Phone}
              label="Call Us"
              value="Talk to an Advisor"
              href="tel:+8282888888"
            />

            {/* WHATSAPP */}
            <ContactCard
              icon={MessageCircle}
              label="WhatsApp"
              value="WhatsApp an Advisor"
              href="https://wa.me/918282888888"
            />

            {/* EMAIL */}
            <ContactCard
              icon={Mail}
              label="Email"
              value="guruestatesbank@gmail.com"
              href="mailto:guruestatesbank@gmail.com"
            />

            {/* OFFICE */}
            <div className="bg-[#240d0d] p-7 text-[#f8f3ea] sm:p-8">
              <MapPin className="h-6 w-6 text-[#c9a15a]" />

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#c9a15a]">
                Office
              </p>

              <h3 className="mt-3 font-[var(--font-display)] text-2xl">
                Visit our office
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                B-120 A, Revenue Estate Village of Khushrupur, Vishnu Garden,
                Keshav Kunj, Sector-105, Dwarka Expressway, 122001
              </p>

              <div className="mt-7 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Clock3 className="h-4 w-4 text-[#c9a15a]" />
                  <span>Working hours to be confirmed</span>
                </div>
              </div>
            </div>

            {/* QUICK TRUST */}
            <div className="border border-[#c9a15a]/40 bg-[#f8f3ea] p-7 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b3028]">
                Why Speak With Us?
              </span>

              <h3 className="mt-4 font-[var(--font-display)] text-2xl leading-tight">
                Start with your requirement,
                <span className="text-[#671f1c]"> not a property list.</span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#120b0a]/55">
                Tell us your goals, location and budget. We'll help you
                understand the relevant options and next steps.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#671f1c] px-5 py-20 text-center text-[#f8f3ea] sm:px-8 lg:py-24">
        <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a15a]/15" />

        <div className="relative mx-auto max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#ead7ad]">
            People. Property. Possibilities.
          </span>

          <h2 className="mt-5 font-[var(--font-display)] text-4xl leading-tight sm:text-5xl">
            Your next property decision
            <span className="block italic text-[#c9a15a]">starts here.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55">
            Whether you are buying a home, investing, exploring commercial
            property or looking for advisory support, let's talk.
          </p>
        </div>
      </section>
    </main>
  );
}

/* =============================================================
   FORM FIELD COMPONENT
============================================================= */

function Field({ label, name, placeholder, type = "text", required = false }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-xs font-bold uppercase tracking-[0.16em] text-[#120b0a]/55"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border-b border-[#120b0a]/15 bg-transparent px-0 py-3 text-sm outline-none transition-colors duration-200 placeholder:text-[#120b0a]/30 focus:border-[#671f1c]"
      />
    </div>
  );
}

/* =============================================================
   CONTACT CARD COMPONENT
============================================================= */

function ContactCard({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-5 border border-[#120b0a]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a15a] hover:shadow-[0_15px_45px_rgba(36,13,13,0.06)]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f8f3ea]">
        <Icon className="h-5 w-5 text-[#671f1c]" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b3028]">
          {label}
        </p>

        <p className="mt-1 truncate text-sm font-semibold text-[#120b0a]">
          {value}
        </p>
      </div>

      <ArrowUpRight className="h-4 w-4 text-[#c9a15a] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>
  );
}
