/**
 * Generates raster brand assets from SVG:
 *
 *   public/og.png            — 1200×630 social sharing image (final asset)
 *   public/images/marine.png — TEMPORARY stand-in for the supplied Marine
 *                              artwork. Replace with your poster export.
 *   public/images/devil-dog.png — TEMPORARY stand-in for the supplied
 *                              Devil Dog mascot. Replace with your export.
 *
 * Run with:  node scripts/generate-assets.mjs
 *
 * Requires the Anton / Oswald fonts to be installed system-wide for
 * text rendering (falls back to a bold sans if unavailable).
 */

import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const NAVY = "#061a36";
const NAVY_DEEP = "#020d1d";
const NAVY_MID = "#092a52";
const RED = "#d71920";
const GOLD = "#f5b51b";
const CREAM = "#f7f7f4";

const DISPLAY = "Anton, 'Liberation Sans', sans-serif";
const HEAD = "Oswald, 'Liberation Sans', sans-serif";

function star(cx, cy, r, fill = GOLD, opacity = 1) {
  const points = [];
  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0 ? r : r * 0.42;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    points.push(
      `${(cx + radius * Math.cos(angle)).toFixed(1)},${(cy + radius * Math.sin(angle)).toFixed(1)}`
    );
  }
  return `<polygon points="${points.join(" ")}" fill="${fill}" opacity="${opacity}"/>`;
}

function starField(width, height, count, seed = 7) {
  let s = seed;
  const rand = () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
  let out = "";
  for (let i = 0; i < count; i++) {
    out += `<circle cx="${(rand() * width).toFixed(0)}" cy="${(rand() * height).toFixed(0)}" r="${(1 + rand() * 1.6).toFixed(1)}" fill="${GOLD}" opacity="${(0.06 + rand() * 0.12).toFixed(2)}"/>`;
  }
  return out;
}

function roofAndWings(cx, y, scale = 1) {
  const s = scale;
  return `
    <g transform="translate(${cx},${y}) scale(${s})">
      <path d="M-80 22 0 -18 80 22" fill="none" stroke="${RED}" stroke-width="11" stroke-linecap="square"/>
      <rect x="-16" y="4" width="32" height="19" rx="1.5" fill="${GOLD}"/>
      <line x1="0" y1="4" x2="0" y2="23" stroke="${NAVY}" stroke-width="3.6"/>
      <line x1="-16" y1="13.5" x2="16" y2="13.5" stroke="${NAVY}" stroke-width="3.6"/>
    </g>`;
}

function wings(cx, cy, scale = 1, gap = 118) {
  const bar = (side) => {
    const dir = side === "l" ? -1 : 1;
    const x = cx + dir * gap * scale;
    let out = "";
    const widths = [64, 50, 36];
    for (let i = 0; i < 3; i++) {
      const y = cy + (i * 16 - 18) * scale;
      const w = widths[i] * scale;
      const taper = 12 * scale;
      const inner = x;
      const outer = x + dir * w;
      out += `<polygon points="${inner},${y} ${outer},${y + (i === 0 ? 0 : 0)} ${outer - dir * taper},${y + 10 * scale} ${inner},${y + 10 * scale}" fill="${GOLD}"/>`;
    }
    return out;
  };
  return bar("l") + bar("r");
}

/* ---------------- OG image (final asset) ---------------- */

