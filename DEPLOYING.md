# Deploying to Cloudflare Pages

This is a static site. No framework, no build step.

Cloudflare Pages settings:
- Framework preset: None
- Root Directory: repository root (contains `index.html`)
- Build command: leave empty
- Output directory: leave empty

Local preview options:
- Open `index.html` directly in your browser, or
- Serve locally:
  - PowerShell: `python -m http.server 8080`
  - Then visit http://localhost:8080/
