import type { SVGProps } from "react";

/** Atlas mark: three pointed ellipses at 0°/60°/120° around a nucleus. Uses currentColor. */
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="-11.5 -10 23 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinejoin="round"
      role="img"
      aria-label="Atlas"
      {...props}
    >
      <circle r={1.8} fill="currentColor" stroke="none" />
      <path
        id="atlas-orbit"
        d="M-10.8,0C-6,-3.5 -3,-4.4 0,-4.4C3,-4.4 6,-3.5 10.8,0C6,3.5 3,4.4 0,4.4C-3,4.4 -6,3.5 -10.8,0Z"
      />
      <use href="#atlas-orbit" transform="rotate(60)" />
      <use href="#atlas-orbit" transform="rotate(120)" />
    </svg>
  );
}
