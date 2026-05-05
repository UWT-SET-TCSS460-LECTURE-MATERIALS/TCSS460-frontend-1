# CLAUDE.md — TCSS460-frontend-1

This file gives Claude Code the context it needs to work on this repo.

---

## What This Repo Is

**`TCSS460-frontend-1`** is the in-class lecture demo and starter for **React fundamentals** in TCSS 460 (Spring 2026, UW Tacoma). It's a **Vite + React 19 + React Router 7 + MUI v7** app — deliberately _not_ Next.js. It's the precursor to `TCSS460-frontend-2` (the Next.js consumer that pairs with auth-squared and `backend-3`); students see plain React here first, then Next.js after they've internalized components, props, state, and client-side routing.

This repo was ported in May 2026 from the older Next.js-based `~/Documents/GitHub/TCSS460-fe-inclass-state-lecture`. All components/views/theme/types/utils were lifted as-is; only the Next-specific bits were swapped out (App Router → React Router, `next/link` → `react-router-dom`, `next/image` → `<img>`, `next/font` → `@fontsource/inter`, `app/icon.tsx` → static SVG favicon).

**Pedagogy:** the `src/views/state/` directory holds three files used to walk students through React state. `state.tsx` is the live file rendered at `/state` and is **intentionally a copy of `.state.incorrect.tsx`** — it uses a plain `let c = 0` and a `useReducer` "forceUpdate" hack to demonstrate why those approaches fail. `.state.correct.tsx` is the reference solution using `useState`, kept alongside as a diffable contrast. The lint/TS warnings on the incorrect patterns are expected and intentional — do **not** "clean them up" unless the lecture content itself changes.

---

## Course Context

- **Course:** TCSS 460 — Client/Server Programming for Internet Applications
- **Quarter:** Spring 2026
- **Instructor:** Charles Bryan
- **Audience:** Juniors/seniors with strong Java background, **no prior web experience**. They learn TypeScript, React, and Next.js _during_ this course.
- **When this repo is used:** Week 6 (lecture day on the React crash course) and as starter scaffolding for the Week 6+ check-off and Sprints 4-5.
- **Sister repos in `../`:** `TCSS460-backend-1`, `TCSS460-backend-2`, `TCSS460-backend-3`, `TCSS460-frontend-2` (Next.js consumer), `TCSS460-group-project-backend`.

---

## Stack

| Tool                                         | Version          | Notes                                                  |
| -------------------------------------------- | ---------------- | ------------------------------------------------------ |
| Vite                                         | ^6               | Dev server + bundler                                   |
| `@vitejs/plugin-react`                       | ^4               | JSX + Fast Refresh                                     |
| React / React DOM                            | ^19.2            |                                                        |
| `react-router-dom`                           | ^7               | `<BrowserRouter>` declarative mode                     |
| MUI (`@mui/material`, `@mui/icons-material`) | ^7.3             | Component lib                                          |
| `@emotion/react`, `@emotion/styled`          | ^11              | MUI styling engine                                     |
| `@fontsource/inter`                          | ^5               | Self-hosted Inter font                                 |
| TypeScript                                   | ~5.9             | Stable; matches other Forge repos                      |
| ESLint                                       | ^9 (flat config) | + react, react-hooks, react-refresh, typescript-eslint |
| Prettier                                     | ^3               | Matches `backend-1` config                             |
| Node                                         | 22 LTS           | `engines.node: ">=22.0.0"`; CI runs Node 22            |

---

## Repo Layout

```
TCSS460-frontend-1/
├── .github/workflows/ci.yml    # format:check, lint, typecheck, build (Node 22)
├── .gitignore
├── .prettierrc.json            # 2-space, semi, single-quote, printWidth 100, singleAttributePerLine
├── .prettierignore
├── README.md                   # Student-facing
├── CLAUDE.md                   # This file
├── eslint.config.mjs           # Flat config; react/no-unescaped-entities is OFF
├── index.html                  # Vite entry HTML, references /favicon.svg
├── package.json
├── tsconfig.json               # Solution config; references the two below
├── tsconfig.app.json           # src/** — DOM, jsx: react-jsx, "@/*" → "src/*"
├── tsconfig.node.json          # vite.config.ts
├── vite.config.ts              # React plugin, "@/" alias to src/
├── public/
│   ├── favicon.svg             # Static port of the original next/og icon
│   └── assets/images/under-construction.svg  # Used by the /messages/send placeholder
└── src/
    ├── main.tsx                # createRoot — imports @fontsource/inter
    ├── App.tsx                 # ThemeProvider + BrowserRouter + Routes
    ├── components/             # Reusable presentational components
    │   ├── DemoShell.tsx       # AppBar wrapper; wraps /state and /messages/* via <Outlet/>
    │   ├── Logo.tsx            # SVG with 4 variants (full/small/icon/monochrome)
    │   ├── MessageListItem.tsx
    │   ├── PriorityAvatar.tsx  # Exhaustive switch over the Priority union
    │   └── PrioritySelector.tsx
    ├── views/                  # Page components (one per route)
    │   ├── home/HomePage.tsx
    │   ├── state/
    │   │   ├── State.tsx               # ← live route; copy of .State.incorrect.tsx (intentional warnings)
    │   │   ├── .State.incorrect.tsx    # ← canonical "wrong way" reference (let c, forceUpdate hack)
    │   │   └── .State.correct.tsx      # ← canonical "right way" reference (useState)
    │   ├── messages/
    │   │   ├── MessageList.tsx
    │   │   ├── MessageSend.tsx         # ← INTENTIONALLY EMPTY (placeholder for forms lecture)
    │   │   └── mock-data.ts            # Seeded mock messages (colocated; goes away once frontend-2 hits the real API)
    │   ├── ComingSoon.tsx      # Placeholder used for /messages/send
    │   └── NotFound.tsx        # 404 catch-all
    ├── theme/index.ts          # MUI createTheme — single source of truth for colors/typography
    ├── types/                  # Message; Priority union + PRIORITY const + PRIORITY_LEVELS
    └── config/index.ts         # APP_CONFIG (course info, route paths)
```

