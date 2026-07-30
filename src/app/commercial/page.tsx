import type { Metadata } from "next";
import Link from "next/link";
import { commercialServices, site } from "@/config/site";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBand, SectionHeading, StarItem } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import {
  BuildingIcon,
  ChecklistIcon,
  ChatIcon,
  TargetIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Commercial Cleaning in Jacksonville, FL",
  description:
    "Veteran-owned commercial cleaning in Jacksonville, Florida — office cleaning, janitorial service, and post-construction cleaning executed on schedule with quality-control discipline.",
  alternates: { canonical: "/commercial" },
};

const advantages = [
  {
    icon: TargetIcon,
    title: "Scope Built Around You",
    text: "We walk your facility, define the checklist together, and execute the same standard on every visit.",
  },
  {
    icon: ChecklistIcon,
    title: "Quality-Control Discipline",
    text: "Inspections and walkthroughs are built into the process — accountability isn't an extra.",
  },
  {
    icon: ChatIcon,
    title: "One Point of Contact",
    text: "Direct communication with the team doing the work. Issues get fixed, not forwarded.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <section className="bg-texture border-b-4 border-red bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            as="h1"
            eyebrow="Commercial Cleaning"
            title={
              <>
                Facilities kept{" "}
                <span className="text-gold">mission-ready</span>
              </>
            }
            lead={`Offices, retail, multi-unit properties, and construction sites across ${site.serviceArea.blurb} — cleaned on schedule, to standard, with clear communication.`}
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/quote" className="btn btn-gold">
              Request a Commercial Quote
            </Link>
            <a href={site.phone.telHref} className="btn btn-outline">
              Call {site.phone.display}
            </a>
          </div>
        </div>
      </section>

      {/* Commercial services */}
      <section
        aria-labelledby="com-services-heading"
        className="border-b-4 border-red bg-cream py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              onLight
              eyebrow="Business Services"
              title={
                <span id="com-services-heading">
                  Commercial cleaning services
                </span>
              }
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {commercialServices.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 100}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section
        aria-labelledby="com-advantages-heading"
        className="border-b-4 border-red bg-navy-mid py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Why Businesses Choose PFC"
              title={
                <span id="com-advantages-heading">
                  A contractor you don&rsquo;t have to chase
                </span>
              }
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 110}>
                <div className="card-navy h-full p-7">
                  <a.icon className="h-9 w-9 text-gold" aria-hidden="true" />
                  <h3 className="mt-4 font-head text-xl font-semibold tracking-wide text-cream">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">
                    {a.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="rounded-lg border-l-4 border-gold bg-navy p-7">
              <h3 className="flex items-center gap-3 font-head text-lg font-semibold tracking-[0.14em] text-gold">
                <BuildingIcon className="h-5 w-5" aria-hidden="true" />
                Who we serve
              </h3>
              <ul className="mt-4 grid gap-3 text-sm text-cream/80 sm:grid-cols-2 lg:grid-cols-3">
                <StarItem>Offices and professional suites</StarItem>
                <StarItem>Property managers and HOAs</StarItem>
                <StarItem>Retail and showrooms</StarItem>
                <StarItem>Apartment communities and turnovers</StarItem>
                <StarItem>Contractors and builders</StarItem>
                <StarItem>Churches and community spaces</StarItem>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Let's scope your facility"
        lead="Tell us about your space and schedule — we'll build a plan around it."
      />
    </>
  );
}
