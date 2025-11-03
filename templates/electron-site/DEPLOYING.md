# Deploying `site/` to Cloudflare Pages (OpenNext)

Cloudflare Pages configuration:
- Project type: Pages
- Framework preset: None (custom)
- Root Directory: `site`
- Build command: `npm run build:opennext`
- Node: 18+

Ensure the following are committed at `site/`:
- package.json (with next in dependencies)
- package-lock.json (run `npm install` in `site/` once to create it)

Local verification:
- `cd site && npm install`
- `npm run dev` → http://localhost:3000
- `npm run build`
