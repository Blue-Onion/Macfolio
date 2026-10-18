# SEO Improvement Plan — Macfolio

Site: `https://macfolio-azure.vercel.app/`
Stack: Next.js 16 (App Router) · React 19 · JS/JSX · Tailwind v4 · GSAP · Zustand
Audited: `app/`, `components/`, `windows/`, `hoc/`, `data.js`, `public/`, `next.config.mjs`

---

## 1. Audit summary (what exists today)

| Area | Current state | Verdict |
|---|---|---|
| `metadata` in `app/layout.js` | title template, description, keywords, OG (website), robots | Good base, incomplete |
| `metadataBase` | hardcoded `https://macfolio-azure.vercel.app/` | Fragile |
| Canonical URL | **missing** | ❌ |
| Twitter/X card | **missing** | ❌ |
| `sitemap.xml` | **missing** (`app/sitemap.js`) | ❌ |
| `robots.txt` | **missing** (`app/robots.js`) | ❌ |
| JSON-LD structured data | **missing** | ❌ |
| Route structure | single route `/` only; all content inside draggable "windows" | ❌ weakest point |
| Crawlable content on load | `LoadingWrapper` puts **all** children in `opacity: 0`; closed windows are `display: none` | ❌ weak |
| Internal links | Nav items are `<li onClick>`, dock icons are `<button>` — **zero `<a href>`** | ❌ |
| Headings | one `h1` = "Macƒolio." (stylised, contains `ƒ`) | ⚠️ |
| Alt text | `alt="image"` (Arc), `alt="project"` × N (Home), `alt="contact"` (Contact), `alt="logo"` | ⚠️ |
| Images | `previewPic.png` 4.9 MB / 2904×1802; `astronaut2.png` 1.9 MB full-screen LCP mask | ❌ perf |
| Resume | PDF only via `react-pdf` (text not crawlable) | ❌ |
| `viewport.maximumScale: 1` | blocks pinch-zoom | ❌ a11y/mobile |
| Analytics / Search Console | none | ❌ |
| `lang` attr | `lang="en"` ✅ | ✅ |

**Root problem:** this is a visual, JS-driven single page with no crawlable page structure, no on-page text until JS runs, and no technical SEO files. Google *can* render it, but there is almost nothing for it to rank.

---

## 2. Goals & KPIs

| Metric | Baseline | Target (8 weeks) |
|---|---|---|
| Indexed pages | 1 (maybe) | 8–12 |
| Lighthouse SEO score | unknown | 100 |
| LCP (mobile) | likely > 4 s | < 2.5 s |
| CLS | unknown | < 0.1 |
| Indexed text words | ~50 | 1500+ |
| Ranked keywords | ~0 | "aditya singh rawat", "macos portfolio next.js", "next.js portfolio developer" |

---

## 3. Phase 0 — Measurement first (½ day)

1. Add Google Search Console + Bing Webmaster, verify `macfolio-azure.vercel.app`.
2. Add analytics: `@vercel/analytics` (cheapest) or GA4.
3. Baseline: `bun run build && bun start` → run Lighthouse (mobile + desktop), save JSON/HTML into `plan/lighthouse-baseline/`.
4. Note the real canonical domain. If a custom domain is planned, do it **now** (`SITE_URL` env), otherwise all canonicals/sitemaps must be rewritten later.

**Deliverable:** baseline Lighthouse report + verified property in GSC.

---

## 4. Phase 1 — Technical SEO foundation (1–2 days, highest ROI)

### 4.1 Central site config
Create `lib/site.js`:

```js
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://macfolio-azure.vercel.app";
export const siteName = "Aditya Singh Rawat — Macfolio";
export const author = "Aditya Singh Rawat";
export const description =
  "Portfolio of Aditya Singh Rawat, a full-stack developer from South Delhi building reliable, scalable web apps with Next.js, React, Go and PostgreSQL.";
```
Add `NEXT_PUBLIC_SITE_URL` to `.env.local` **and** Vercel project env.

