"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button"

const DarkModeToggle = React.memo(() => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = React.useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light"
    if (typeof document !== "undefined") {
      const root = document.documentElement
      root.classList.add("instant-theme")
      // Remove the instant-theme flag shortly after the switch
      window.setTimeout(() => {
        root.classList.remove("instant-theme")
      }, 200)
    }
    setTheme(newTheme)
  }, [theme, setTheme])

  // Use resolvedTheme to get the actual theme (handles 'system' theme)
  const currentTheme = mounted && resolvedTheme ? (resolvedTheme as "light" | "dark") : "dark"

  return (
    <ThemeToggleButton
      theme={currentTheme}
      onClick={handleThemeChange}
      variant="circle-blur"
      start="top-right"
      className="bg-transparent hover:bg-gray-100 dark:hover:bg-neutral-800 border-none h-10 text-zinc-600 hover:text-zinc-800 dark:text-neutral-300 rounded-lg px-3 py-2 transition-all duration-200 relative z-10"
    />
  )
})

DarkModeToggle.displayName = 'DarkModeToggle'

export { DarkModeToggle }
