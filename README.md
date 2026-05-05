# TCSS 460 — Frontend 1

**University of Washington Tacoma — School of Engineering and Technology**
**TCSS 460: Client/Server Programming for Internet Applications**

In-class demonstration code for React fundamentals — components, props, state, and client-side routing — using **Vite + React 19 + Material-UI v7 + React Router 7**. This is the _pre-Next.js_ lecture demo: the same components and views you'll later see in `TCSS460-frontend-2` (Next.js), but built on a plain Vite/React stack so the focus stays on React itself.

## Learning Objectives

- React state management fundamentals (`useState`)
- Component composition, props, and reusable presentational components
- Client-side routing with React Router (nested layouts via `<Outlet/>`)
- Material-UI theming, components, and the `sx` prop
- TypeScript in React (props typing, discriminated state, exhaustive `switch`)

## Quick Start

### Prerequisites

- **Node.js 22+** (LTS)
- npm (ships with Node)

### Install & Run

```bash
git clone <this-repo>
cd TCSS460-frontend-1
npm install
npm run dev
```

Open <http://localhost:5173>.

### Scripts

| Script                            | Purpose                                |
| --------------------------------- | -------------------------------------- |
| `npm run dev`                     | Vite dev server with hot module reload |
| `npm run build`                   | Type-check then build to `dist/`       |
| `npm run preview`                 | Serve the production build locally     |
| `npm run lint` / `lint:fix`       | ESLint flat config                     |
| `npm run typecheck`               | `tsc -b --noEmit`                      |
| `npm run format` / `format:check` | Prettier                               |

## Project Structure

```
src/
├── main.tsx                 # Vite entry — mounts <App/>
├── App.tsx                  # ThemeProvider + BrowserRouter + route table
├── components/              # Reusable presentational components
│   ├── logo.tsx             # SVG logo with 4 variants
│   ├── message-list-item.tsx
│   ├── priority-avatar.tsx
│   └── priority-selector.tsx
├── layouts/
│   └── demo-layout.tsx      # AppBar shell — wraps /state and /messages/* routes
├── views/                   # Page-level components (one per route)
│   ├── home/home-page.tsx
│   ├── state/state.tsx
│   ├── messages/{message-list,message-send}.tsx
│   └── maintenance/{404,coming-soon}.tsx
├── theme/index.ts           # MUI theme — single source of truth
├── types/                   # TypeScript types (Message, Priority)
├── config/index.ts          # APP_CONFIG (course info, routes)
└── utils/mock/data.ts       # Seeded mock messages
```

## Routes

| Path             | Component     | Layout                |
| ---------------- | ------------- | --------------------- |
| `/`              | `HomePage`    | none (full-screen)    |
| `/state`         | `State`       | `DemoLayout` (AppBar) |
| `/messages/view` | `MessageList` | `DemoLayout`          |
| `/messages/send` | `ComingSoon`  | `DemoLayout`          |
| `*`              | `Error404`    | none                  |

Routes under `DemoLayout` share an AppBar via React Router's nested-route + `<Outlet/>` pattern.

## Demos

### State Management (`/state`)

A simple counter card. Demonstrates `useState`, render lifecycle, and event handling. **Note**: this file intentionally retains some incorrect-pattern remnants (commented-out `useReducer` force-update, mutable `let c = 0`) used during lecture to teach what _not_ to do.

### Messages (`/messages/view`)

A scrollable list of mock messages with a priority filter. Demonstrates:

- List rendering with stable keys
- State lifting (filter state lives in `MessageList`, passed down)
- Component composition (`PrioritySelector`, `MessageListItem`, `PriorityAvatar`)
- Conditional rendering and array filtering

The `/messages/send` route is currently a `ComingSoon` placeholder — the controlled-form lecture lands here in a later week.

## Tech Stack

- **Vite 6** — dev server and bundler
- **React 19** — UI library
- **React Router 7** — declarative client-side routing (`<BrowserRouter>` mode)
- **Material-UI v7** — component library and theming
- **Emotion** — MUI styling engine
- **TypeScript ~5.9** — type safety
- **ESLint 9** (flat config) + **Prettier 3** — code quality

## Course Resources

- **Course:** TCSS 460 — Client/Server Programming
- **Instructor:** Charles Bryan
- **Institution:** University of Washington Tacoma — SET

---

_Educational repository. Some patterns in `state.tsx` are intentionally incorrect to set up lecture discussion — refer to course materials for best practices._
