"use client"

import { useEffect, useRef, useState, useCallback } from "react"

// Tech logo mapping
const techLogos: Record<string, string> = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  Azure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  Sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  jQuery: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
}

// Tech logo component
export const TechLogo = ({ tech }: { tech: string }) => {
  const logoUrl = techLogos[tech]
  const containerRef = useRef<HTMLDivElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hasTouch, setHasTouch] = useState(false)
  const expandedByClickRef = useRef(false)
  const touchStartTimeRef = useRef(0)
  
  // Detect mobile and touch capabilities
  useEffect(() => {
    const checkDevice = () => {
      if (typeof window === 'undefined') return
      setIsMobile(window.innerWidth < 1024)
      setHasTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])
  
  if (!logoUrl) return null

  const isOpen = isExpanded || isHovered
  
  // Handle mobile/touch click
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.stopPropagation()
    
    // Only handle on mobile/touch devices
    if (!isMobile && !hasTouch) return
    
    // Prevent default to avoid text selection
    e.preventDefault()
    
    // Track touch start time to distinguish from click
    touchStartTimeRef.current = Date.now()
    
    // Toggle expanded state
    setIsExpanded(prev => {
      const newState = !prev
      expandedByClickRef.current = newState
      return newState
    })
  }, [isMobile, hasTouch])

  // Handle desktop hover
  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    if (isMobile || hasTouch) return
    setIsHovered(true)
  }, [isMobile, hasTouch])

  const handleMouseLeave = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    if (isMobile || hasTouch) return
    setIsHovered(false)
  }, [isMobile, hasTouch])
  
  // Handle click (fallback for devices that fire both touch and click)
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    
    // Only handle on mobile/touch devices
    if (!isMobile && !hasTouch) return
    
    // If this click happened very soon after touch, ignore it (already handled)
    const timeSinceTouch = Date.now() - touchStartTimeRef.current
    if (timeSinceTouch < 300) return
    
    // Toggle expanded state
    setIsExpanded(prev => {
      const newState = !prev
      expandedByClickRef.current = newState
      return newState
    })
  }, [isMobile, hasTouch])
  
  // Handle clicks outside to collapse on mobile
  useEffect(() => {
    if (!isExpanded || !expandedByClickRef.current) return
    
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current) return
      
      const target = event.target as Node
      if (!containerRef.current.contains(target)) {
        setIsExpanded(false)
        expandedByClickRef.current = false
      }
    }
    
    // Small delay to avoid immediate firing from the same click that expanded it
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside, true)
      document.addEventListener('touchstart', handleClickOutside, true)
    }, 100)
    
    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('mousedown', handleClickOutside, true)
      document.removeEventListener('touchstart', handleClickOutside, true)
    }
  }, [isExpanded])
  
  // Reset state when switching between mobile and desktop modes
  const prevIsMobileRef = useRef(isMobile)
  const prevHasTouchRef = useRef(hasTouch)
  
  useEffect(() => {
    // Only reset if device type actually changed
    const deviceChanged = 
      prevIsMobileRef.current !== isMobile || 
      prevHasTouchRef.current !== hasTouch
    
    if (deviceChanged && isExpanded) {
      setIsExpanded(false)
      expandedByClickRef.current = false
    }
    
    if (deviceChanged && isHovered) {
      setIsHovered(false)
    }
    
    prevIsMobileRef.current = isMobile
    prevHasTouchRef.current = hasTouch
  }, [isMobile, hasTouch, isExpanded, isHovered])
  
  return (
    <div 
      ref={containerRef}
      className={`group relative inline-flex h-8 min-w-8 items-center rounded-full bg-gray-100 dark:bg-[#2a2a2a] border border-transparent overflow-hidden select-none transition-[max-width,background-color,border-color] ease-in-out cursor-pointer lg:cursor-default px-2 justify-start ${isOpen ? "max-w-[240px] bg-gray-200 dark:bg-[#3a3a3a] dark:border-gray-600 duration-[1500ms]" : "max-w-8 duration-[900ms]"}`}
      style={{
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
      onClick={handleClick}
    >
      <img 
        src={logoUrl} 
        alt={tech}
        className="h-4 w-4 min-h-4 min-w-4 flex-none object-contain pointer-events-none"
        draggable={false}
      />
      <span 
        className="inline-block min-w-0 max-w-[200px] pl-2 text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
      >
        {tech}
      </span>
    </div>
  )
}

