<p align="center">
  <img src="public/logo.svg" alt="Atlas logo" width="96" height="96" />
</p>

<h1 align="center">Atlas</h1>

<p align="center">
  Atlas is your map to the React Native ecosystem. Understand how things work under the hood,
  explore the tools that power modern mobile development, and learn to design applications that scale.
</p>

Atlas is an open-source, architecture-first guide to React Native and Expo: the runtime and
New Architecture, the Expo ecosystem, performance-focused libraries, and the mobile primitives
every app needs. It leans on diagrams over code.

Built with [Fumadocs](https://fumadocs.dev) (Glass layout) on Next.js.

## Development

```bash
bun install
bun dev
```

Open http://localhost:3000.

| Command         | What it does                  |
| --------------- | ----------------------------- |
| `bun dev`       | Start the dev server          |
| `bun run build` | Production build              |
| `bun run lint`  | Lint and format check (Biome) |

## Structure

- `content/docs`: the guide itself (MDX)
- `src/styles/themes`: platform themes (iOS default; colour and radius only)
- `src/components/logo.tsx`: the Atlas mark
