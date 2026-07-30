import Image from "next/image";

/**
 * Branded frame for the supplied PFC artwork (Marine + Devil Dog).
 *
 * The character images in public/images/ are cropped — never redrawn
 * or altered — from the original poster at art/pfc-poster.jpeg.
 * To re-extract them (or after replacing the poster with a higher-res
 * version), run:  node scripts/generate-assets.mjs
 */
export function ArtSlot({
  src,
  alt,
  width,
  height,
  preload = false,
  float = false,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** preload above-the-fold artwork (hero) */
  preload?: boolean;
  /** subtle idle float animation (mascot) */
  float?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div
      className={`frame-brand relative overflow-hidden bg-navy-deep ${className}`}
    >
      {/* Radial lighting + faint star field behind the artwork */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-stars"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 35%, #14396b 0%, #092a52 45%, #020d1d 100%)",
        }}
      />
      <div aria-hidden="true" className="bg-stars absolute inset-0 opacity-70" />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        preload={preload}
        sizes={sizes}
        className={`relative h-auto w-full ${float ? "mascot-float" : ""}`}
      />
    </div>
  );
}
