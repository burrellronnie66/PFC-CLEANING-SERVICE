import type { Metadata } from "next";
import { Suspense } from "react";
import { site } from "@/config/site";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeading } from "@/components/ui";
import { PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Request a Quote — Free Cleaning Estimate",
  description:
    "Request a free cleaning quote from PFC Cleaning Service in Jacksonville, FL. Residential and commercial — tell us about your space and we'll respond promptly.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <section className="bg-texture border-b-4 border-red bg-navy py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          as="h1"
          eyebrow="Request a Quote"
          title={
            <>
              Start your <span className="text-gold">cleaning mission</span>
            </>
          }
          lead="Tell us about your space. We'll review the details and get back to you promptly with a clear, no-obligation quote."
        />
        <p className="mt-6 text-center text-sm text-cream/70">
          Prefer to talk?{" "}
          <a
            href={site.phone.telHref}
            className="inline-flex items-center gap-1.5 font-head font-semibold tracking-wide text-gold underline underline-offset-4 hover:text-cream"
          >
            <PhoneIcon className="h-4 w-4" aria-hidden="true" />
            Call {site.phone.display}
          </a>
        </p>
        <div className="mt-12">
          <Suspense fallback={null}>
            <QuoteForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
