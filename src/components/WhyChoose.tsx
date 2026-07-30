import {
  ShieldStarIcon,
  TargetIcon,
  ClockIcon,
  EyeIcon,
  HandshakeIcon,
  BuildingIcon,
  ChatIcon,
  ChecklistIcon,
} from "@/components/icons";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const benefits = [
  {
    icon: ShieldStarIcon,
    title: "Veteran-Owned & Operated",
    text: "Founded on Marine Corps values — the standard is the standard, every single visit.",
  },
  {
    icon: TargetIcon,
    title: "Mission-Driven Service",
    text: "Every clean has a plan, a checklist, and a definition of done. We finish the mission.",
  },
  {
    icon: ClockIcon,
    title: "Reliable Scheduling",
    text: "We show up when we say we will. Your time is respected like it's our own.",
  },
  {
    icon: EyeIcon,
    title: "Detail-Oriented Cleaning",
    text: "Corners, edges, baseboards, and the spots others skip — inspected before we leave.",
  },
  {
    icon: HandshakeIcon,
    title: "Respect for Every Property",
    text: "Your home or facility is treated with care, courtesy, and professionalism.",
  },
  {
    icon: BuildingIcon,
    title: "Residential & Commercial",
    text: "One disciplined team for homes, offices, facilities, and post-construction sites.",
  },
  {
    icon: ChatIcon,
    title: "Clear Communication",
    text: "Straight answers, honest quotes, and updates you don't have to chase down.",
  },
  {
    icon: ChecklistIcon,
    title: "Quality-Control Mindset",
    text: "Walkthroughs and checklists on every job — because inspected work is trusted work.",
  },
];

export function WhyChoose() {
  return (
    <section
      aria-labelledby="why-heading"
      className="bg-texture border-b-4 border-red bg-navy py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose PFC"
            title={
              <span id="why-heading">
                Clean spaces. <span className="text-gold">Stronger standards.</span>
              </span>
            }
            lead="Hiring a cleaning company is about trust. Ours was built in the Marine Corps."
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal as="li" key={b.title} delay={(i % 4) * 90}>
              <div className="flex h-full flex-col items-start gap-3 rounded-lg border-l-4 border-red bg-navy-mid/60 p-5">
                <b.icon className="h-8 w-8 text-gold" aria-hidden="true" />
                <h3 className="font-head text-lg font-semibold tracking-wide text-cream">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/70">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
