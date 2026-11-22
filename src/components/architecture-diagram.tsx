/**
 * Layered React Native architecture diagram. Pure SVG, themed with
 * Fumadocs tokens. Motion lives in global.css (.arch-*) and is disabled
 * under prefers-reduced-motion.
 */
const X_LEFT = 190;
const X_RIGHT = 450;

function Layer({
  x,
  y,
  w,
  h,
  title,
  sub,
  accent,
  delay,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub: string;
  accent?: boolean;
  delay: number;
}) {
  return (
    <g className="arch-layer" style={{ animationDelay: `${delay}s` }}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={16}
        fill={accent ? "var(--color-fd-primary)" : "var(--color-fd-card)"}
        fillOpacity={accent ? 0.12 : 1}
        stroke={accent ? "var(--color-fd-primary)" : "var(--color-fd-border)"}
        strokeOpacity={accent ? 0.5 : 1}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 - 3}
        textAnchor="middle"
        fontSize={15}
        fontWeight={600}
        fill={accent ? "var(--color-fd-primary)" : "var(--color-fd-foreground)"}
      >
        {title}
      </text>
      <text
        x={x + w / 2}
        y={y + h / 2 + 16}
        textAnchor="middle"
        fontSize={12}
        fill="var(--color-fd-muted-foreground)"
      >
        {sub}
      </text>
    </g>
  );
}

function Flow({ x, y1, y2 }: { x: number; y1: number; y2: number }) {
  return (
    <line
      className="arch-flow"
      x1={x}
      y1={y1}
      x2={x}
      y2={y2}
      stroke="var(--color-fd-primary)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeDasharray="3 6"
    />
  );
}

export function ArchitectureDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 384"
      className={className}
      role="img"
      aria-label="React Native architecture: JavaScript talks through JSI to Fabric and TurboModules, which drive the native platform."
    >
      <Flow x={X_LEFT} y1={84} y2={116} />
      <Flow x={X_RIGHT} y1={84} y2={116} />
      <Flow x={X_LEFT} y1={164} y2={196} />
      <Flow x={X_RIGHT} y1={164} y2={196} />
      <Flow x={X_LEFT} y1={260} y2={300} />
      <Flow x={X_RIGHT} y1={260} y2={300} />

      <Layer
        x={60}
        y={20}
        w={520}
        h={64}
        title="JavaScript"
        sub="React · Hermes · your app"
        delay={0}
      />
      <Layer
        x={120}
        y={116}
        w={400}
        h={48}
        title="JSI"
        sub="Direct, synchronous bridge"
        accent
        delay={0.4}
      />
      <Layer
        x={60}
        y={196}
        w={250}
        h={64}
        title="Fabric"
        sub="Renderer"
        delay={0.8}
      />
      <Layer
        x={330}
        y={196}
        w={250}
        h={64}
        title="TurboModules"
        sub="Native APIs"
        delay={1.2}
      />
      <Layer
        x={60}
        y={300}
        w={520}
        h={64}
        title="Native"
        sub="UIKit · Android Views · platform APIs"
        delay={1.6}
      />
    </svg>
  );
}
