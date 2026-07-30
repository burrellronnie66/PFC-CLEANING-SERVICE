import Link from "next/link";
import { site } from "@/config/site";
import { StarDivider } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-texture flex min-h-[60vh] items-center border-b-4 border-red bg-navy py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="eyebrow text-sm text-gold">
          <span aria-hidden="true">★ </span>404
          <span aria-hidden="true"> ★</span>
        </p>
        <h1 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
          This area is <span className="text-gold">off the map</span>
        </h1>
        <p className="mt-5 leading-relaxed text-cream/75">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
          Let&rsquo;s get you back on mission.
        </p>
        <StarDivider className="mt-8" />
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn btn-gold">
            Back to Home
          </Link>
          <a href={site.phone.telHref} className="btn btn-outline">
            Call {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
