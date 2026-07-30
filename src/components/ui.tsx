import Link from "next/link";
import type { ReactNode } from "react";
import { site, bookHref } from "@/config/site";
import { PhoneIcon, StarIcon } from "@/components/icons";

/** Gold-star row divider */
export function StarDivider({
  className = "",
  count = 3,
}: {
  className?: string;
  count?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-3 ${className}`}
    >
      <span className="h-0.5 w-12 bg-red" />
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className="h-4 w-4 text-gold" />
      ))}
      <span className="h-0.5 w-12 bg-red" />
    </div>
  );
}

/** Eyebrow + display headline used to open every section */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  onLight = false,
  align = "center",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  onLight?: boolean;
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
}) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignCls} ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow ? (
        <p className={`eyebrow text-sm ${onLight ? "text-red" : "text-gold"}`}>
          <span aria-hidden="true">★ </span>
          {eyebrow}
          <span aria-hidden="true"> ★</span>
        </p>
      ) : null}
      <Tag
        className={`font-display text-4xl leading-[1.05] sm:text-5xl ${
          onLight ? "text-navy" : "text-cream"
        }`}
      >
        {title}
      </Tag>
      {lead ? (
        <p
          className={`text-base leading-relaxed sm:text-lg ${
            onLight ? "text-ink/75" : "text-cream/75"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/** Full-width gold conversion band used across pages */
export function CtaBand({
  title = "Book Your Clean Today",
  lead = "Get a fast, no-obligation quote for your home or business.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section
      aria-label="Book your clean"
      className="border-y-4 border-red bg-gold"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
        <div>
          <p className="font-display text-3xl text-ink sm:text-4xl">{title}</p>
          <p className="mt-2 font-medium text-ink/80">{lead}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={bookHref}
            className="btn bg-navy text-cream border-navy hover:bg-navy-deep hover:border-red"
          >
            Start Your Cleaning Mission
          </Link>
          <a
            href={site.phone.telHref}
            className="btn btn-red"
          >
            <PhoneIcon className="h-4 w-4" />
            Call {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}

/** Checklist row with a gold star bullet */
export function StarItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <StarIcon className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}
