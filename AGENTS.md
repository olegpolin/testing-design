# AGENTS.md

Guidance for AI coding agents working in this repository.

## Tech Stack

Refer to the README for the tech stack used in this project, and keep it updated if you add or remove dependencies.

## Agent Tooling

- You have access to the **Svelte MCP server** — use it for up-to-date Svelte 5 / SvelteKit docs and to validate generated Svelte code.
- You have access to the **shadcn-svelte skills** — use them when adding or working with UI components.
- If either isn't available in your environment, prompt the user to install them before falling back to memory.

## Use Current Docs

Several parts of this stack evolve quickly and training data is often stale — when unsure about an API, check the official docs instead of guessing.

## Design

- UI is built with **shadcn-svelte**. Add components as needed.
- All design tokens live in `src/routes/layout.css`.
- Don't hardcode colors in components, use the theme variables instead and add new ones if needed.
- Every color variable should be defined in both light and dark mode.
- Make sure any UI you build is fully responsive, and looks good in both light and dark mode.

## Git Commits & Branches

- Do **not** add the coding agent as a co-author on commits — no `Co-Authored-By` trailers, "Generated with" lines, or similar AI attribution in commit messages.
- No AI attribution in branch names either — don't prefix branches with `ai/`, `agent/`, or similar. Name branches after the change using conventional naming conventions.
- The same applies to PR titles and descriptions: describe the change, not the tool that made it.
- Write concise, conventional commit messages describing the change itself.
- Any non-trivial change — features, refactors, anything spanning multiple files or commits — goes on a feature branch with a PR; never push directly to `main`. Only trivial fixes may go to `main`, and only if explicitly asked.
- If you push more changes to a branch after its PR is opened, update the PR description so it still reflects the full change set.


## Keeping This File Updated

Treat AGENTS.md as living documentation. If a change you make invalidates anything here — new commands or scripts, moved directories, changed conventions, added dependencies or bindings — update this file in the same commit.
