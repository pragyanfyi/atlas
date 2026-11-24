import type { CSSProperties, ReactNode } from "react";
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

type LayerId = (typeof layers)[number]["id"];

const faces: Partial<Record<LayerId, () => ReactNode>> = {
  host: HostFace,
};

const step = (k: number) => ({ "--k": k }) as CSSProperties;

export function ExplodedPhone({ className }: { className?: string }) {
  return (
    <div
      className={cn("xp-stage", className)}
      role="img"
      aria-label="A phone taken apart into five layers: host views, Fabric, JSI, Hermes and your code."
    >
      <div className="xp-plane">
        {layers.map((layer) => {
          const Face = faces[layer.id];
          return (
            <div
              key={layer.id}
              className="xp-layer"
              data-layer={layer.id}
              style={step(layer.k)}
            >
              <div className="xp-face">{Face ? <Face /> : null}</div>
            </div>
          );
        })}
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

const rows = [0, 1, 2, 3];

function Heart() {
  return (
    <svg viewBox="0 0 24 24" className="xp-heart" aria-hidden>
      <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.5 3 4.5 6.9 4.5c2.2 0 3.7 1.2 5.1 3 1.4-1.8 2.9-3 5.1-3 3.9 0 6 4 4.5 7.3C19.5 16.4 12 21 12 21Z" />
    </svg>
  );
}

function HostFace() {
  return (
    <div className="xp-screen">
      <div className="xp-status">
        <span>9:41</span>
        <span className="xp-status-icons">
          <i />
          <i />
          <i />
        </span>
      </div>
      <i className="xp-island xp-ios" />
      <i className="xp-punch xp-android" />

      <div className="xp-title xp-ios">Inbox</div>
      <div className="xp-appbar xp-android">
        <i className="xp-appbar-icon" />
        <span>Inbox</span>
      </div>

      <div className="xp-rows">
        {rows.map((r) => (
          <div key={r} className="xp-row">
            <i className="xp-avatar" />
            <span className="xp-lines">
              <i style={{ width: `${70 - r * 8}%` }} />
              <i style={{ width: `${88 - r * 6}%` }} />
            </span>
          </div>
        ))}
      </div>

      <div className="xp-btn">
        <span className="xp-btn-like">
          <Heart />
          Like
        </span>
        <span className="xp-btn-liked">
          <Heart />
          Liked
        </span>
      </div>
      <i className="xp-ripple" />
      <i className="xp-finger" />

      <i className="xp-home xp-ios" />
      <i className="xp-gesture xp-android" />
    </div>
  );
}
