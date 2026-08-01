/**
 * ============================================================
 * PFC CLEANING SERVICE — CENTRAL SITE CONFIGURATION
 * ============================================================
 * Edit this file to update business details across the whole
 * website. Every page, header, footer, form, and metadata tag
 * reads from here.
 */

export const site = {
  /** Business identity */
  name: "PFC Cleaning Service",
  shortName: "PFC",
  tagline: "Pride ★ Focus ★ Commitment",
  motto: "We Don't Cut Corners. We Clean Them.",

  /** Canonical domain — used for metadata, sitemap, JSON-LD */
  url: "https://pfcservice.net",
  /** How the domain is displayed in copy */
  domainDisplay: "PFCservice.net",

  /** Phone — displayDigits is what visitors see, telHref is the link */
  phone: {
    display: "904-496-4760",
    telHref: "tel:+19044964760",
  },

  /** Primary service area */
  serviceArea: {
    city: "Jacksonville",
    state: "Florida",
    stateAbbr: "FL",
    region: "Northeast Florida",
    blurb: "Jacksonville, Florida and surrounding Northeast Florida communities",
    /** Nearby communities listed on the contact/about pages */
    communities: [
      "Jacksonville",
      "Jacksonville Beach",
      "Atlantic Beach",
      "Neptune Beach",
      "Ponte Vedra",
      "Orange Park",
      "St. Johns",
      "St. Augustine",
      "Fleming Island",
      "Middleburg",
      "Yulee",
      "Fernandina Beach",
    ],
  },

  /**
   * Business hours — shown in the contact section and JSON-LD.
   * Update to your real hours.
   */
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 3:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],

  /**
   * Booking link — if you adopt an online booking system
   * (GoHighLevel calendar, Calendly, etc.), put the URL here and
   * "Book Your Clean" buttons will link to it. Leave empty ("")
   * to send visitors to the on-site quote form instead.
   */
  bookingLink: "",

  /**
   * Social media — leave a value empty ("") to hide its icon.
   */
  social: {
    facebook: "",
    instagram: "",
    google: "", // Google Business Profile share link
    linkedin: "",
  },

  /**
   * QUOTE FORM DELIVERY — see src/app/api/quote/route.ts for the
   * full wiring. Every "Book Your Clean" button and "Request a
   * Quote" link leads to the same form, so this is the single lead
   * pipeline for the whole site.
   */
  quoteForm: {
    /**
     * Delivery provider for quote requests:
     *  "formspree" — delivers via https://formspree.io (current setup)
     *  "resend"    — set QUOTE_RESEND_API_KEY + QUOTE_TO_EMAIL env vars (https://resend.com)
     *  "webhook"   — set QUOTE_WEBHOOK_URL env var (GoHighLevel inbound webhook, Zapier, Make, any CRM)
     *  "log"       — no external service; requests only print to the server log
     * The QUOTE_PROVIDER env var overrides this default.
     */
    provider: (process.env.QUOTE_PROVIDER ?? "formspree") as
      | "log"
      | "formspree"
      | "resend"
      | "webhook",
    /**
     * Formspree form ID (the part after /f/ in your endpoint URL —
     * https://formspree.io/f/mjgnqpjj). Form IDs are public by design;
     * the QUOTE_FORMSPREE_ID env var overrides this if you ever rotate
     * forms without a code change.
     */
    formspreeId: process.env.QUOTE_FORMSPREE_ID ?? "mjgnqpjj",
  },

  /**
   * Brand colors — the authoritative theme lives in
   * src/app/globals.css (@theme block). These are mirrored here for
   * anything that needs them in JavaScript (JSON-LD, emails, etc.).
   */
  colors: {
    navy: "#061A36",
    navyDeep: "#020D1D",
    navyMid: "#092A52",
    red: "#D71920",
    gold: "#F5B51B",
    white: "#F7F7F4",
    black: "#111111",
    tan: "#C8B08A",
    sand: "#E8D9BF",
  },
} as const;

/** ---------------------------------------------------------------
 * SERVICES — add, remove, or edit services here. Cards, pages,
 * the quote form dropdown, footer links, sitemap, and structured
 * data all build themselves from this list.
 * -------------------------------------------------------------- */

