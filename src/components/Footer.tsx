import Link from "next/link";
import { nav, services, site } from "@/config/site";
import { Logo } from "@/components/Logo";
import { GlobeIcon, PhoneIcon, MapPinIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-red bg-navy-deep pb-24 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          {/* Brand column */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" aria-label={`${site.name} — home`}>
              <Logo />
            </Link>
            <p className="eyebrow text-sm text-gold">{site.tagline}</p>
            <p className="font-head text-sm font-semibold tracking-[0.14em] text-cream">
              Veteran-Owned &amp; Operated
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-cream/70">
              Disciplined residential and commercial cleaning serving{" "}
              {site.serviceArea.blurb}.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h2 className="font-head mb-4 text-sm font-bold tracking-[0.2em] text-gold">
              Navigate
            </h2>
            <ul className="space-y-2.5">
              {[...nav, { href: "/quote", label: "Request a Quote" }].map(
                (item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-cream/80 transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h2 className="font-head mb-4 text-sm font-bold tracking-[0.2em] text-gold">
              Services
            </h2>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-cream/80 transition-colors hover:text-gold"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-head mb-4 text-sm font-bold tracking-[0.2em] text-gold">
              Contact
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={site.phone.telHref}
                  className="inline-flex items-center gap-2 font-head text-lg font-semibold tracking-wide text-cream transition-colors hover:text-gold"
                >
                  <PhoneIcon className="h-4 w-4 text-gold" />
                  {site.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2 text-cream/80">
                <MapPinIcon className="h-4 w-4 shrink-0 text-gold" />
                {site.serviceArea.city}, {site.serviceArea.state}
              </li>
              <li>
                <a
                  href={site.url}
                  className="inline-flex items-center gap-2 text-cream/80 transition-colors hover:text-gold"
                >
                  <GlobeIcon className="h-4 w-4 shrink-0 text-gold" />
                  {site.domainDisplay}
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <Link href="/quote" className="btn btn-red px-5 py-2.5 text-sm">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Motto band */}
        <div className="mt-12 border-y-2 border-navy-line py-5 text-center">
          <p className="font-display text-xl text-cream sm:text-2xl">
            Built on Honor.{" "}
            <span className="text-gold">Delivered with Pride.</span>
          </p>
        </div>

        {/* Legal */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-cream/60 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-gold">
                Privacy Policy
              </Link>
            </li>
            <li aria-hidden="true" className="text-gold">
              ★
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-gold">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
