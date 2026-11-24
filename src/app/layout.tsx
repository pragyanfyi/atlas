import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import { defaultPlatform, platformScript } from "@/lib/platform";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-platform={defaultPlatform}
      className={inter.className}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        {/* Plain inline script (like next-themes): runs during HTML parse, before paint */}
        <script
          suppressHydrationWarning
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static pre-paint script
          dangerouslySetInnerHTML={{ __html: platformScript }}
        />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
