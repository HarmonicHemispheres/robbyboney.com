# robbyboney.com Copilot Instructions

This repository is the Astro source for robbyboney.com. Treat requests like "please update", "update the site", "refresh robbyboney.com", or "update the research" as shorthand for a focused site-refresh workflow.

## Repo facts

- The site is a static Astro app.
- Main pages live in `src/pages/`.
- Reusable UI lives in `src/components/`.
- Writing and research content lives in `content/` and `public/content/`.
- The build command is `npm run build`.
- The deploy artifact is `dist/`.

## Default workflow for "please update"

1. Start with the public-facing pages most likely to need freshness updates: `src/pages/index.astro`, `src/pages/about.astro`, `src/pages/projects.astro`, `src/pages/blog.astro`, and `src/pages/contact.astro`.
2. Check supporting content in `src/components/`, `content/`, and `public/content/` for stale copy, broken links, awkward gaps, outdated dates, and obvious visual regressions.
3. If the request mentions research, update the relevant writing, cards, summaries, or linked content so the site reflects the latest verified information instead of leaving research in chat-only notes.
4. Prefer small, high-value edits that keep the existing warm aurora visual language unless the user explicitly asks for a redesign.
5. Use specific user-provided URLs first for factual updates. If research is needed beyond that, prefer official or primary sources and avoid speculative claims.
6. After edits, always run `npm run build`.
7. If homepage, about, or interactive cards changed, validate in preview or against the built output when feasible.
8. In the final response, summarize what changed, what was validated, and any remaining follow-up.

## Cleanliness priorities

- Remove blank space, layout dead zones, or obviously cramped sections.
- Fix stale or broken external links, embeds, and calls to action.
- Keep dates, titles, roles, and labels accurate.
- Preserve the current site tone and card system unless the user asks for a broader redesign.

## Clarification rule

If the request is only "please update", start with the homepage and the highest-visibility stale content first. Ask a clarifying question only when multiple update directions conflict or when factual updates require a source the user has not provided.