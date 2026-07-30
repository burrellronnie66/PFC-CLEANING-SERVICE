import Link from "next/link";
import { site } from "@/config/site";
import {
  ClockIcon,
  GlobeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";

/** Contact block used on the home page and contact page */
export function ContactPanel() {
  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
      <Reveal>
        <div className="card-navy h-full p-8">
          <h3 className="font-display text-3xl text-cream">
            {site.name}
          </h3>
          <p className="eyebrow mt-2 text-sm text-gold">{site.tagline}</p>
          <ul className="mt-7 space-y-5">
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border-2 border-gold/60 text-gold">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-head text-sm font-semibold tracking-[0.14em] text-cream/60">
                  Service Area
                </p>
                <p className="text-cream">
                  {site.serviceArea.city}, {site.serviceArea.state} &amp;{" "}
                  {site.serviceArea.region}
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border-2 border-gold/60 text-gold">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-head text-sm font-semibold tracking-[0.14em] text-cream/60">
                  Phone
                </p>
                <a
                  href={site.phone.telHref}
                  className="font-head text-xl font-semibold tracking-wide text-cream transition-colors hover:text-gold"
                >
                  {site.phone.display}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border-2 border-gold/60 text-gold">
                <GlobeIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-head text-sm font-semibold tracking-[0.14em] text-cream/60">
                  Online
                </p>
                <a
                  href={site.url}
                  className="text-cream transition-colors hover:text-gold"
                >
                  {site.domainDisplay}
                </a>
              </div>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={site.phone.telHref} className="btn btn-gold">
              <PhoneIcon className="h-4 w-4" />
              Call Now
            </a>
            <Link href="/quote" className="btn btn-red">
              Request a Quote
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="flex h-full flex-col gap-6">
          <div className="card-navy p-8">
            <h3 className="flex items-center gap-3 font-head text-lg font-semibold tracking-[0.14em] text-gold">
              <ClockIcon className="h-5 w-5" aria-hidden="true" />
              Business Hours
            </h3>
            <dl className="mt-5 space-y-3">
              {site.hours.map((h) => (
                <div
                  key={h.days}
                  className="flex items-center justify-between gap-4 border-b border-navy-line/60 pb-3 text-sm last:border-0"
                >
                  <dt className="font-head font-semibold tracking-wide text-cream">
                    {h.days}
                  </dt>
                  <dd className="text-cream/75">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="card-navy flex-1 p-8">
            <h3 className="font-head text-lg font-semibold tracking-[0.14em] text-gold">
              Proudly Serving
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.serviceArea.communities.map((c) => (
                <li
                  key={c}
                  className="rounded border border-navy-line px-3 py-1.5 text-xs font-medium text-cream/80"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
