import Link from "next/link";
import { ArtSlot } from "@/components/ArtSlot";
import { Reveal } from "@/components/Reveal";
import { StarItem } from "@/components/ui";
import { bookHref } from "@/config/site";

/**
 * Devil Dog mascot feature — the mascot stands for toughness,
 * loyalty, and dependability. Artwork slot: public/images/devil-dog.png
 */
export function DevilDog() {
  return (
    <section
      aria-labelledby="devildog-heading"
      className="bg-sand-camo border-b-4 border-red py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow text-sm text-red">
            <span aria-hidden="true">★ </span>The Mascot
            <span aria-hidden="true"> ★</span>
          </p>
          <h2
            id="devildog-heading"
            className="mt-4 font-display text-4xl leading-[1.05] text-navy sm:text-5xl"
          >
            Meet the <span className="text-red">Devil Dog</span> standard
          </h2>
          <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-ink/80">
            No shortcuts. No excuses. Just disciplined cleaning and dependable
            results.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-ink/70">
            Our Devil Dog isn&rsquo;t about being fierce — he&rsquo;s about being
            faithful. He represents the loyalty, toughness, and follow-through
            behind every PFC clean: we hold the line on quality until the job
            is done right.
          </p>
          <ul className="mt-6 grid max-w-xl gap-3 text-ink/80 sm:grid-cols-2">
            <StarItem>Loyal to our clients</StarItem>
            <StarItem>Tough on dirt and grime</StarItem>
            <StarItem>Dependable on every visit</StarItem>
            <StarItem>Committed to the finish</StarItem>
          </ul>
          <div className="mt-8">
            <Link href={bookHref} className="btn btn-red">
              Start Your Cleaning Mission
            </Link>
          </div>
        </Reveal>
        <Reveal className="order-1 mx-auto w-full max-w-sm lg:order-2" delay={120}>
          <ArtSlot
            src="/images/devil-dog.png"
            alt="PFC Cleaning Service Devil Dog mascot — a bulldog in desert camouflage with arms crossed"
            width={1000}
            height={1000}
            float
            sizes="(min-width: 1024px) 24rem, 85vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
