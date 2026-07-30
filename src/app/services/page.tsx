import type { Metadata } from "next";
import Link from "next/link";
import { services, site } from "@/config/site";
import { serviceIcons, PhoneIcon } from "@/components/icons";
import { CtaBand, SectionHeading, StarItem } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Cleaning Services in Jacksonville, FL",
  description:
    "Residential, deep, move-in, move-out, office, commercial, and post-construction cleaning in Jacksonville, Florida — delivered with veteran discipline by PFC Cleaning Service.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-texture border-b-4 border-red bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            as="h1"
            eyebrow="Our Services"
            title="Cleaning services with a mission mindset"
            lead={`Every service below is delivered the PFC way — planned, executed, and inspected. Serving ${site.serviceArea.blurb}.`}
          />
          {/* Jump links */}
          <nav aria-label="Jump to a service" className="mt-10">
            <ul className="flex flex-wrap justify-center gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="inline-block rounded border-2 border-navy-line px-4 py-2 font-head text-xs font-semibold tracking-[0.12em] text-cream transition-colors hover:border-gold hover:text-gold"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Service detail sections */}
      {services.map((service, i) => {
        const Icon = serviceIcons[service.icon];
        const dark = i % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            aria-labelledby={`${service.slug}-title`}
            className={`scroll-mt-24 border-b-4 border-red py-16 ${
              dark ? "bg-texture bg-navy" : "bg-cream"
            }`}
          >
            <div
              className={`mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] ${
                dark ? "" : ""
              }`}
            >
              <Reveal>
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border-2 ${
                      dark
                        ? "border-gold/60 bg-navy-deep text-gold"
                        : "border-navy bg-navy text-gold"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <p
                      className={`eyebrow text-xs ${dark ? "text-gold" : "text-red"}`}
                    >
                      {service.category === "residential"
                        ? "Residential"
                        : "Commercial"}
                    </p>
                    <h2
                      id={`${service.slug}-title`}
                      className={`font-display text-3xl sm:text-4xl ${
                        dark ? "text-cream" : "text-navy"
                      }`}
                    >
                      {service.name}
                    </h2>
                  </div>
                </div>
                <p
                  className={`mt-5 max-w-2xl leading-relaxed ${
                    dark ? "text-cream/75" : "text-ink/75"
                  }`}
                >
                  {service.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={`/quote?service=${service.slug}`}
                    className="btn btn-gold"
                  >
                    Request a Quote
                  </Link>
                  <a
                    href={site.phone.telHref}
                    className={`btn ${dark ? "btn-outline" : "btn-outline-navy"}`}
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call {site.phone.display}
                  </a>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div
                  className={`rounded-lg border-2 p-6 ${
                    dark
                      ? "border-navy-line bg-navy-mid/60"
                      : "border-sand bg-white"
                  }`}
                >
                  <h3
                    className={`font-head text-sm font-bold tracking-[0.18em] ${
                      dark ? "text-gold" : "text-red"
                    }`}
                  >
                    What&rsquo;s Covered
                  </h3>
                  <ul
                    className={`mt-4 space-y-3 text-sm leading-relaxed ${
                      dark ? "text-cream/80" : "text-ink/80"
                    }`}
                  >
                    {service.includes.map((item) => (
                      <StarItem key={item}>{item}</StarItem>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <CtaBand
        title="Not sure which service fits?"
        lead={`Call ${site.phone.display} and we'll help you scope the mission.`}
      />
    </>
  );
}
