import Link from "next/link";
import type { Service } from "@/config/site";
import { serviceIcons, ArrowRightIcon } from "@/components/icons";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];
  return (
    <article className="card-navy group relative flex h-full flex-col p-6">
      {/* Red top accent */}
      <span
        aria-hidden="true"
        className="absolute inset-x-6 top-0 h-1 rounded-b bg-red opacity-70 transition-opacity group-hover:opacity-100"
      />
      <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg border-2 border-gold/60 bg-navy-deep text-gold transition-colors group-hover:border-red">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="font-head text-xl font-semibold tracking-wide text-cream">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/70">
        {service.blurb}
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/services#${service.slug}`}
          className="inline-flex items-center gap-1.5 font-head text-sm font-semibold tracking-[0.1em] text-gold underline-offset-4 transition-colors hover:text-cream hover:underline hover:decoration-red hover:decoration-2"
        >
          Learn More
          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only"> about {service.name}</span>
        </Link>
        <Link
          href={`/quote?service=${service.slug}`}
          className="btn btn-red px-4 py-2 text-xs"
        >
          Request a Quote
          <span className="sr-only"> for {service.name}</span>
        </Link>
      </div>
    </article>
  );
}
