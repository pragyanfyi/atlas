import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Cpu,
  Gauge,
  Package,
} from "lucide-react";
import Link from "next/link";
import { ExplodedPhone } from "@/components/home/exploded-phone";
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

const repoUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Animation: the whole section, full width */}
      <section className="relative overflow-hidden border-b">
        <div aria-hidden className="home-grid absolute inset-0 -z-10" />
        <div
          aria-hidden
          className="home-glow absolute top-1/2 left-1/2 -z-10 h-[600px] w-[1100px] -translate-1/2 opacity-60"
        />
        <div className="flex justify-center pt-10 pb-6 md:pt-14">
          <ExplodedPhone />
        </div>
      </section>

      {/* Heading */}
      <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 pt-20 pb-24 text-center">
        <p className="mb-6 font-mono text-xs tracking-wide text-fd-muted-foreground uppercase">
          A field guide to React Native internals
        </p>
        <h1 className="text-5xl font-semibold tracking-tighter text-balance md:text-7xl">
          React Native,{" "}
          <span className="text-fd-muted-foreground">taken apart.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg/relaxed text-fd-muted-foreground text-pretty">
          What happens between your components and the pixels on screen. Hermes,
          JSI, Fabric, Expo and the rest, one concept at a time.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs"
            className="group inline-flex h-10 items-center gap-1.5 rounded-full bg-fd-foreground px-5 text-sm font-medium text-fd-background transition-opacity hover:opacity-85"
          >
            Start reading
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-10 items-center gap-1.5 rounded-full border px-5 text-sm font-medium transition-colors hover:bg-fd-accent"
          >
            GitHub
            <ArrowUpRight className="size-4 text-fd-muted-foreground" />
          </a>
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
