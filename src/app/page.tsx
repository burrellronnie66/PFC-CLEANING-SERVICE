import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ServiceCard } from "@/components/ServiceCard";
import { WhyChoose } from "@/components/WhyChoose";
import { DevilDog } from "@/components/DevilDog";
import { HowItWorks } from "@/components/HowItWorks";
import { ContactPanel } from "@/components/ContactPanel";
import { CtaBand, SectionHeading, StarDivider } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { services, site } from "@/config/site";
import { StarIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: `${site.name} | Veteran-Owned Cleaning in Jacksonville, FL`,
  description:
    "PFC Cleaning Service provides disciplined residential and commercial cleaning in Jacksonville, Florida. Veteran-owned, mission-driven, and committed to stronger standards.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* Services */}
      <section
        aria-labelledby="services-heading"
        className="border-b-4 border-red bg-cream py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              onLight
              eyebrow="Our Services"
              title={
                <span id="services-heading">
                  Residential &amp; commercial cleaning
                </span>
              }
              lead={`One disciplined crew for homes, offices, turnovers, and construction sites across ${site.serviceArea.region}.`}
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 100}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link href="/services" className="btn btn-outline-navy">
              View All Service Details
            </Link>
          </Reveal>
        </div>
      </section>

      <WhyChoose />

      {/* About teaser */}
      <section
        aria-labelledby="about-teaser-heading"
        className="border-b-4 border-red bg-navy-mid py-20"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow text-sm text-gold">
              <span aria-hidden="true">★ </span>About PFC
              <span aria-hidden="true"> ★</span>
            </p>
            <h2
              id="about-teaser-heading"
              className="mt-4 font-display text-4xl text-cream sm:text-5xl"
            >
              What <span className="text-gold">PFC</span> stands for
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                {
                  letter: "P",
                  word: "Pride",
                  text: "We put our name on every clean — and we make it count.",
                },
                {
                  letter: "F",
                  word: "Focus",
                  text: "Checklists, details, and follow-through. Nothing skipped.",
                },
                {
                  letter: "C",
                  word: "Commitment",
                  text: "The mission isn't over until your space is squared away.",
                },
              ].map((item) => (
                <div
                  key={item.word}
                  className="rounded-lg border-2 border-navy-line bg-navy p-6"
                >
                  <span className="font-display text-5xl text-red">
                    {item.letter}
                  </span>
                  <p className="font-head mt-2 text-xl font-semibold tracking-[0.14em] text-gold">
                    {item.word}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <StarDivider className="mt-10" />
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-cream/75">
              {site.name} is a veteran-owned company built from Marine Corps
              values: discipline, accountability, and respect for the people we
              serve. Read the full story of the standard behind the name.
            </p>
            <div className="mt-8">
              <Link href="/about" className="btn btn-outline">
                Our Story
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <DevilDog />
      <HowItWorks />
      <CtaBand />

      {/* Contact */}
      <section
        aria-labelledby="contact-heading"
        className="bg-texture bg-navy py-20"
      >
        <div className="mx-auto mb-12 max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title={<span id="contact-heading">Reach the team</span>}
              lead="Questions, scheduling, special requests — call or send a quote request and we'll take it from there."
            />
          </Reveal>
        </div>
        <ContactPanel />
      </section>

      {/* Bottom motto strip */}
      <div className="border-t-2 border-red bg-navy-deep py-6">
        <p className="flex flex-wrap items-center justify-center gap-3 px-4 text-center font-head text-sm font-semibold tracking-[0.22em] text-cream/80">
          Clean Spaces
          <StarIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
          Stronger Standards
          <StarIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
          Built on Honor
        </p>
      </div>
    </>
  );
}
