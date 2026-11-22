import { ArrowRight, Blocks, Cpu, Gauge, Package } from "lucide-react";
import Link from "next/link";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { gitConfig } from "@/lib/shared";

const topics = [
  {
    icon: Cpu,
    title: "Runtime & New Architecture",
    body: "Hermes, JSI, Fabric and TurboModules: what actually runs, and why.",
  },
  {
    icon: Package,
    title: "Expo ecosystem",
    body: "Modules, config plugins and the build pipeline, mapped end to end.",
  },
  {
    icon: Gauge,
    title: "Performance",
    body: "The libraries that keep lists, gestures and animations at 60fps.",
  },
  {
    icon: Blocks,
    title: "Mobile primitives",
    body: "The building blocks every app needs, and how to define your own.",
  },
];

const path = [
  "Read the introduction",
  "Learn how to define a primitive",
  "Go deeper into the runtime",
];

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="hero-grid absolute inset-0 -z-10" />
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-32">
          <span className="mb-6 rounded-full bg-fd-secondary px-3 py-1 text-xs font-medium text-fd-muted-foreground">
            Open source · Architecture-first
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Your map to the React Native ecosystem
          </h1>
          <p className="mt-5 max-w-xl text-lg text-fd-muted-foreground text-balance">
            Understand how things work under the hood, explore the tools that
            power modern mobile development, and design apps that scale.
            Diagrams over code.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Link
              href="/docs"
              className="inline-flex h-10 items-center gap-1.5 rounded-full bg-fd-primary px-5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
            >
              Start reading
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-10 items-center rounded-full bg-fd-secondary px-5 text-sm font-medium transition-colors hover:bg-fd-accent"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 pb-24">
          <div className="rounded-3xl border bg-fd-card/50 p-4 md:p-8">
            <ArchitectureDiagram className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="mx-auto w-full max-w-5xl px-6 pb-24">
        <h2 className="mb-8 text-sm font-medium text-fd-muted-foreground">
          What's inside
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {topics.map(({ icon: Icon, title, body }) => (
            <Link
              key={title}
              href="/docs"
              className="group flex flex-col gap-3 rounded-2xl border bg-fd-card p-6 transition-colors hover:bg-fd-accent/60"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-fd-secondary text-fd-primary">
                <Icon className="size-4" />
              </span>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-fd-muted-foreground">{body}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Start here */}
      <section className="mx-auto w-full max-w-5xl px-6 pb-24">
        <h2 className="mb-8 text-sm font-medium text-fd-muted-foreground">
          Start here
        </h2>
        <ol className="divide-y rounded-2xl border bg-fd-card">
          {path.map((step, i) => (
            <li key={step}>
              <Link
                href="/docs"
                className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-fd-accent/60"
              >
                <span className="inline-flex size-7 items-center justify-center rounded-full bg-fd-secondary text-xs font-medium tabular-nums">
                  {i + 1}
                </span>
                <span className="flex-1">{step}</span>
                <ArrowRight className="size-4 text-fd-muted-foreground" />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-fd-muted-foreground">
          <span>Atlas · Open source</span>
        </div>
      </footer>
    </div>
  );
}