---

## Routing

Defined in `src/App.tsx`:

| Path             | Component     | Wrapped by `DemoLayout`? |
| ---------------- | ------------- | ------------------------ |
| `/`              | `HomePage`    | no (full-screen splash)  |
| `/state`         | `State`       | yes (AppBar)             |
| `/messages/view` | `MessageList` | yes                      |
| `/messages/send` | `ComingSoon`  | yes                      |
| `*`              | `Error404`    | no                       |

The "shared AppBar across some-but-not-all routes" pattern uses React Router's nested-route + `<Outlet/>` mechanism — i.e., a parent `<Route element={<DemoLayout/>}>` with no path, wrapping the child routes that need the AppBar. This is the idiomatic replacement for Next's `(demo)` route-group concept.

---

## Conventions

These match the rest of the Forge ecosystem unless noted.

- **Spell out `request`/`response`/`next`** in any backend-style code that lands here later (consistent with backend repos). N/A so far in this repo.
- **Named exports** preferred. The current views use `export default function` because that's what the source repo did and it reads cleanly for one-component-per-file view files; new utilities should use named exports.
- **camelCase** variables; **PascalCase** for component names AND their filenames (`MessageList.tsx` exports `MessageList`); **kebab-case** for folders and non-component files (e.g. `mock-data.ts`, `vite-env.d.ts`, `types/`).
- **`@/*` import alias** maps to `src/*` (configured in both `tsconfig.app.json` and `vite.config.ts` — keep them in sync).
- **MUI styling:** prefer the `sx` prop. Theme tokens (`primary.dark`, `secondary.main`, `text.secondary`) over raw hex strings.
- **No `"use client"`** directives — this is Vite, not Next.
- **Single quotes**, **2-space indent**, **trailing commas (es5)**, **`singleAttributePerLine`**, **`printWidth: 100`** — see `.prettierrc.json`. Run `npm run format` before committing.
- **`react/no-unescaped-entities` is disabled** in `eslint.config.mjs` so prose like `you're` and `doesn't` doesn't need HTML-escaping in TSX text.
- **`noUnusedLocals` / `noUnusedParameters` are intentionally OFF** in `tsconfig.app.json` to preserve the teaching artifacts in `state.tsx`. Don't turn them back on.
- **Theme is the single source of truth** for colors/typography (`src/theme/index.ts`). Don't sprinkle hex values into components.

---

## Scripts

```bash
npm run dev          # Vite dev server at http://localhost:5173
npm run build        # tsc -b && vite build → dist/
npm run preview      # Serve the dist/ build locally
npm run lint         # ESLint
npm run lint:fix     # ESLint --fix
npm run typecheck    # tsc -b --noEmit
npm run format       # Prettier --write
npm run format:check # Prettier --check (CI uses this)
```

CI (`.github/workflows/ci.yml`) runs `format:check → lint → typecheck → build` on Node 22.

---

## Known Intentional "Issues"

Two lint/TS warnings are expected and should not be "fixed":

1. `src/views/state/State.tsx` — unused `forceUpdate` from `useReducer` (kept to demo the forceUpdate hack students might reach for; calling it would still not fix `let c = 0` resetting on re-render).
2. `src/views/state/State.tsx` — unused `e` parameter in `handelIncrement` (commented-out `console.dir(e)` for lecture).

Note on dotfile inclusion: `tsconfig.app.json`'s `include` explicitly lists `src/views/state/.State.correct.tsx` so the canonical "right way" reference gets typechecked alongside the rest of `src`. `.State.incorrect.tsx` is intentionally **not** included — its diagnostics already surface via `State.tsx`, which is its byte-identical copy. ESLint also ignores `**/.*.tsx` (see `eslint.config.mjs`), so neither dotfile shows up in lint output.

Plus one deliberately empty file: `src/views/messages/MessageSend.tsx` — slot for the upcoming controlled-form lecture.

---

## Working on This Repo

- **Use the dedicated tools** — `Read`, `Edit`, `Write`. Don't `cat`/`sed`/`echo` unless there's no alternative.
- **For UI changes**, run `npm run dev` and verify in a browser. Type-checking and build success do _not_ prove the UI works (the `<Link to=…>` swap and the `<img>` swap are exactly the kind of changes that pass `tsc` but break interactively).
- **Don't add features beyond what was asked.** This is a teaching demo — every additional abstraction is a thing students have to ignore in lecture.
- **Don't write defensive error handling** for impossible cases. This repo has no network calls; the only failure modes are bugs.
- **No external repo edits from this directory.** Per Forge memory: don't reach into sibling repos like `auth-squared` or `backend-3` from a session rooted here.

---

## Out of Scope / Future Passes

These were deferred from the initial port and are tracked for follow-up (likely via the parent Forge project):

- Filling in `src/views/messages/MessageSend.tsx` (controlled-form lecture).
- Adding a Vitest + React Testing Library smoke test for at least one route.
- Documenting this repo in `../TCSS460-26SP-FORGE/.claude/docs/repo-context.md` repo inventory.
