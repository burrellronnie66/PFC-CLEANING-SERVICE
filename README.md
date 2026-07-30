# PFC Cleaning Service — Website

**PRIDE ★ FOCUS ★ COMMITMENT** — the official website for
[PFCservice.net](https://pfcservice.net), a veteran-owned cleaning company
serving Jacksonville, Florida and surrounding Northeast Florida communities.

Built with **Next.js (App Router) · React · TypeScript · Tailwind CSS**.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

---

## ⚠️ One thing to do before launch: drop in the poster artwork

The Marine and Devil Dog illustrations from your poster were supplied as a
visual reference, so the repo currently ships **branded stand-in images** in
their slots (each one is labeled "ARTWORK SLOT" so it can't be missed).
Export the two characters from your original artwork file and overwrite:

| File | Content | Recommended crop |
|---|---|---|
| `public/images/marine.png` | The Marine holding the mop (with red PFC bucket) | Portrait, ~900×1200, transparent or navy background |
| `public/images/devil-dog.png` | The Devil Dog mascot, arms crossed | Square, ~1000×1000, transparent or navy background |

Keep the filenames the same and the site picks them up automatically — hero,
about page, and mascot section are already wired. Use the artwork exactly as
supplied: black hat EGAs, no rank insignia on the sleeves, no alterations.

`public/og.png` (the social-sharing card) is a finished, generated brand
asset — you can keep it or regenerate it with `node scripts/generate-assets.mjs`.

---

## Editing business details (one file)

Everything editable lives in **`src/config/site.ts`**:

- Phone number and tel: link
- Domain / canonical URL
- Service area city, region, and community list
- Business hours
- The full services list (cards, pages, form dropdown, footer links,
  sitemap, and structured data all build from it)
- Social media links (leave `""` to hide)
- Booking link (set it and every "Book Your Clean" button points there
  instead of the quote form)
- Brand colors (mirror of the theme in `src/app/globals.css` — the `@theme`
  block there is the styling source of truth)

---

## Connecting the quote form

The form at `/quote` posts to `src/app/api/quote/route.ts`. Delivery is
controlled by environment variables — see **`.env.example`** for the full
reference. Options:

| Provider | Set | Good for |
|---|---|---|
| `log` (default) | nothing | Works out of the box; requests print to the server log |
| `formspree` | `QUOTE_FORMSPREE_ID` | Easiest email delivery |
| `resend` | `QUOTE_RESEND_API_KEY`, `QUOTE_TO_EMAIL`, `QUOTE_FROM_EMAIL` | Email from your own domain |
| `webhook` | `QUOTE_WEBHOOK_URL` | **GoHighLevel**, Zapier, Make, or any CRM with an inbound webhook |

The recipient email is intentionally never hardcoded in the repo — set
`QUOTE_TO_EMAIL` (or configure it inside Formspree/GoHighLevel) when you're
ready. Spam is filtered with a honeypot field; all fields are validated on
both client and server.

---

## Deploying + connecting PFCservice.net

The easiest path is **Vercel** (made by the Next.js team, free tier is fine):

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import
   the repo. Vercel auto-detects Next.js — accept the defaults and deploy.
3. Add your form delivery environment variables under
   **Project → Settings → Environment Variables** (see `.env.example`).
4. **Connect the domain:** Project → Settings → Domains → add
   `pfcservice.net` and `www.pfcservice.net`.
5. At your domain registrar (wherever you bought pfcservice.net), set the
   DNS records Vercel shows you — typically:
   - `A` record for `pfcservice.net` → `76.76.21.21`
   - `CNAME` record for `www` → `cname.vercel-dns.com`
6. Wait for DNS to propagate (minutes to a few hours). Vercel issues the
   SSL certificate automatically, and `www` redirects to the root domain.

Any other Node host (Netlify, Railway, a VPS with `npm run build && npm
start`) works too.

### After launch
- Submit `https://pfcservice.net/sitemap.xml` in
  [Google Search Console](https://search.google.com/search-console).
- Create/claim a **Google Business Profile** for local-search visibility.

---

## Project structure

```
src/
  config/site.ts        ← central business configuration (edit me)
  app/
    layout.tsx          ← fonts, global metadata, LocalBusiness JSON-LD
    page.tsx            ← home
    services/           ← all services + detail sections (#anchors)
    residential/        ← residential landing page
    commercial/         ← commercial landing page
    about/              ← company story & values
    quote/              ← request-a-quote form
    contact/            ← contact page
    privacy/  terms/    ← legal pages
    api/quote/route.ts  ← form delivery (configure via env vars)
    sitemap.ts robots.ts icon.svg
  components/           ← header, footer, hero, cards, form, icons…
scripts/
  generate-assets.mjs   ← regenerates og.png + artwork stand-ins
public/
  images/               ← ★ drop the real poster artwork here
  og.png                ← social sharing card
```

---

## Brand reference

| Color | Hex |
|---|---|
| Deep Navy (dominant background) | `#061A36` |
| Marine Red (borders, hovers, accents) | `#D71920` |
| Gold (CTAs, icons, stars) | `#F5B51B` |
| Clean White | `#F7F7F4` |
| Black | `#111111` |
| Desert Tan / Light Sand | `#C8B08A` / `#E8D9BF` |

Typography: **Anton** (display headlines) · **Oswald** (subheads, nav,
buttons) · **Inter** (body) — all self-hosted via `next/font`.
