# GitHub Copilot Instructions

Follow these repository instructions when working in this project.

## General guidance

- Keep changes small and consistent with the existing Next.js frontend prototype.
- Write new or updated repository instructions, comments, and documentation in English.
- Avoid local absolute paths, machine-specific assumptions, and checked-in secrets.
- Prefer extending the current `app/`, `components/`, and `lib/` structure instead of introducing parallel patterns.
- Keep user-facing flows coherent across pages and shared components.

## Project context

- Application routes live under `app/`.
- Reusable UI components live under `components/`.
- Shared logic and data helpers live under `lib/`.
- Tooling and dependencies are defined in `package.json`, `next.config.js`, and `biome.json`.

## Validation

- Prefer `npm run lint` for frontend changes.
- Prefer `npm run build` when a change may affect route generation or production behavior.
- Clearly distinguish between checks you ran and checks you did not run.
