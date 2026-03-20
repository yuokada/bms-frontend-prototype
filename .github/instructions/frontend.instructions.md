---
applyTo: "app/**/*.js,components/**/*.js,lib/**/*.js,package.json,next.config.js,biome.json"
---

When editing frontend or build files in this repository:

- Preserve the current Next.js app-router structure and keep routing concerns in `app/`.
- Prefer shared logic in `components/` or `lib/` instead of duplicating behavior across pages.
- Keep dependency and script changes aligned with the existing Next.js and Biome setup.
- Avoid introducing environment-specific paths or local-only setup instructions.
