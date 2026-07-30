import Link from "next/link";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ChecklistIcon, FlagIcon, SparkleIcon } from "@/components/icons";
import { site } from "@/config/site";

const steps = [
  {
    icon: ChecklistIcon,
    title: "Request Your Quote",
    text: "Tell us about your space online or by phone. We respond with a clear, honest quote — no pressure, no gimmicks.",
  },
  {
    icon: FlagIcon,
    title: "Confirm Your Cleaning Mission",
    text: "We lock in your date, scope, and checklist so everyone knows exactly what done looks like.",
  },
  {
    icon: SparkleIcon,
    title: "Inspect & Enjoy Your Clean Space",
    text: "We execute, walk the space against the checklist, and leave you with a clean you can be proud of.",
  },
];

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-heading"
      className="border-b-4 border-red bg-navy-deep py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title={<span id="how-heading">Three steps to squared away</span>}
            lead="Simple to book. Executed with precision."
          />
        </Reveal>
        <ol className="mt-14 grid gap-8 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120}>
              <div className="card-navy relative h-full p-7 pt-10">
                <span
                  aria-hidden="true"
                  className="absolute -top-5 left-7 flex h-11 w-11 items-center justify-center rounded-md border-2 border-gold bg-red font-display text-xl text-white"
                >
                  {i + 1}
                </span>
                <step.icon className="h-9 w-9 text-gold" aria-hidden="true" />
                <h3 className="mt-4 font-head text-xl font-semibold tracking-wide text-cream">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-12 text-center">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/quote" className="btn btn-gold">
              Get Your Free Quote
            </Link>
            <a href={site.phone.telHref} className="btn btn-outline">
              Call {site.phone.display}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
