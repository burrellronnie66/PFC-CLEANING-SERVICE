import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui";

/** Shared shell for the privacy / terms pages */
export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b-4 border-red bg-cream py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading as="h1" onLight eyebrow={eyebrow} title={title} align="left" />
        <p className="mt-3 text-sm text-ink/60">Last updated: {updated}</p>
        <div
          className="prose-pfc mt-10 space-y-8 leading-relaxed text-ink/80
            [&_h2]:font-head [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-[0.08em] [&_h2]:text-navy
            [&_h2]:border-l-4 [&_h2]:border-red [&_h2]:pl-3
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
            [&_a]:font-semibold [&_a]:text-red [&_a]:underline [&_a]:underline-offset-4"
        >
          {children}
        </div>
      </div>
    </section>
  );
}
