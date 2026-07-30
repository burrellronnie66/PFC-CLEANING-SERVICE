import type { SVGProps } from "react";

/**
 * Custom icon set — hand-drawn strokes, consistent 24×24 grid.
 * All icons inherit currentColor so they can be tinted with
 * text color utilities (text-gold, text-red, ...).
 */

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps): IconProps {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props,
  };
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <polygon points="12,2 14.9,8.6 22,9.3 16.7,14.1 18.2,21.2 12,17.5 5.8,21.2 7.3,14.1 2,9.3 9.1,8.6" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10.5V20h13v-9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3c.6 3.9 2.1 5.4 6 6-3.9.6-5.4 2.1-6 6-.6-3.9-2.1-5.4-6-6 3.9-.6 5.4-2.1 6-6Z" />
      <path d="M18.5 14.5c.3 2 1 2.7 3 3-2 .3-2.7 1-3 3-.3-2-1-2.7-3-3 2-.3 2.7-1 3-3Z" />
      <path d="M5.5 15.5c.25 1.6.9 2.25 2.5 2.5-1.6.25-2.25.9-2.5 2.5-.25-1.6-.9-2.25-2.5-2.5 1.6-.25 2.25-.9 2.5-2.5Z" />
    </svg>
  );
}

export function BoxInIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12v7.5h16V12" />
      <path d="M2.5 8.5h19V12h-19z" />
      <path d="M12 15v5" />
      <path d="M12 2v3.5" />
      <path d="m9.5 4 2.5 2.5L14.5 4" />
    </svg>
  );
}

export function BoxOutIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12v7.5h16V12" />
      <path d="M2.5 8.5h19V12h-19z" />
      <path d="M12 15v5" />
      <path d="M12 6V2.5" />
      <path d="M9.5 4.5 12 2l2.5 2.5" />
    </svg>
  );
}

export function DeskIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2.5 9.5h19" />
      <path d="M4 9.5V19M20 9.5V19" />
      <path d="M13.5 13h6.5M13.5 16.5H20" />
      <rect x="13.5" y="9.5" width="6.5" height="9.5" />
      <path d="M7.5 9.5V5h9v4.5" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 20V4.5h10V20" />
      <path d="M14.5 9h5V20" />
      <path d="M2.5 20h19" />
      <path d="M7.5 8h1.5M10.5 8H12M7.5 11.5h1.5M10.5 11.5H12M7.5 15h1.5M10.5 15H12M17 12.5h.01M17 16h.01" />
    </svg>
  );
}

export function HammerIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m13.5 7 6.5 6.5" />
      <path d="M14.5 4.5 19 9l1.5-1.5c.7-.7.7-1.8 0-2.5l-2-2c-.7-.7-1.8-.7-2.5 0Z" />
      <path d="M15 8.5 5 18.5c-.8.8-2.1.8-2.9 0-.8-.8-.8-2.1 0-2.9l10-10" />
    </svg>
  );
}

export function ShieldStarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 2.5 20 5v6c0 5-3.4 8.8-8 10.5C7.4 19.8 4 16 4 11V5Z" />
      <path
        d="m12 7.5 1.2 2.6 2.8.3-2.1 1.9.6 2.8-2.5-1.5-2.5 1.5.6-2.8-2.1-1.9 2.8-.3Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function FlagIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 21V3.5" />
      <path d="M5 4h13.5l-2.8 4 2.8 4H5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m2.5 8 4-2 5 2.5L7 11c1.8 2.5 4.6 4.4 7.5 3l3-1.5" />
      <path d="m11.5 8.5 4-2 6 3" />
      <path d="M7 11l-4.5 2.5M14.5 14l2 2.5M11.5 15.5l1.5 2.5" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M21 11.5c0 4.1-4 7-9 7-1 0-2-.1-2.9-.35L4 20l1.2-3.6C3.8 15.1 3 13.4 3 11.5c0-4.1 4-7 9-7s9 2.9 9 7Z" />
      <path d="M8 11.5h.01M12 11.5h.01M16 11.5h.01" />
    </svg>
  );
}

export function ChecklistIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4.5" y="3.5" width="15" height="17" rx="1.5" />
      <path d="M9 3.5V2.5h6v1" />
      <path d="m7.5 9 1.3 1.3L11.5 7.6M7.5 14.5l1.3 1.3 2.7-2.7" />
      <path d="M13.5 9.5h3.5M13.5 15h3.5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5.5 3.5h4l1.5 4.5-2.2 1.6a13 13 0 0 0 5.6 5.6l1.6-2.2 4.5 1.5v4a1.5 1.5 0 0 1-1.7 1.5C10.5 19 5 13.5 4 5.2a1.5 1.5 0 0 1 1.5-1.7Z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21.5S5 14.9 5 9.9a7 7 0 1 1 14 0c0 5-7 11.6-7 11.6Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.4 3.8 5.6 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.6-3.8-9S9.5 5.4 12 3Z" />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MedalIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="14.5" r="5.5" />
      <path d="m9.5 10-3-7h4L12 7l1.5-4h4l-3 7" />
      <path
        d="m12 12 .9 1.9 2.1.2-1.6 1.4.5 2-1.9-1.1-1.9 1.1.5-2-1.6-1.4 2.1-.2Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base({ strokeWidth: 2.2, ...props })}>
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base({ strokeWidth: 2.2, ...props })}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base({ strokeWidth: 2.4, ...props })}>
      <path d="m4.5 12.5 5 5L19.5 7" />
    </svg>
  );
}

/** Maps service icon keys from the config to components */
export const serviceIcons = {
  home: HomeIcon,
  sparkle: SparkleIcon,
  boxIn: BoxInIcon,
  boxOut: BoxOutIcon,
  desk: DeskIcon,
  building: BuildingIcon,
  hammer: HammerIcon,
} as const;
