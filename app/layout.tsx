import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { PortfolioNavbar } from "@/components/navbar"
import "./globals.css"

export const metadata: Metadata = {
  title: "Minimal Portfolio Website Template",
  description: "Product designer and frontend engineer portfolio",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" }
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem("theme");
                  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  var theme = stored === "light" || stored === "dark"
                    ? stored
                    : (prefersDark ? "dark" : "light");

                  var root = document.documentElement;
                  root.classList.remove("light", "dark");
                  root.classList.add(theme);
                  var meta = document.querySelector('meta[name="theme-color"]');
                  if (!meta) {
                    meta = document.createElement("meta");
                    meta.name = "theme-color";
                    document.head.appendChild(meta);
                  }
                  meta.content = theme === "dark" ? "#171717" : "#ffffff";
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="font-geist">
        <PortfolioNavbar />
        {children}
      </body>
    </html>
  )
}
