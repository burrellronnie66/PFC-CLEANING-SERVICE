import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { CtaBand, SectionHeading, StarDivider } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ArtSlot } from "@/components/ArtSlot";
import {
  FlagIcon,
  EyeIcon,
  HandshakeIcon,
  MedalIcon,
  TargetIcon,
  ChecklistIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About PFC — Veteran-Owned & Mission-Driven",
  description:
    "PFC stands for Pride, Focus, and Commitment. Learn how Marine Corps values — discipline, accountability, and respect — became the standard behind PFC Cleaning Service in Jacksonville, FL.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: MedalIcon,
    title: "Discipline",
    text: "Show up on time. Follow the checklist. Hold the standard even when nobody's watching.",
  },
  {
    icon: FlagIcon,
    title: "Accountability",
    text: "If something isn't right, we own it and we fix it. Our name is on every job.",
  },
  {
    icon: HandshakeIcon,
    title: "Respect",
    text: "For your home, your business, your time, and your trust. Every property is treated with care.",
  },
  {
    icon: EyeIcon,
    title: "Attention to Detail",
    text: "The corners, the edges, the baseboards — the details are where the standard lives.",
  },
  {
    icon: TargetIcon,
    title: "Finish the Mission",
    text: "A job isn't done at 90%. We work until the space is squared away — correctly.",
  },
  {
    icon: ChecklistIcon,
    title: "Inspect What You Expect",
    text: "Every clean ends with a walkthrough against the checklist before we call it complete.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-texture border-b-4 border-red bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            as="h1"
            eyebrow="About PFC"
            title={
              <>
                Built from{" "}
                <span className="text-gold">Marine Corps values</span>
              </>
            }
            lead="Veteran owned. Mission driven. Delivering discipline, respect, and excellence in every clean."
          />
        </div>
      </section>

      {/* Story */}
      <section
        aria-labelledby="story-heading"
        className="border-b-4 border-red bg-cream py-20"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <p className="eyebrow text-sm text-red">
              <span aria-hidden="true">★ </span>Our Story
              <span aria-hidden="true"> ★</span>
            </p>
            <h2
              id="story-heading"
              className="mt-4 font-display text-4xl leading-[1.05] text-navy sm:text-5xl"
            >
              The standard behind the name
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink/80">
              <p>
                In the Marine Corps, a PFC — Private First Class — learns the
                lessons that stick for life: show up early, do the job right,
                check the details, and never leave a task half-finished. Those
                lessons didn&rsquo;t stay in uniform. They became the foundation
                of this company.
              </p>
              <p>
                For us, <strong>PFC stands for Pride, Focus, and Commitment.</strong>{" "}
                Pride in work we&rsquo;re willing to sign our name to. Focus on
                the details that most people never notice — until someone
                finally gets them right. Commitment to finishing every mission
                correctly, whether it&rsquo;s a studio apartment or a
                post-construction site.
              </p>
              <p>
                Cleaning is straightforward work, and that&rsquo;s exactly why
                standards matter. Anyone can wipe a counter. Not everyone shows
                up on time, communicates clearly, treats your property with
                respect, and walks the job against a checklist before calling
                it done. That&rsquo;s the discipline we bring to{" "}
                {site.serviceArea.blurb} — one clean at a time.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/quote" className="btn btn-gold">
                Request a Quote
              </Link>
              <Link href="/services" className="btn btn-outline-navy">
                See Our Services
              </Link>
            </div>
          </Reveal>
          <Reveal className="mx-auto w-full max-w-[18rem]" delay={120}>
            <ArtSlot
              src="/images/marine.png"
              alt="PFC Cleaning Service Marine in desert camouflage holding a mop beside a red PFC cleaning bucket"
              width={660}
              height={1506}
              sizes="(min-width: 640px) 18rem, 70vw"
            />
          </Reveal>
        </div>
      </section>

      {/* Values grid */}
      <section
        aria-labelledby="values-heading"
        className="bg-texture border-b-4 border-red bg-navy py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="How We Operate"
              title={<span id="values-heading">Values we don&rsquo;t bend</span>}
            />
          </Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={(i % 3) * 100}>
                <div className="card-navy h-full p-7">
                  <v.icon className="h-9 w-9 text-gold" aria-hidden="true" />
                  <h3 className="mt-4 font-head text-xl font-semibold tracking-wide text-cream">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-14 text-center">
            <StarDivider />
            <p className="mx-auto mt-6 max-w-2xl font-display text-2xl text-cream sm:text-3xl">
              Veteran Owned <span className="text-gold">★</span> Disciplined{" "}
              <span className="text-gold">★</span> Dependable{" "}
              <span className="text-gold">★</span> Dedicated
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Put the PFC standard to work"
        lead="One call or one form — that's all it takes to get your quote."
      />
    </>
  );
}
