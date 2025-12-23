import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "@/components/theme-provider"
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
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {
                document.documentElement.classList.add('dark')
              }
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="font-geist">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <PortfolioNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
