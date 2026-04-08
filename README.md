# Weavy Flow Gallery

A curated gallery of [Weavy](https://app.weavy.ai) workflow tutorials and flow links, built with SvelteKit. Styled after the Weavy dark UI (Figma design tokens).

## Features

- **26 Flow Tutorials** – Workflows, features, tutorials, live sessions, and architecture guides
- **Category Filtering** – Sidebar navigation with category counts
- **Search** – Real-time text search across all flow titles
- **Multi-Flow Tabs** – Cards with multiple flow variants (e.g. Flow A / B / C)
- **One-Click Actions** – Open flow canvas, watch YouTube video, copy link
- **Dark Theme** – Design tokens from the Weavy Figma UI (`#0E0E13` background, `#212126` surfaces, `#F7FFA8` accent)

## Tech Stack

- **SvelteKit** (TypeScript)
- **DM Sans** (Google Fonts)
- **Lucide Icons** (`lucide-svelte`)
- Custom brand SVG components (YouTube, Discord)
- CSS Custom Properties for all design tokens

## Getting Started

```sh
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Sidebar.svelte        # Category filter navigation
│   │   ├── FlowCard.svelte       # Flow tutorial card
│   │   ├── YoutubeIcon.svelte    # YouTube brand SVG
│   │   └── DiscordIcon.svelte    # Discord brand SVG
│   └── data/
│       └── flows.ts              # Flow data & category helpers
├── routes/
│   ├── +layout.svelte            # Global styles & head
│   └── +page.svelte              # Main gallery page
└── styles/
    └── global.css                # Design tokens & reset
static/
└── assets/                       # Flow screenshot PNGs & favicon
```

## Building

```sh
npm run build
npm run preview
```

## Data Source

Flow data is sourced from [weavy-flow-gallery](../weavy-flow-gallery) (vanilla JS project). The 26 entries with YouTube links, flow URLs, and screenshot thumbnails were migrated to `src/lib/data/flows.ts`.

## Design

Styling follows the Weavy Figma design (dark theme):

- **Background:** `#0E0E13`
- **Surfaces:** `#212126`
- **Borders:** `#302E33`
- **Accent:** `#F7FFA8`
- **Font:** DM Sans (400, 500)
- **Radii:** 4px (buttons), 8px (panels), 12px (cards)
