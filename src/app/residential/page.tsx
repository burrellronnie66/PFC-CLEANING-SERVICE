import type { Metadata } from "next";
import Link from "next/link";
import { residentialServices, site } from "@/config/site";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBand, SectionHeading, StarItem } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { HomeIcon, ShieldStarIcon, ClockIcon, EyeIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Residential Cleaning in Jacksonville, FL",
  description:
    "Veteran-owned residential cleaning in Jacksonville, Florida — standard cleaning, deep cleaning, and move-in / move-out cleaning delivered with discipline and respect for your home.",
  alternates: { canonical: "/residential" },
};

const promises = [
  {
    icon: ShieldStarIcon,
    title: "Respect for Your Home",
    text: "We treat your home like it's under our care — because it is. Careful, courteous, and professional on every visit.",
  },
  {
    icon: ClockIcon,
    title: "On Time, Every Time",
    text: "Reliable scheduling you can plan your day around. If we say we'll be there, we're there.",
  },
  {
    icon: EyeIcon,
    title: "Details Done Right",
    text: "Corners, edges, baseboards, and fixtures — the small things are the standard, not an upsell.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      <section className="bg-texture border-b-4 border-red bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            as="h1"
            eyebrow="Residential Cleaning"
            title={
              <>
                A home cleaned with{" "}
                <span className="text-gold">military precision</span>
              </>
            }
            lead={`From weekly upkeep to full deep cleans and turnovers, ${site.name} keeps homes across ${site.serviceArea.blurb} squared away.`}
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/quote" className="btn btn-gold">
              Get Your Free Quote
            </Link>
            <a href={site.phone.telHref} className="btn btn-outline">
              Call {site.phone.display}
            </a>
          </div>
        </div>
      </section>

      {/* Residential services */}
      <section
        aria-labelledby="res-services-heading"
        className="border-b-4 border-red bg-cream py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              onLight
              eyebrow="Home Services"
              title={
                <span id="res-services-heading">
                  Residential cleaning services
                </span>
              }
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {residentialServices.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 2) * 100}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Homeowner promises */}
      <section
        aria-labelledby="res-promise-heading"
        className="border-b-4 border-red bg-navy-mid py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="The PFC Standard"
              title={
                <span id="res-promise-heading">
                  What homeowners can expect
                </span>
              }
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {promises.map((p, i) => (
              <Reveal key={p.title} delay={i * 110}>
                <div className="card-navy h-full p-7">
                  <p.icon className="h-9 w-9 text-gold" aria-hidden="true" />
                  <h3 className="mt-4 font-head text-xl font-semibold tracking-wide text-cream">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="rounded-lg border-l-4 border-gold bg-navy p-7">
              <h3 className="flex items-center gap-3 font-head text-lg font-semibold tracking-[0.14em] text-gold">
                <HomeIcon className="h-5 w-5" aria-hidden="true" />
                Great fit for
              </h3>
              <ul className="mt-4 grid gap-3 text-sm text-cream/80 sm:grid-cols-2 lg:grid-cols-3">
                <StarItem>Busy families and professionals</StarItem>
                <StarItem>Military families PCSing in or out</StarItem>
                <StarItem>Realtors preparing listings</StarItem>
                <StarItem>Landlords and rental turnovers</StarItem>
                <StarItem>Seasonal and one-time deep cleans</StarItem>
                <StarItem>Recurring weekly or bi-weekly upkeep</StarItem>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready for a cleaner home?"
        lead="Request a free residential quote — we'll respond promptly."
      />
    </>
  );
}
