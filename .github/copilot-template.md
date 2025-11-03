# AI Agent Instructions (Template)

Purpose: Paste into `.github/copilot-instructions.md` in repos that use a legacy static `index.html` plus a Next.js app.

## Architecture
- Dual mode: `index.html` (static) + Next.js under `pages/` (React).
- Next config: `reactStrictMode: true`, `images.unoptimized: true` for CDN/static export.

## Dev workflow
- Install: `npm install`
- Dev: `npm run dev` → http://localhost:3000
- Build: `npm run build`, Start: `npm run start`
- Cloudflare parity:
  - Preferred: `npm run build:opennext`
  - Legacy: `npm run build:cloudflare:pages`

## Deployment (Cloudflare Pages)
- Keep `next` in dependencies, not only devDependencies.
- Commit `package-lock.json` in the same root as `package.json`.
- Root Directory in Pages must point to that same root.
- Build command (choose one):
  - OpenNext (recommended): `npm run build:opennext`
  - Legacy adapter: `npm run build:cloudflare:pages`

## Conventions
- Use `<Head>` for SEO; keep copy concise.
- CSS Modules for component styles; global resets in `style.css`.
- Static site contact: organomics@solveforce.com, phone (888) 765-8301; Next.js email: directory@solveforce.com.

## Pitfalls
- Missing lockfile or `next` in devDependencies breaks Cloudflare detection.
- `.module.css` suffix required for CSS Modules.
- Forgetting `images.unoptimized: true` may break static export.