function ogSvg() {
  const W = 1200;
  const H = 630;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="bg" cx="50%" cy="38%" r="80%">
      <stop offset="0%" stop-color="${NAVY_MID}"/>
      <stop offset="55%" stop-color="${NAVY}"/>
      <stop offset="100%" stop-color="${NAVY_DEEP}"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${starField(W, H, 60)}
  <rect x="14" y="14" width="${W - 28}" height="${H - 28}" fill="none" stroke="${RED}" stroke-width="5"/>
  <rect x="26" y="26" width="${W - 52}" height="${H - 52}" fill="none" stroke="${GOLD}" stroke-width="2" opacity="0.65"/>

  ${roofAndWings(W / 2, 78, 1.15)}
  <text x="${W / 2}" y="235" font-family="${DISPLAY}" font-size="150" fill="${CREAM}" text-anchor="middle" stroke="${RED}" stroke-width="5" paint-order="stroke">PFC</text>
  ${wings(W / 2, 160, 1.25, 170)}
  <text x="${W / 2}" y="292" font-family="${HEAD}" font-weight="600" font-size="40" letter-spacing="18" fill="${CREAM}" text-anchor="middle">CLEANING SERVICE</text>

  <text x="${W / 2}" y="348" font-family="${HEAD}" font-weight="600" font-size="30" letter-spacing="6" fill="${GOLD}" text-anchor="middle">PRIDE  ★  FOCUS  ★  COMMITMENT</text>

  <text x="${W / 2}" y="432" font-family="${DISPLAY}" font-size="58" fill="${CREAM}" text-anchor="middle">WE DON'T CUT CORNERS. <tspan fill="${GOLD}">WE CLEAN THEM.</tspan></text>

  <rect x="150" y="472" width="${W - 300}" height="3" fill="${RED}"/>
  <text x="${W / 2}" y="530" font-family="${HEAD}" font-weight="500" font-size="30" letter-spacing="4" fill="${CREAM}" text-anchor="middle">VETERAN-OWNED CLEANING · JACKSONVILLE, FL</text>
  <text x="${W / 2}" y="580" font-family="${HEAD}" font-weight="600" font-size="32" letter-spacing="3" fill="${GOLD}" text-anchor="middle">PFCservice.net   ·   904-496-4760</text>
</svg>`;
}

/* ---------------- Artwork stand-ins (replace with poster exports) ---------------- */

function marineStandInSvg() {
  const W = 900;
  const H = 1200;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="bg" cx="50%" cy="35%" r="85%">
      <stop offset="0%" stop-color="${NAVY_MID}"/>
      <stop offset="60%" stop-color="${NAVY}"/>
      <stop offset="100%" stop-color="${NAVY_DEEP}"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${starField(W, H, 70, 13)}
  ${star(W / 2, 340, 150, GOLD, 0.95)}
  ${star(W / 2, 340, 92, NAVY, 1)}
  ${star(W / 2, 340, 70, RED, 1)}

  ${roofAndWings(W / 2, 560, 1.35)}
  <text x="${W / 2}" y="750" font-family="${DISPLAY}" font-size="170" fill="${CREAM}" text-anchor="middle" stroke="${RED}" stroke-width="6" paint-order="stroke">PFC</text>
  <text x="${W / 2}" y="815" font-family="${HEAD}" font-weight="600" font-size="44" letter-spacing="16" fill="${CREAM}" text-anchor="middle">CLEANING SERVICE</text>
  <text x="${W / 2}" y="880" font-family="${HEAD}" font-weight="600" font-size="30" letter-spacing="5" fill="${GOLD}" text-anchor="middle">PRIDE ★ FOCUS ★ COMMITMENT</text>

  <text x="${W / 2}" y="1050" font-family="${HEAD}" font-weight="500" font-size="26" letter-spacing="3" fill="${CREAM}" opacity="0.55" text-anchor="middle">ARTWORK SLOT — REPLACE WITH THE</text>
  <text x="${W / 2}" y="1088" font-family="${HEAD}" font-weight="500" font-size="26" letter-spacing="3" fill="${CREAM}" opacity="0.55" text-anchor="middle">SUPPLIED MARINE ILLUSTRATION</text>
  <text x="${W / 2}" y="1130" font-family="${HEAD}" font-weight="500" font-size="22" letter-spacing="2" fill="${GOLD}" opacity="0.7" text-anchor="middle">public/images/marine.png</text>
</svg>`;
}

