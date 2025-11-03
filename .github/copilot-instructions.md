# Organomics – AI Agent Guide

Purpose: Keep agents productive on a simple, static site (no frameworks, no build step).

## Architecture
- Single page: `index.html` with inline CSS (purple gradient 667eea → 764ba2, white overlays).
- No Node/Next.js, no package.json, no build output. Pure static assets only.

## Key files
- `index.html` – the entire site content and styles.
- `assets/` – optional static media if present.

## Dev workflow
- Open `index.html` directly in a browser to preview.
- For a local server (optional), use any static server extension or `python -m http.server`.

## Deploy (Cloudflare Pages)
- Framework preset: None
- Root Directory: repository root (contains `index.html`)
- Build command: leave empty
- Output directory: leave empty

## Conventions
- Keep copy concise and SEO-friendly in the `<head>` tags.
- Maintain the color system: gradient (hex 667eea → 764ba2) and translucent white overlays.
- Keep markup accessible (semantic headings, links, and contrast).

## Pitfalls to avoid
- Do not add package managers or builds; this site deploys as static files.
- Avoid large, unoptimized media; prefer SVGs or compressed images.

## Quick edits
- Content and layout changes happen in `index.html` only.
- If adding assets, place them under `assets/` and reference with relative paths.