export type Service = {
  slug: string;
  name: string;
  /** Short benefit line used on cards */
  blurb: string;
  /** Longer description used on detail sections */
  description: string;
  /** Icon key — see src/components/icons.tsx */
  icon: "home" | "sparkle" | "boxIn" | "boxOut" | "desk" | "building" | "hammer";
  category: "residential" | "commercial";
  /** What's covered — detail bullets */
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "standard-residential-cleaning",
    name: "Standard Residential Cleaning",
    blurb:
      "Recurring or one-time home cleaning executed with military attention to detail.",
    description:
      "Our core home cleaning service keeps your space squared away week after week. Kitchens, bathrooms, bedrooms, and living areas are cleaned to a consistent standard — the same checklist, the same discipline, every visit.",
    icon: "home",
    category: "residential",
    includes: [
      "Kitchen counters, sinks, and exterior of appliances",
      "Bathroom scrub-down: tubs, showers, toilets, and vanities",
      "Dusting of surfaces, ledges, and reachable fixtures",
      "Vacuuming and mopping of all floors",
      "Trash removal and fresh liners",
      "Tidying and final walkthrough inspection",
    ],
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    blurb:
      "A top-to-bottom reset that reaches the corners other cleanings skip.",
    description:
      "Deep cleaning is the full-mission version of our standard service. We slow down, get low, and hit the buildup — baseboards, vents, grout lines, behind and under what can be safely moved. Ideal as a first-time service or a seasonal reset.",
    icon: "sparkle",
    category: "residential",
    includes: [
      "Everything in a standard cleaning",
      "Baseboards, door frames, and trim detail",
      "Interior windowsills and window tracks",
      "Vent covers, ceiling fans, and light fixtures",
      "Detailed scale and soap-scum removal",
      "Spot cleaning of walls, switches, and handles",
    ],
  },
  {
    slug: "move-in-cleaning",
    name: "Move-In Cleaning",
    blurb:
      "Start fresh. Your new home cleaned and inspection-ready before the boxes arrive.",
    description:
      "Don't move into someone else's dirt. We clean empty homes from ceiling to floor so the only thing you unpack into is a fresh, ready space. Perfect for buyers, renters, and property managers preparing a turnover.",
    icon: "boxIn",
    category: "residential",
    includes: [
      "Full clean of the empty home, every room",
      "Inside cabinets, drawers, and closets",
      "Inside the refrigerator and oven on request",
      "Bathroom and kitchen sanitizing",
      "Baseboards, doors, and trim wipe-down",
      "Floors vacuumed and mopped to a finish shine",
    ],
  },
  {
    slug: "move-out-cleaning",
    name: "Move-Out Cleaning",
    blurb:
      "Leave it better than you found it — and walk your final inspection with confidence.",
    description:
      "Whether you're chasing a security deposit or listing a property, our move-out cleaning delivers a home that passes inspection. We work from a thorough turnover checklist so nothing gets missed on your way out.",
    icon: "boxOut",
    category: "residential",
    includes: [
      "Complete clean of the emptied property",
      "Inside cabinets, drawers, and closets",
      "Appliance exteriors; interiors on request",
      "Scuff and spot treatment on walls and doors",
      "Bathrooms descaled and sanitized",
      "Final walkthrough against our turnover checklist",
    ],
  },
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    blurb:
      "A clean, professional workspace your team and clients can count on.",
    description:
      "Your office speaks before you do. We keep workspaces, restrooms, breakrooms, and lobbies clean on a dependable schedule — after hours or around your team — so your business always looks mission-ready.",
    icon: "desk",
    category: "commercial",
    includes: [
      "Workstations, desks, and common surfaces",
      "Restroom cleaning, sanitizing, and restocking",
      "Breakroom and kitchenette detail",
      "Lobby, entry glass, and reception areas",
      "Trash and recycling removal",
      "Floor care: vacuum, sweep, and mop",
    ],
  },
  {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    blurb:
      "Dependable janitorial service for facilities, retail, and multi-unit properties.",
    description:
      "From retail floors to community spaces, we build a cleaning plan around your facility and execute it on schedule. Property managers and business owners get one point of contact, clear communication, and consistent results.",
    icon: "building",
    category: "commercial",
    includes: [
      "Custom scope built around your facility",
      "Scheduled service: nightly, weekly, or custom",
      "High-traffic floor care and entryways",
      "Restroom sanitation and restocking",
      "Common areas, stairwells, and shared spaces",
      "Walkthroughs and quality-control check-ins",
    ],
  },
  {
    slug: "post-construction-cleaning",
    name: "Post-Construction Cleaning",
    blurb:
      "From punch list to spotless — dust, debris, and residue handled the right way.",
    description:
      "Construction dust gets everywhere. We clear it the disciplined way: debris out, surfaces detailed, glass polished, floors finished. Contractors and builders get a site that's ready to hand over — on deadline.",
    icon: "hammer",
    category: "commercial",
    includes: [
      "Removal of dust from all surfaces, ledges, and trim",
      "Paint overspray and sticker/label removal from glass",
      "Interior window and track detailing",
      "Fixture, cabinet, and appliance wipe-down",
      "Debris bagging and staging for disposal",
      "Final-phase detail clean before handover",
    ],
  },
];

export const residentialServices = services.filter(
  (s) => s.category === "residential"
);
export const commercialServices = services.filter(
  (s) => s.category === "commercial"
);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Primary navigation — header order */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** Where "Book Your Clean" buttons point (booking system or quote form) */
export const bookHref = site.bookingLink || "/quote";
