# Contributing to Atlas

Thanks for helping improve Atlas. This guide covers how to propose changes and what a good pull request looks like.

## Ways to contribute

- **Fix or improve content**: typos, outdated facts, unclear explanations, better diagrams (`content/docs`).
- **Suggest new topics**: open a [content suggestion](https://github.com/pragyanfyi/atlas/issues/new/choose).
- **Report bugs** in the site itself (layout, search, theming).

For anything larger than a small fix, please open an issue first so we can agree on the direction before you spend time on it.

## Local setup

Requires [Bun](https://bun.sh).

```bash
bun install
bun dev          # http://localhost:3000
```

Before opening a PR, make sure these pass (CI runs the same checks):

```bash
bun run lint
bun run types:check
bun run build
```

`bun run format` auto-formats with Biome.

## Workflow

1. Fork the repo and create a branch from `main`.
2. Make your change in small, focused commits. Commit messages inside a PR can be informal.
3. Open a pull request against `main`.
4. Wait for CI to pass and for review. Resolve all review conversations.

`main` is protected: no direct pushes, and every PR is **squash-merged**. The PR title becomes the commit message on `main`.

## PR titles

PR titles must follow [Conventional Commits](https://www.conventionalcommits.org):

```
type(optional-scope): short description 
```

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.

Examples:

- `docs(architecture): explain the bridgeless startup path`
- `fix: broken og image for nested pages`
- `chore(deps): bump fumadocs to 16.19.7`

## Writing guidelines

Atlas is architecture-first and favours diagrams over code. Prefer explaining _why_ and _how it fits together_ over copy-pasteable snippets. Link to primary sources (official docs, RFCs, source code) for claims.

## License

By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE).
