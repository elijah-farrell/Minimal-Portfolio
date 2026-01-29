"use client"

import * as React from "react"
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button"

type ThemeMode = "light" | "dark"

const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "dark"
  const stored = window.localStorage.getItem("theme")
  if (stored === "light" || stored === "dark") return stored
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

const applyTheme = (theme: ThemeMode, persist = true) => {
  const root = document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(theme)
  if (persist) {
    window.localStorage.setItem("theme", theme)
  }
}

const DarkModeToggle = React.memo(() => {
  const [mounted, setMounted] = React.useState(false)
  const [currentTheme, setCurrentTheme] = React.useState<ThemeMode>("dark")

  React.useEffect(() => {
    setMounted(true)
    if (typeof window === "undefined") return
    const root = document.documentElement
    const hasThemeClass = root.classList.contains("light") || root.classList.contains("dark")
    const theme = hasThemeClass
      ? (root.classList.contains("dark") ? "dark" : "light")
      : getInitialTheme()
    setCurrentTheme(theme)
    if (!hasThemeClass) {
      applyTheme(theme, false)
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      const stored = window.localStorage.getItem("theme")
      if (stored === "light" || stored === "dark") return
      const next = media.matches ? "dark" : "light"
      setCurrentTheme(next)
      applyTheme(next, false)
    }

    media.addEventListener?.("change", handleChange)
    return () => media.removeEventListener?.("change", handleChange)
  }, [])

  const handleThemeChange = React.useCallback(() => {
    const newTheme = currentTheme === "light" ? "dark" : "light"
    if (typeof document !== "undefined") {
      const root = document.documentElement
      root.classList.add("instant-theme")
      // Remove the instant-theme flag shortly after the switch
      window.setTimeout(() => {
        root.classList.remove("instant-theme")
      }, 200)
    }
    setCurrentTheme(newTheme)
    applyTheme(newTheme)
  }, [currentTheme])

  return (
    <ThemeToggleButton
      theme={mounted ? currentTheme : "dark"}
      onClick={handleThemeChange}
      className="bg-transparent hover:bg-gray-100 dark:hover:bg-neutral-800 border-none h-8 w-8 text-[#737373] hover:text-[#737373] dark:text-[#737373] rounded-lg p-1.5 transition-all duration-200 relative z-10"
    />
  )
})

DarkModeToggle.displayName = 'DarkModeToggle'

export { DarkModeToggle }
