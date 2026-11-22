import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type Neighbour = { name: React.ReactNode; url: string } | undefined;

export function PageNavButtons({
  previous,
  next,
}: {
  previous?: Neighbour;
  next?: Neighbour;
}) {
  const base =
    "inline-flex size-8 items-center justify-center rounded-full bg-fd-secondary text-fd-secondary-foreground transition-colors";
  const enabled = "hover:bg-fd-accent";
  const disabled = "pointer-events-none opacity-40";
  return (
    <div className="flex shrink-0 items-center gap-2">
      {previous ? (
        <Link
          href={previous.url}
          aria-label="Previous page"
          className={`${base} ${enabled}`}
        >
          <ChevronLeft className="size-4" />
        </Link>
      ) : (
        <span aria-hidden className={`${base} ${disabled}`}>
          <ChevronLeft className="size-4" />
        </span>
      )}
      {next ? (
        <Link
          href={next.url}
          aria-label="Next page"
          className={`${base} ${enabled}`}
        >
          <ChevronRight className="size-4" />
        </Link>
      ) : (
        <span aria-hidden className={`${base} ${disabled}`}>
          <ChevronRight className="size-4" />
        </span>
      )}
    </div>
  );
}

export function PageFooterNav({
  previous,
  next,
}: {
  previous?: Neighbour;
  next?: Neighbour;
}) {
  if (!previous && !next) return null;
  return (
    <nav
      aria-label="Pagination"
      className="mt-12 flex items-start justify-between gap-4 border-t pt-8"
    >
      {previous ? (
        <Link href={previous.url} className="group flex flex-col gap-1">
          <span className="text-fd-muted-foreground">Previous</span>
          <span className="font-medium group-hover:underline">
            {previous.name}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.url} className="group flex flex-col gap-1 text-end">
          <span className="text-fd-muted-foreground">Next</span>
          <span className="font-medium group-hover:underline">{next.name}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
