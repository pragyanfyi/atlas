import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Callout } from "fumadocs-ui/components/callout";
import { BookOpen, Hourglass } from "lucide-react";
import type { ReactNode } from "react";

/** Pages worth reading first. Links, not a required order. */
export function HelpsToKnow({ children }: { children: ReactNode }) {
  return (
    <Callout title="Helps to know" icon={<BookOpen className="size-5" />}>
      {children}
    </Callout>
  );
}

/** On pages about the modern architecture: the older piece, linked to History. */
export function WhatThisReplaced({ children }: { children: ReactNode }) {
  return (
    <Callout title="What this replaced" icon={<Hourglass className="size-5" />}>
      {children}
    </Callout>
  );
}

/** Deeper detail, collapsed by default so readers can skip it. */
export function UnderTheHood({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Accordions>
      <Accordion title={`Under the hood: ${title}`}>{children}</Accordion>
    </Accordions>
  );
}
