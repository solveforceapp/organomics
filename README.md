# Organomics

Dual-implementation site:
- `index.html` — legacy static landing (fully styled)
- `pages/` — Next.js app (React), with global styles in `style.css`

## Develop
- Install: `npm install`
- Dev server: `npm run dev` → http://localhost:3000
- Build: `npm run build`
- Start: `npm run start`
 - Cloudflare parity: `npm run build:opennext` (OpenNext) or `npm run build:cloudflare:pages` (legacy)

## Deploy (Cloudflare Pages)
See `DEPLOYING.md` for detailed steps.

Quick checklist:
1) `next` in dependencies (not devDependencies)
2) Commit `package-lock.json`
3) Root Directory points to the folder with `package.json` + `package-lock.json`
4) Build command (choose one):
	- Recommended (OpenNext): `npx opennext@latest build`
	- Legacy (next-on-pages): `npx @cloudflare/next-on-pages@1`
