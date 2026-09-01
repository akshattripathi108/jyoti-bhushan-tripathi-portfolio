# Jyoti Bhushan Tripathi — Executive Portfolio

A scroll-driven executive portfolio for **Jyoti Bhushan Tripathi**, Deputy General Manager — Transport Network Planning at Vodafone Idea Limited. Built as a cinematic, single-page experience with smooth scrolling, pinned sections, and Apple-style background color morphing.

**Live site:** [jyoti-bhushan-tripathi.netlify.app](https://jyoti-bhushan-tripathi.netlify.app/)

---

## Features

- **Smooth scroll** — Lenis-powered scrolling synced with GSAP ScrollTrigger
- **Horizontal scroll sections** — Expertise cards and career timeline scroll sideways as you scroll down
- **Color morphing** — Background and gradient orbs transition between sections (dark → light → dark)
- **Scroll animations** — Parallax hero, reveal-on-scroll, animated stat counters, scroll progress bar
- **Theme-aware navigation** — Nav adapts for light sections (About, Experience) and dark sections
- **Responsive layout** — Optimized for desktop, tablet, and mobile
- **Accessibility** — Respects `prefers-reduced-motion`
- **SEO ready** — Meta tags, Open Graph, Twitter card, canonical URL
- **Downloadable CV** — Executive resume served from `public/`

---

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | React 19 |
| Build | Vite |
| Animation | GSAP + ScrollTrigger |
| Smooth scroll | Lenis |
| Icons | Lucide React |
| Fonts | Manrope, DM Mono |
| Hosting | Netlify |

---

## Project Structure

```
├── public/
│   ├── Jyoti_Bhushan_Tripathi_Resume.pdf   # Executive CV
│   ├── favicon.svg
│   └── _redirects                          # SPA fallback
├── src/
│   ├── App.jsx                             # Page layout & sections
│   ├── main.jsx                            # Entry point
│   ├── styles.css                          # Global styles
│   ├── data/
│   │   └── content.js                      # Resume data, links, nav
│   └── hooks/
│       ├── useLenis.js                     # Smooth scroll setup
│       ├── useScrollAnimations.js          # GSAP scroll effects
│       └── useColorMorph.js                # Section color transitions
├── index.html                              # SEO meta tags
├── netlify.toml                            # Deploy & security headers
└── package.json
```

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

Commit `package-lock.json` to Git. Do **not** commit `node_modules/` or `dist/`.

---

## Updating Content

Most site content lives in **`src/data/content.js`**:

| Export | What it controls |
|--------|------------------|
| `experience` | Career timeline entries |
| `skills` | Expertise cards |
| `tech` | Technology chips |
| `achievements` | Stats and impact numbers |
| `CV_URL` | Path to resume PDF |
| `LINKEDIN_URL` | LinkedIn profile link |
| `NAV_LINKS` | Navigation menu items |

To update the resume, replace the file at:

```
public/Jyoti_Bhushan_Tripathi_Resume.pdf
```

Section color transitions can be tuned in **`src/hooks/useColorMorph.js`** (`bg`, `orb1`, `orb2`, `theme` per section).

---

## Production Build

```bash
npm run build
npm run preview
```

- `npm run build` — outputs static files to `dist/`
- `npm run preview` — serves the production build locally for final testing

Before deploying, verify:

1. Scroll feel on desktop and mobile
2. Horizontal Expertise and Experience sections
3. Color morphing between sections
4. CV download button
5. Nav links and contact details

---

## Deploy to Netlify

The repo includes `netlify.toml`:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | 22 |

**Steps:**

1. Push the repo to GitHub
2. In Netlify → **Add new site** → **Import from Git**
3. Select the repository (Netlify picks up settings from `netlify.toml`)
4. Deploy

SPA routing is handled by `public/_redirects` (`/* → /index.html`).

Security headers (X-Frame-Options, CSP-related headers, cache for assets) are set in `netlify.toml`.

---

## Custom Domain & SEO

After adding a custom domain in Netlify:

1. Update the canonical URL in `index.html`
2. Update `og:url` to match your live domain
3. Optionally add an `og:image` for richer social previews

---

## Sections

| # | Section | Interaction |
|---|---------|-------------|
| — | Hero | Parallax network visual, scroll cue |
| — | Stats | Animated counters |
| 01 | About | Sticky headline, light theme |
| 02 | Expertise | Horizontal scroll cards |
| 03 | Experience | Horizontal career timeline |
| 04 | Impact | Staggered reveal cards |
| — | Credentials | Education & certifications |
| 05 | Contact | Email, phone, LinkedIn, CV download |

---

## License

Private portfolio project. All rights reserved.
