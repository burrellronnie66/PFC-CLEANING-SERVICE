import { StarIcon } from "@/components/icons";

const values = ["Veteran Owned", "Disciplined", "Dependable", "Dedicated"];

/** Horizontal value bar directly under the hero */
export function TrustBar() {
  return (
    <section
      aria-label="Our values"
      className="border-b-2 border-red/70 bg-navy-deep"
    >
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-4 py-5 sm:gap-x-8 sm:px-6">
        {values.map((value, i) => (
          <li key={value} className="flex items-center gap-x-5 sm:gap-x-8">
            <span className="font-head text-sm font-semibold tracking-[0.22em] text-cream sm:text-base">
              {value}
            </span>
            {i < values.length - 1 && (
              <StarIcon
                className="h-4 w-4 shrink-0 text-gold"
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
