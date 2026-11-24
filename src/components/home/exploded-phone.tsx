import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/**
 * The home hero: a phone taken apart into the layers React Native runs on,
 * cascading from the screen (top right) down to your code (bottom left).
 *
 * Pure CSS 3D (styles in src/styles/home.css), so it renders on the server.
 * All layers share one tilted plane and are offset inside it, so they never
 * cover each other.
 *
 * The screen follows the platform switch (<html data-platform>) through
 * CSS alone: `.xp-ios` and `.xp-android` nodes are shown or hidden.
 */

// k = steps away from the screen: 0 is top right, 4 is bottom left.
const layers = [
  { id: "code", title: "Your code", k: 4 },
  { id: "hermes", title: "Hermes", k: 3 },
  { id: "jsi", title: "JSI", k: 2 },
  { id: "fabric", title: "Fabric", k: 1 },
  { id: "host", title: "Host Views", k: 0 },
] as const;

const step = (k: number) => ({ "--k": k }) as CSSProperties;

export function ExplodedPhone({ className }: { className?: string }) {
  return (
    <div
      className={cn("xp-stage", className)}
      role="img"
      aria-label="A phone taken apart into five layers: host views, Fabric, JSI, Hermes and your code."
    >
      <div className="xp-plane">
        {layers.map((layer) => (
          <div
            key={layer.id}
            className="xp-layer"
            data-layer={layer.id}
            style={step(layer.k)}
          >
            <div className="xp-face" />
          </div>
        ))}
      </div>
      {/* Labels sit outside the 3D plane, in one column on the right */}
      {layers.map((layer) => (
        <span
          key={layer.id}
          className="xp-label"
          data-layer={layer.id}
          style={step(layer.k)}
          aria-hidden
        >
          <i className="xp-label-line" />
          {layer.title}
        </span>
      ))}
    </div>
  );
}
