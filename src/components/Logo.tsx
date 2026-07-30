import { site } from "@/config/site";

/**
 * PFC lettermark lockup — a clean web recreation of the brand
 * mark from the supplied artwork: red roof with gold window,
 * winged "PFC" letters, and the CLEANING SERVICE bar.
 */

function Wing({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 40 26"
      aria-hidden="true"
      className={`h-[0.62em] w-auto shrink-0 ${flip ? "-scale-x-100" : ""}`}
    >
      <polygon points="40,0 8,0 0,4 40,4" fill="var(--color-gold)" />
      <polygon points="40,8 14,8 6,12 40,12" fill="var(--color-gold)" />
      <polygon points="40,16 20,16 12,20 40,20" fill="var(--color-gold)" />
      <polygon points="40,24 26,24 22,26 40,26" fill="var(--color-red)" />
    </svg>
  );
}

function Roof({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 36"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 32 L60 5 L114 32"
        fill="none"
        stroke="var(--color-red)"
        strokeWidth="7"
        strokeLinecap="square"
      />
      <rect x="49" y="20" width="22" height="13" rx="1" fill="var(--color-gold)" />
      <line x1="60" y1="20" x2="60" y2="33" stroke="var(--color-navy)" strokeWidth="2.5" />
      <line x1="49" y1="26.5" x2="71" y2="26.5" stroke="var(--color-navy)" strokeWidth="2.5" />
    </svg>
  );
}

export function Logo({
  size = "md",
  onLight = false,
}: {
  /** md = header, lg = footer / feature */
  size?: "md" | "lg";
  /** set true when placed on a light background */
  onLight?: boolean;
}) {
  const letters = size === "lg" ? "text-6xl" : "text-3xl";
  const sub = size === "lg" ? "text-sm tracking-[0.42em]" : "text-[0.55rem] tracking-[0.34em]";
  const roof = size === "lg" ? "h-9" : "h-4";

  return (
    <span className="inline-flex flex-col items-center leading-none">
      <Roof className={`${roof} w-auto`} />
      <span className="flex items-center gap-[0.28em]">
        <Wing />
        <span
          className={`font-display ${letters} ${onLight ? "text-navy" : "text-white"}`}
          style={{
            WebkitTextStroke: "0.028em var(--color-red)",
            textShadow: "0.045em 0.045em 0 rgba(17,17,17,0.35)",
          }}
        >
          {site.shortName}
        </span>
        <Wing flip />
      </span>
      <span
        className={`font-head ${sub} mt-[0.4em] font-semibold ${
          onLight ? "text-navy" : "text-cream"
        }`}
      >
        <span className="text-gold" aria-hidden="true">
          ★{" "}
        </span>
        Cleaning Service
        <span className="text-gold" aria-hidden="true">
          {" "}
          ★
        </span>
      </span>
    </span>
  );
}

/** Compact one-line mark used in tight spots (mobile header) */
export function LogoInline({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-2 leading-none ${className}`}>
      <span
        className="font-display text-2xl text-white"
        style={{ WebkitTextStroke: "0.028em var(--color-red)" }}
      >
        {site.shortName}
      </span>
      <span className="font-head text-[0.6rem] font-semibold tracking-[0.28em] text-cream">
        Cleaning Service
      </span>
    </span>
  );
}
