# Organomics – AI Agent Guide

Purpose: Make agents productive fast in a dual-implementation web app (legacy static HTML + Next.js).

## Architecture (big picture)
- Dual mode: `index.html` (fully styled, inline CSS) coexists with a modern Next.js app under `pages/`.
- Migration path: new production-grade features go to Next.js; quick prototypes can extend `index.html`.
- Next config: `next.config.js` sets `reactStrictMode: true` and `images.unoptimized: true` for static export compatibility.

## Key files
- `index.html` – legacy single-page site (gradient: hex 667eea → 764ba2, responsive grids, hero + cards).
- `pages/_app.js` – imports global `style.css`; use CSS Modules per-component via `*.module.css`.
- `pages/index.js`, `about.js`, `contact.js`, `404.js` – content-first pages using `<Head>`.
- `style.css`, `style.module.css` – global vs module styles (purple gradient/white overlay aesthetic).
- `public/` – static assets (SVG icons, etc.).

## Dev workflow
- Install deps and lock: `npm install` (lockfile must be committed).
- Run locally: `npm run dev` → http://localhost:3000.
- Build/start: `npm run build` then `npm run start`.
 - Cloudflare parity (optional): `npm run build:cloudflare:pages` mirrors the legacy adapter build.
 - OpenNext build (preferred): `npm run build:opennext`.

## Deployment (Cloudflare Pages)
- Historical adapter: `@cloudflare/next-on-pages@1` (deprecated). Prefer OpenNext for new setups.
- If still using next-on-pages:
  - Keep `next` in `dependencies` (not only devDependencies).
  - Ensure `package-lock.json` is in git so the build detects Next.js (root must contain `package.json`).
  - Typical build command: `npx @cloudflare/next-on-pages@1`.
 - If adopting OpenNext: use `npx opennext@latest build` and follow `DEPLOYING.md` for Pages settings.
 - Prefer the local script: `npm run build:opennext` (same effect as above, easier to remember).

## Conventions & patterns
- Pages use `<Head>` for SEO; keep copy concise. Contact info varies by mode:
  - Static: email `organomics@solveforce.com`; phone `(888) 765-8301`.
  - Next.js: email `directory@solveforce.com`.
- Styling: prefer CSS Modules for components; keep global resets in `style.css`.
- Color system: purple gradient (hex 667eea, 764ba2) with translucent white overlays.

## Migration guidance
- When porting from `index.html`, extract sections into simple pages/components under `pages/` and mirror styles via CSS Modules.
- Keep behavior minimal; there’s no data layer or filtering implemented yet.

## Pitfalls to avoid
- Forgetting `images.unoptimized: true` breaks static export/CDN compatibility.
- CSS Module files must end with `.module.css`.
- Cloudflare builds fail if Next.js isn’t in `dependencies` or the lockfile is missing.

## Concrete examples
- SEO pattern: see `pages/index.js` using `next/head`.
- Global styles: imported once in `pages/_app.js`.
- Component-local styles: create `components/Foo.module.css` and import in `components/Foo.jsx`.
