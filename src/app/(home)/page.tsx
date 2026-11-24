import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ExplodedPhone } from "@/components/home/exploded-phone";
import { gitConfig } from "@/lib/shared";

const sections = [
  {
    slug: "foundations",
    title: "Foundations",
    body: "Threads, the JS engine, host components and layout. The whole stack in one tap.",
  },
  {
    slug: "history",
    title: "History",
    body: "The bridge, Paper and legacy modules: how it worked in 2015, and why it was rebuilt.",
  },
  {
    slug: "new-architecture",
    title: "New Architecture",
    body: "JSI, Fabric, TurboModules and Codegen, and how the pieces connect.",
  },
  {
    slug: "expo",
    title: "Expo",
    body: "Why React Native recommends a framework, and what Expo changed.",
  },
  {
    slug: "rendering-and-state",
    title: "Rendering & State",
    body: "What a render costs on a phone. Lists, animations, gestures, the keyboard.",
  },
  {
    slug: "data",
    title: "Data",
    body: "Where data lives in a mobile app, and how it moves, offline included.",
  },
  {
    slug: "native-ui",
    title: "Native UI",
    body: "Navigation, sheets, SwiftUI and Compose. What makes an app feel native.",
  },
  {
    slug: "shipping",
    title: "Shipping",
    body: "Measuring, debugging, startup and upgrades. Getting it into users' hands.",
  },
];

const tapPath = [
  ["Touch", "finger down"],
  ["Host view", "UIView · View"],
  ["Fabric", "event dispatch"],
  ["JSI", "C++ call"],
  ["Hermes", "onPress()"],
  ["React", "setLiked(true)"],
  ["Commit", "shadow tree diff"],
  ["Pixels", "next frame"],
] as const;

const principles = [
  {
    title: "Diagrams over code",
    body: "Every mechanism gets a picture first. Code shows up when it earns its place.",
  },
  {
    title: "Concepts, not libraries",
    body: "Libraries come and go. Pages explain the idea, and name the tools inside it.",
  },
  {
    title: "Checked against sources",
    body: "Claims and dates are verified against the React Native and Expo docs.",
  },
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

      {/* The map */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="The map"
          title="Eight sections, one stack."
          body="Each page stands alone. Read in order for the full picture, or jump to the layer you're debugging."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border bg-fd-border sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((s, i) => (
            <Link
              key={s.slug}
              href={`/docs/${s.slug}`}
              className="group relative flex min-h-48 flex-col bg-fd-background p-6 transition-colors hover:bg-fd-card"
            >
              <span className="font-mono text-xs text-fd-muted-foreground tabular-nums transition-colors group-hover:text-fd-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-auto pt-10 font-medium">{s.title}</h3>
              <p className="mt-1.5 text-sm text-fd-muted-foreground text-pretty">
                {s.body}
              </p>
              <ArrowUpRight className="absolute top-6 right-6 size-4 text-fd-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </section>

      {/* A tap's path */}
      <section className="border-y bg-fd-card/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Start here"
            title="Follow one tap."
            body="The first page traces a single tap from your finger, through every layer, to the next frame. Once you've seen it, the rest of the map makes sense."
          />
          <div className="mt-12 overflow-x-auto pb-2">
            <ol className="relative flex min-w-[880px] justify-between">
              <span
                aria-hidden
                className="absolute top-[7px] right-[6%] left-[6%] h-px bg-fd-border"
              />
              <span
                aria-hidden
                className="absolute top-[7px] right-[6%] left-[6%] h-px"
              >
                <span className="tap-dot absolute top-1/2 size-2 -translate-1/2 rounded-full bg-fd-primary shadow-[0_0_12px_2px_var(--color-fd-primary)]" />
              </span>
              {tapPath.map(([title, sub], i) => (
                <li
                  key={title}
                  className="relative flex w-[12%] flex-col items-center text-center"
                >
                  <span className="relative z-10 size-[15px] rounded-full border bg-fd-background p-[3px]">
                    <span
                      className={`block size-full rounded-full ${i === 0 || i === tapPath.length - 1 ? "bg-fd-primary" : "bg-fd-border"}`}
                    />
                  </span>
                  <span className="mt-4 text-sm font-medium">{title}</span>
                  <span className="mt-1 font-mono text-[11px] text-fd-muted-foreground">
                    {sub}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <Link
            href="/docs/foundations"
            className="group mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-fd-primary"
          >
            Read The Life of a Tap
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {principles.map((p) => (
            <div key={p.title} className="border-t pt-6">
              <h3 className="font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-fd-muted-foreground text-pretty">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-fd-muted-foreground">
          <span>Atlas · Open source</span>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-fd-foreground"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs tracking-wide text-fd-muted-foreground uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-fd-muted-foreground text-pretty">{body}</p>
    </div>
  );
}
