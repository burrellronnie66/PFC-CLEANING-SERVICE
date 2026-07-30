import Link from "next/link";
import { site, bookHref } from "@/config/site";
import { ArtSlot } from "@/components/ArtSlot";
import { PhoneIcon, StarIcon } from "@/components/icons";

/** Faint house-roof silhouette behind the hero */
function RoofSilhouette() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 900 420"
      className="pointer-events-none absolute -top-6 left-1/2 w-[140%] max-w-none -translate-x-1/2 opacity-[0.05] sm:w-[900px]"
    >
      <path
        d="M60 400 450 60l390 340"
        fill="none"
        stroke="#f5b51b"
        strokeWidth="26"
        strokeLinecap="round"
      />
      <path
        d="M330 165V90h70v130"
        fill="none"
        stroke="#f5b51b"
        strokeWidth="22"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      aria-label="PFC Cleaning Service — veteran-owned cleaning in Jacksonville, Florida"
      className="bg-texture relative overflow-hidden border-b-4 border-red bg-navy"
    >
      <div aria-hidden="true" className="bg-stars absolute inset-0" />
      <RoofSilhouette />

      {/* Gold accent edge */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-24 lg:pt-20">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <p
            className="hero-rise eyebrow inline-flex items-center gap-2 rounded border-2 border-red px-4 py-2 text-xs text-gold sm:text-sm"
            style={{ animationDelay: "0ms" }}
          >
            Pride <StarIcon className="h-3 w-3" aria-hidden="true" /> Focus{" "}
            <StarIcon className="h-3 w-3" aria-hidden="true" /> Commitment
          </p>

          <h1
            className="hero-rise mt-6 font-display text-5xl leading-[0.95] text-cream sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            We don&rsquo;t cut corners.
            <span className="mt-2 block text-gold">We clean them.</span>
          </h1>

          <p
            className="hero-rise mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg lg:mx-0"
            style={{ animationDelay: "240ms" }}
          >
            <strong className="font-head font-semibold tracking-wide text-cream">
              Veteran owned. Mission driven.
            </strong>{" "}
            {site.name} delivers residential and commercial cleaning across{" "}
            {site.serviceArea.blurb} — with discipline, respect, reliability,
            and attention to detail.
          </p>

          <div
            className="hero-rise mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            style={{ animationDelay: "360ms" }}
          >
            <Link href={bookHref} className="btn btn-gold w-full text-base sm:w-auto">
              Book Your Clean
            </Link>
            <a
              href={site.phone.telHref}
              className="btn btn-outline w-full text-base sm:w-auto"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {site.phone.display}
            </a>
          </div>

          <p
            className="hero-rise mt-6 font-head text-sm font-medium tracking-[0.18em] text-cream/60"
            style={{ animationDelay: "480ms" }}
          >
            Delivering discipline, respect, and excellence in every clean.
          </p>
        </div>

        {/* Artwork */}
        <div
          className="hero-rise relative mx-auto w-full max-w-sm lg:max-w-md"
          style={{ animationDelay: "200ms" }}
        >
          {/* Gold corner accents */}
          <div
            aria-hidden="true"
            className="absolute -left-3 -top-3 h-12 w-12 border-l-4 border-t-4 border-gold"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 h-12 w-12 border-b-4 border-r-4 border-gold"
          />
          <ArtSlot
            src="/images/marine.png"
            alt="PFC Cleaning Service Marine in desert camouflage holding a mop beside a red PFC cleaning bucket"
            width={900}
            height={1200}
            preload
            sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