### 4.2 Fix `app/layout.js` metadata
- Use `siteUrl` instead of the hardcoded string in `metadataBase`, `openGraph.url`.
- Add: `alternates: { canonical: "/" }`, `twitter: { card: "summary_large_image" }`, `applicationName`, `category: "technology"`, `icons`, `formatDetection`, `verification: { google: process.env.GOOGLE_SITE_VERIFICATION }`.
- Make title/description keyword-accurate and name-led: **"Aditya Singh Rawat — Full-Stack Developer Portfolio"**. `keywords` is ignored by Google; keep it tiny or drop it, and invest effort in real copy instead.
- Keep `robots` block (it's fine).
- Add a `<link rel="me">`-style trust signal only if a real identity source exists (GitHub/LinkedIn) — optional.

### 4.3 Viewport fix
Remove `maximumScale: 1` (and don't set `userScalable: false`) — pinch-zoom must work.

### 4.4 Add `app/robots.js`

```js
import { siteUrl } from "@/lib/site";
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/files/resume.pdf"] }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
```
(`resume.pdf` disallowed as a duplicate of the future HTML resume page — or keep it allowed and canonicalise to the HTML page instead. Pick one; document the choice.)

### 4.5 Add `app/sitemap.js`
Build from a single source of truth listing all routes (home, about, projects index, each project slug, uses, blog posts) with `lastModified`, `changeFrequency`, `priority`.

### 4.6 Add JSON-LD
Create `components/StructuredData.jsx` rendering `<script type="application/ld+json">` and mount it in `app/layout.js`:
- `Person` (name, jobTitle, address city/region/country, sameAs → GitHub / LinkedIn / LeetCode, knowsAbout → skills from `data.js`).
- `WebSite` (name, url, `potentialAction` SearchAction only if search exists).
- `ProfilePage` / `WebPage`.
- Later, `ItemList` / `CreativeWork` per project in `data.js`.

**Validation:** Google Rich Results Test + `https://validator.schema.org/`.

### 4.7 OG/Twitter images
Replace the 4.9 MB `previewPic.png` OG reference with a generated one: `app/opengraph-image.jsx` (+ `app/twitter-image.jsx`, or `opengraph-image.alt.txt`) using `next/og` `ImageResponse` at 1200×630. Removes the size/aspect problem entirely.

---

## 5. Phase 2 — Make the content crawlable (2–4 days, biggest ranking lever)

The single biggest issue: **all valuable text lives inside `display: none` windows or a `opacity: 0` wrapper.**

### 5.1 Restore visibility without breaking the design
- In `components/LoadingWrapper.jsx`: don't gate content on JS. Preferred approach: put the reveal animation in **CSS** (`@keyframes` + `animation-fill-mode: both`) so the server HTML is visible even if JS fails; use JS/GSAP only for the mask flourish.
- Add a `prefers-reduced-motion` path that skips all timelines.
- Add `<noscript>` fallback CSS that forces `opacity: 1` / `display: block`.
- In `hoc/WindowWrapper.jsx`: `display: none` for closed windows is what hides the content. Keep the interaction, but stop relying on window state for the *only* copy of the text — see 5.2.

### 5.2 Add a real content layer (recommended: routes)
Add crawlable, server-rendered routes that reuse `data.js` — same content, real pages:
- `/` — home (keep the macOS experience)
- `/about` — the `adityaData` bio currently inlined in `components/Navbar.jsx` (move it into `data.js`)
- `/projects` — index from `locations.work.children`
- `/projects/[slug]` — one page per project, `generateStaticParams` + `generateMetadata`, description, tech list, links
- `/achievements` — from `achievements` in `data.js`
- `/resume` — **HTML** resume (see 5.3)
- `/uses` — the `techStack` content
- Each page: unique `<h1>`, one `<h2>` per section, real prose, canonical, OG.

If new routes are out of scope for now, the interim fix is a visually hidden-but-not-hidden `<section>` at the end of the page with semantic HTML of bio/skills/achievements/projects. This is legitimate (it's the page's actual content, just not windowed) — do **not** keyword-stuff it.

### 5.3 Resume
Add `/resume` as HTML text (experience, education, skills from `data.js`) + keep PDF download. Link the PDF from the HTML page with `rel="alternate"`-style intent, and give the HTML page the canonical role. Google does not index PDF images/`react-pdf` canvas output.

### 5.4 Real links (navigation)
- `components/Navbar.jsx`: render `<Link href="/projects">Projects</Link>` etc. Solution for the interactive feel: `<Link>` + `onClick` that also opens the window and `preventDefault()` only when JS is active — so the href remains a meaningful, crawlable URL.
- `components/Dock.jsx`: wrap icons in `<Link href="/uses">` with accessible text; keep `<button>` semantics for the window toggle inside the link, or keep the button and add the link elsewhere.
- `windows/Home.jsx` project folders → `<Link href={`/projects/${slug}`}>`.
- Add a footer with links to all key routes (huge for crawl discovery).

### 5.5 Headings
`components/Welcome.jsx` currently has the only `h1`, as `Macƒolio.` (with `ƒ`). Change to a plain, descriptive H1 — "Aditya Singh Rawat" or "Full-Stack Developer Portfolio" — and keep the stylised glyph as `aria-hidden` decorative text or a `span`. Reserve `h1` for `/`, use `h2`/`h3` consistently (several windows already use `h2`/`h3`, keep that hierarchy valid once windows move to real pages).

### 5.6 Alt text
Replace generic alts with descriptive, data-driven ones:
- `windows/Arc.jsx`: `alt={ach.title}` (currently `'image'`)
- `components/Home.jsx`: `alt={`${project.name} project folder`}`
- `windows/Contact.jsx`: `alt={`${author} portrait`}`
- `components/Navbar.jsx`: `alt={`${author} logo`}`
- Empty `alt=""` in `windows/TextFile.jsx`, `windows/ImgFile.jsx`, `windows/Finder.jsx` are fine **only** if genuinely decorative; otherwise describe. `windows/WindowControls.jsx` `alt="x"` → descriptive or decorative.

---

## 6. Phase 3 — Performance / Core Web Vitals (2–3 days)

1. **Images:** `previewPic.png` 4.9 MB and `astronaut2.png` 1.9 MB are the LCP killers.
   - Convert to WebP/AVIF (`cwebp -q 80`, `avifenc`) or serve via `next/image` with `sizes`.
   - Add to `next.config.mjs`: `images: { formats: ["image/avif", "image/webp"] }`, and `imageSizes`/`deviceSizes` tuning if needed.
   - `preload` the hero/loading image; do not `preload` the OG image.
2. **JS payload:** GSAP + `SplitText` + `Draggable` + `react-pdf` is a lot for a landing page.
   - Confirm `react-pdf` is only in the resume chunk (it is dynamically imported — verify with `bun run build` output).
   - Consider `next/dynamic` for `Gallery`, `Arc`, `Finder` window contents so they aren't in the initial bundle.
   - Audit with `@next/bundle-analyzer`.
3. **CLS:** the mask → content reveal and font swap can shift layout. Ensure the mask element has fixed dimensions and `next/font` is already used (it is ✅).
4. **INP:** `mousemove` on `components/Welcome.jsx` and `window.addEventListener("resize")` in `setUpHover` run per-letter `gsap.to`. Throttle/`requestAnimationFrame`-gate and remove the resize listener properly (currently added inside `setUpHover`, removed in cleanup ✅ but per-letter tween churn remains).
5. Target: LCP < 2.5 s, INP < 200 ms, CLS < 0.1 on mobile.

---

## 7. Phase 4 — Content & off-page (ongoing)

1. Write 600+ words of real copy for `/about`, `/projects/*`, `/uses` — what you built, why, stack, outcomes/links (GitHub, live demo, screenshots).
2. Add `/blog` (MDX) — 3 posts: "Building a macOS-style portfolio in Next.js", "Why I chose Go + PostgreSQL for X", etc. This is the main long-term keyword engine.
3. Add `sameAs` entity links (GitHub, LinkedIn, LeetCode) and make sure those profiles link back to the site.
4. Consider a custom domain (`adityasinghrawat.dev`) — better brand ranking than `*.vercel.app`; 301 the old one.
5. Submit sitemap in GSC, request indexing for each new route, monitor Coverage/Enhancements.

---

## 8. Task checklist

### Phase 0 — measurement
- [x] Verify in Google Search Console + Bing Webmaster — **needs your action (site must be deployed first)**
- [x] Save Lighthouse baseline — **needs your action after deploy**
- [x] Decide canonical domain (`SITE_URL`) — defaulted to `macfolio-azure.vercel.app` via `NEXT_PUBLIC_SITE_URL`
- [ ] Add `@vercel/analytics` (or GA4) — **needs account/keys**

### Phase 1 — technical foundation ✅ Implemented
- [x] Create `lib/site.js` + `NEXT_PUBLIC_SITE_URL`
- [x] Update `app/layout.js` metadata (canonical, twitter, verification, name-led title/description)
- [x] Remove `maximumScale: 1` from viewport
- [x] Add `app/robots.js`
- [x] Add `app/sitemap.js`
- [x] Add `components/StructuredData.jsx` (Person, WebSite, ProfilePage)
- [x] Add `app/opengraph-image.jsx` + `opengraph-image.alt.txt`; removed the 4.9 MB `previewPic.png` (file deleted, generated 1200×630 OG image used instead)
- [x] Validated: build output serves canonical, `twitter:card`, `og:image`, JSON-LD on all routes

### Phase 2 — crawlability ✅ Implemented
- [x] `LoadingWrapper`: content no longer gated on JS (`opacity: 0` removed; mask still covers the intro animation); `prefers-reduced-motion` path added
- [x] Routes: `/about`, `/projects`, `/projects/[slug]` (SSG × 6), `/achievements`, `/uses`, `/resume`, `/contact` — all static, on white background via `app/(pages)/` route group with shared nav + footer
- [x] `generateStaticParams` + `generateMetadata` per dynamic route, per-project OG images
- [x] Bio moved out of `components/Navbar.jsx` into `data.js` (`aboutMe`)
- [x] Nav items and project folders converted to `<Link>`s (window-opening behavior preserved via JS intercept)
- [x] Descriptive `h1` ("Hey I'm Aditya Singh Rawat! Welcome to my Macfolio.") via `sr-only` text; per-letter animated spans now `aria-hidden`
- [x] Alt text fixed in `Arc.jsx`, `Home.jsx`, `Contact.jsx`, `Navbar.jsx`, `WindowControls.jsx`
- [x] HTML `/resume` page (crawlable) alongside the PDF download

### Phase 3 — performance ✅ / ◯ Partial
- [x] `astronaut2.png` 1.9 MB → `astronaut2.jpg` 500 KB (both references updated)
- [x] Project screenshots converted PNG→JPEG (`fingenie`, `medicall`, `sensai`, `reflect`, `moijito`, `medusa`) — ~9 MB total saved; `data.js` paths updated
- [x] `images.formats: ["image/avif", "image/webp"]` in `next.config.mjs`
- [x] rAF-throttled `Welcome.jsx` mousemove effect
- [ ] Dynamic-import `Gallery`/`Arc`/`Finder`/`TextFile`/`ImgFile` — **intentionally skipped**: keeping windows server-rendered keeps their content in the HTML (better for SEO)
- [ ] Re-run Lighthouse after deploy, confirm LCP/INP/CLS targets — **needs your action**

### Phase 4 — content
- [x] Data-backed content on every route (bio, skills, 6 projects, achievements, resume)
- [x] Internal link mesh: SiteNav header + footer on every content page, "More projects" cross-links, /resume → project links, /projects → /projects/[slug]
- [ ] Start `/blog` with 3 posts — future work
- [x] Entity `sameAs` links in JSON-LD (GitHub, LinkedIn, X, LeetCode); backlinks from user profiles — **needs your action**
- [ ] Submit sitemap in GSC, request indexing — **needs your action**

---

## 9. Suggestive implementation order (first 5 PRs)

1. **PR #1 — technical:** `lib/site.js`, metadata upgrade, `robots.js`, `sitemap.js`, viewport fix, JSON-LD, dynamic OG image.
2. **PR #2 — visibility:** `LoadingWrapper` CSS reveal + reduced motion + noscript; descriptive `h1`.
3. **PR #3 — links & alts:** semantic `<Link>` nav/dock/folders, footer, alt-text pass.
4. **PR #4 — routes:** `/about`, `/projects`, `/projects/[slug]`, `/achievements`, `/uses`, HTML `/resume` from `data.js`.
5. **PR #5 — perf:** image pipeline + dynamic imports + Lighthouse verification.

---

## 10. Risks & notes

- **Don't hide text for crawlers via `display: none` only** — it works in DOM but is discounted. Real routes are the durable fix.
- **Avoid keyword stuffing** in the hidden-content interim fix; write it as genuine page copy.
- **Single-page concurrency:** if routes are added, the macOS home must stay the primary entry point with strong internal links to the new pages.
- **`keywords` meta and `SplitText` char-splitting** are harmless but not SEO wins — don't rely on them.
- Re-check after any Next.js 16 upgrade: metadata APIs and `app/robots.js`/`app/sitemap.js` conventions can change.
