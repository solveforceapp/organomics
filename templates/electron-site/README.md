# Electron Site (Cloudflare Pages)

A minimal Next.js site intended to live under `site/` of your Electron repo, so Cloudflare Pages can build and deploy it.

## Quick start

1) Copy this folder to your Electron repo as `site/`.
2) From the Electron repo root:
   - `cd site`
   - `npm install`  # creates site/package-lock.json (commit it)
3) Run locally:
   - `npm run dev` → http://localhost:3000
4) Cloudflare Pages settings:
   - Root Directory: `site`
   - Build command: `npm run build:opennext`
   - Output: handled by OpenNext

## Notes
- Next is in `dependencies` and `engines.node >= 18.18` is set.
- `images.unoptimized: true` in next.config.js for CDN/static export compatibility.
