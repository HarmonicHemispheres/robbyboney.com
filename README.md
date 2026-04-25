# robbyboney.com

Personal site for Robby Boney — an aurora-forward bento with neoclassical typographic posture.
Built with [Astro](https://astro.build/). Deploys statically (Vercel-ready).

> *A warm, quiet, asymmetric mosaic — built to feel less like a portfolio and more like a workshop window someone left the lights on inside.*

---

## Develop

```powershell
npm install
npm run dev        # http://localhost:4321
npm run build      # emits dist/
npm run preview    # preview dist/
```

## Project layout

```
src/
  layouts/BaseLayout.astro    page shell: fonts, meta, <Aurora/>, <Nav/>
  components/
    Aurora.astro              drifting gradient + noise grain
    Nav.astro                 floating dropdown nav (⌘K to open)
    Footer.astro              site footer
  data/nav.ts                 nav link + icon model
  pages/
    index.astro               home — the bento mosaic
    about.astro               about (card + prose)
    blog.astro                writing index
    projects.astro            projects index
    contact.astro             contact card
  styles/global.css           design tokens, aurora, grain, .card, .prose
public/                       served verbatim; legacy /content/*.html lives here
```

## Design notes

- **Aurora gradients** drift behind glass cards (`backdrop-filter: blur(24px) saturate(150%)`).
- **Fraunces** for display, **Cormorant Garamond** for body, **JetBrains Mono** for metadata.
- **12-column bento grid** with irregular row spans — not a spreadsheet.
- **The page is the nav.** Every section is already on screen as a card.

## Legacy content

Legacy article HTML (e.g. *Viability in the Age of ASI*) is served verbatim from
`public/content/*.html` and linked from `/blog`. The old top-level `.html` files
(`index.html`, `about.html`, etc.) are kept in-repo as historical artifacts but
are no longer served — Astro owns routing now.

## Deploy

`npm run build` → `dist/`. Point Vercel (or any static host) at `dist/`. Vercel
Analytics hook is included in `BaseLayout.astro` and no-ops locally.