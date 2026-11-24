import { ImageZoom } from "fumadocs-ui/components/image-zoom";

/**
 * A diagram exported from diagrams/atlas.excalidraw. `name` is the
 * Excalidraw frame name, which is also the export path under
 * public/diagrams. Shows `<name>.svg` in light mode and `<name>-dark.svg`
 * in dark mode (Fumadocs sets the `dark` class on <html>).
 */
export function Diagram({
  name,
  alt,
  width = 1920,
  height = 1080,
}: {
  name: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  const src = `/diagrams/${name}`;

  return (
    <>
      <span className="block dark:hidden">
        <ImageZoom src={`${src}.svg`} alt={alt} width={width} height={height} />
      </span>
      <span className="hidden dark:block">
        <ImageZoom
          src={`${src}-dark.svg`}
          alt={alt}
          width={width}
          height={height}
        />
      </span>
    </>
  );
}
