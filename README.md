# testing-design

SvelteKit 3 project with Svelte 5.

## Tech Stack

- **[Svelte](https://svelte.dev)** (Svelte 5, runes) - frontend framework
- **[SvelteKit](https://svelte.dev/docs/kit)** (SvelteKit 3) - full-stack framework
- **[Tailwind CSS](https://tailwindcss.com)** (Tailwind v4) - styling
- **[shadcn-svelte](https://www.shadcn-svelte.com)** - UI components
- **[bits-ui](https://bits-ui.com)** - headless primitives used by shadcn-svelte (accordion, toggle group)
- **[Fontsource](https://fontsource.org)** - self-hosted variable fonts: Inter (body/UI) and Jost (display)
- **[mode-watcher](https://github.com/svecosystem/mode-watcher)** - light/dark mode

## Design

The site follows a Bauhaus-derived visual language documented in [DESIGN.md](DESIGN.md). Design tokens live in `src/routes/layout.css`; shared site components (header, footer, shapes, page hero, CTA) live in `src/lib/components/site/`, and the fake studio's content in `src/lib/site.ts`.

## Developing

```sh
npm install
npm run dev
```