function devilDogStandInSvg() {
  const W = 1000;
  const H = 1000;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="bg" cx="50%" cy="40%" r="85%">
      <stop offset="0%" stop-color="${NAVY_MID}"/>
      <stop offset="60%" stop-color="${NAVY}"/>
      <stop offset="100%" stop-color="${NAVY_DEEP}"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${starField(W, H, 60, 29)}

  <!-- Red PFC bucket brand mark -->
  <g transform="translate(${W / 2},430)">
    <path d="M-170 -110 A170 60 0 0 1 170 -110" fill="none" stroke="${GOLD}" stroke-width="16" stroke-linecap="round"/>
    <path d="M-190 -100 L-150 160 Q0 205 150 160 L190 -100 Q0 -60 -190 -100 Z" fill="${RED}"/>
    <ellipse cx="0" cy="-100" rx="190" ry="40" fill="#a8121a"/>
    <ellipse cx="0" cy="-104" rx="170" ry="32" fill="${NAVY_DEEP}"/>
    <text x="0" y="70" font-family="${DISPLAY}" font-size="92" fill="${CREAM}" text-anchor="middle">PFC</text>
    <text x="0" y="112" font-family="${HEAD}" font-weight="600" font-size="24" letter-spacing="6" fill="${CREAM}" text-anchor="middle">CLEANING SERVICE</text>
    ${star(0, 148, 16, GOLD)}
  </g>

  <text x="${W / 2}" y="700" font-family="${HEAD}" font-weight="600" font-size="34" letter-spacing="6" fill="${GOLD}" text-anchor="middle">★ DEVIL DOG APPROVED ★</text>

  <text x="${W / 2}" y="810" font-family="${HEAD}" font-weight="500" font-size="26" letter-spacing="3" fill="${CREAM}" opacity="0.55" text-anchor="middle">ARTWORK SLOT — REPLACE WITH THE</text>
  <text x="${W / 2}" y="848" font-family="${HEAD}" font-weight="500" font-size="26" letter-spacing="3" fill="${CREAM}" opacity="0.55" text-anchor="middle">SUPPLIED DEVIL DOG MASCOT</text>
  <text x="${W / 2}" y="890" font-family="${HEAD}" font-weight="500" font-size="22" letter-spacing="2" fill="${GOLD}" opacity="0.7" text-anchor="middle">public/images/devil-dog.png</text>
</svg>`;
}

/* ---------------- Render ---------------- */

await mkdir("public/images", { recursive: true });

const jobs = [
  ["public/og.png", ogSvg()],
  ["public/images/marine.png", marineStandInSvg()],
  ["public/images/devil-dog.png", devilDogStandInSvg()],
];

for (const [file, svg] of jobs) {
  await sharp(Buffer.from(svg), { density: 96 }).png().toFile(file);
  console.log("generated", file);
}

/* ---------------- favicon.ico (PNG-in-ICO, from the brand icon) ---------------- */

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48">
  <rect width="64" height="64" rx="12" fill="${NAVY}"/>
  <path d="M8 30 32 10l24 20" fill="none" stroke="${RED}" stroke-width="6" stroke-linecap="round"/>
  ${star(32, 41, 16)}
</svg>`;
const pngBuf = await sharp(Buffer.from(iconSvg)).resize(48, 48).png().toBuffer();
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // count
const entry = Buffer.alloc(16);
entry.writeUInt8(48, 0); // width
entry.writeUInt8(48, 1); // height
entry.writeUInt16LE(1, 4); // color planes
entry.writeUInt16LE(32, 6); // bits per pixel
entry.writeUInt32LE(pngBuf.length, 8); // image data size
entry.writeUInt32LE(22, 12); // data offset
const { writeFile } = await import("node:fs/promises");
await writeFile("src/app/favicon.ico", Buffer.concat([header, entry, pngBuf]));
console.log("generated src/app/favicon.ico");
