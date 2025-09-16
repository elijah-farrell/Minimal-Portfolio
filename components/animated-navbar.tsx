"use client"

import React, { useState, useEffect } from "react"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { cn } from "@/lib/utils"

export function AnimatedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    // Check initial scroll position
    const scrollTop = window.scrollY
    setIsScrolled(scrollTop > 10)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
    >
      <div className="max-w-4xl mx-auto px-6 py-4">
        <nav className={cn(
          "relative border border-gray-200 dark:border-[#2a2a2a] bg-white/98 dark:bg-[#171717]/95 backdrop-blur-md shadow-lg transition-all duration-500 ease-out",
          isScrolled 
            ? "rounded-full px-8 py-4" 
            : "rounded-lg px-2 py-4"
        )}>
          <div className="flex items-center justify-end gap-4">
            {/* Profile Avatar */}
            <div className="w-11 h-11 rounded-full overflow-hidden">
              <img 
                src="/pfp.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover object-center"
                style={{ imageRendering: 'auto' }}
              />
            </div>

            {/* Navigation Items */}
            <div className="flex items-center">
              <DarkModeToggle />
              <a
                href="#about"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Projects
              </a>
              <a
                href="#blog"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
