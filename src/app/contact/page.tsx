import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { CtaBand, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us — Jacksonville, FL",
  description:
    "Contact PFC Cleaning Service in Jacksonville, Florida. Call 904-496-4760 or request a quote online for residential and commercial cleaning across Northeast Florida.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-texture border-b-4 border-red bg-navy py-16">
        <div className="mx-auto mb-12 max-w-3xl px-4 text-center sm:px-6">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Reach the team"
            lead="Questions, scheduling, special requests — call us directly or send a quote request and we'll take it from there."
          />
        </div>
        <ContactPanel />
      </section>
      <CtaBand />
    </>
  );
}
