# Deploying to Cloudflare Pages

This repo is a dual-implementation site: a legacy static `index.html` and a Next.js app in `pages/`. Either can be hosted by Cloudflare Pages; the Next.js app is the primary target.

## Prerequisites
- Node 18+ (this repo declares engines >=18.18)
- `package.json` has Next.js in dependencies (not devDependencies)
- `package-lock.json` is committed at the same root as `package.json`
- `next.config.js` sets `images.unoptimized: true` for CDN/static compatibility

## Option A (recommended): OpenNext for Cloudflare
OpenNext is the preferred adapter for new Cloudflare deployments.

Cloudflare Pages settings:
- Project type: Pages
- Framework preset: None (use a custom build)
- Root Directory: repo root (folder that contains `package.json` and `package-lock.json`)
- Build command:
  - `npm run build:opennext` (or `npx opennext@latest build`)
- Build output directory:
  - `./.open-next` (Pages will autodetect when using the Cloudflare adapter inside OpenNext)

Notes:
- See https://opennext.js.org/cloudflare for up-to-date steps and Pages/Workers differences.
- OpenNext generates the appropriate Cloudflare artifacts; you don’t need Vercel.

## Option B (legacy): @cloudflare/next-on-pages
This adapter is deprecated but still works if configured correctly.

Cloudflare Pages settings:
- Project type: Pages
- Framework preset: Next.js (or Custom)
- Root Directory: repo root (folder that contains `package.json` and `package-lock.json`)
- Build command:
  - `npm run build:cloudflare:pages` (or `npx @cloudflare/next-on-pages@1`)
- Output directory: (handled by the adapter; leave default)

Common causes of “No Next.js version detected”
- `next` is missing from `dependencies` (it must not be only in devDependencies)
- `package-lock.json` not committed to the repo root
- Root Directory points to a folder that doesn’t contain your `package.json`

## Local verification
- Install deps: `npm install`
- Dev server: `npm run dev` → http://localhost:3000
- Production build: `npm run build`

Optional parity: Run the legacy adapter locally (to mimic Pages):
- `npm run build:cloudflare:pages` (defined in package.json)

## Static index.html
- `index.html` is deployable as-is by Pages (no build needed). If you want only the static site, set the Root Directory to the repo root and leave build command empty. To deploy the Next.js app, keep the build command as shown above.
