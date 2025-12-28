"use client"

import { useEffect, useRef, useState } from "react"

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
  const textRef = useRef<HTMLSpanElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hasTouch, setHasTouch] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchHandledRef = useRef(false)
  
  // Detect mobile and touch on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth < 1024)
      setHasTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  if (!logoUrl) return null
  
  const expandLogo = (element: HTMLDivElement) => {
    // Same as hover - simple expansion
    // Use requestAnimationFrame to ensure text is visible
    requestAnimationFrame(() => {
      if (textRef.current) {
        const textWidth = textRef.current.offsetWidth || textRef.current.scrollWidth || 50
        const totalWidth = 16 + 6 + textWidth + 16 // logo + gap + text + padding
        element.style.width = `${totalWidth}px`
      }
      element.style.paddingLeft = '0.5rem'
      element.style.paddingRight = '0.5rem'
    })
  }
  
  const collapseLogo = (element: HTMLDivElement) => {
    element.style.width = '1.75rem'
    element.style.paddingLeft = '0'
    element.style.paddingRight = '0'
  }
  
  const isExpanded = isHovered || isClicked
  
  // Handle clicks outside to collapse on mobile
  useEffect(() => {
    if (!isClicked) return
    
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      // Only handle on mobile
      if (!isMobile || !containerRef.current) return
      
      // Check if click is outside the container
      const target = event.target as Node
      if (containerRef.current && !containerRef.current.contains(target)) {
        // Use setTimeout to avoid conflicts with the click handler
        setTimeout(() => {
          if (containerRef.current && isClicked) {
            collapseLogo(containerRef.current)
            setIsClicked(false)
          }
        }, 10)
      }
    }
    
    // Add event listeners with delay to avoid immediate firing
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }, 200)
    
    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isClicked, isMobile])
  
  const toggleMobile = () => {
    if (!containerRef.current) return
    
    // If hover expanded it, collapse first and clear hover
    if (isHovered) {
      collapseLogo(containerRef.current)
      setIsHovered(false)
    }
    
    // Use functional update to get current state
    setIsClicked(prev => {
      if (prev) {
        // Currently clicked, so collapse
        collapseLogo(containerRef.current!)
        return false
      } else {
        // Not clicked, so expand
        expandLogo(containerRef.current!)
        return true
      }
    })
  }
  
  const handleClick = (e: React.MouseEvent) => {
    // Always stop propagation to prevent parent clicks
    e.stopPropagation()
    e.preventDefault()
    
    if (!isMobile) return
    
    // If touch was just handled, ignore click (prevent double-firing)
    if (touchHandledRef.current) {
      touchHandledRef.current = false
      return
    }
    
    toggleMobile()
  }
  
  const handleTouchStart = (e: React.TouchEvent) => {
    // Always stop propagation to prevent parent clicks
    e.stopPropagation()
    e.preventDefault()
    
    if (!isMobile) return
    
    touchHandledRef.current = true
    toggleMobile()
    
    // Reset after delay to allow click event to be ignored
    setTimeout(() => {
      touchHandledRef.current = false
    }, 300)
  }
  
  return (
    <div 
      ref={containerRef}
      className="group relative h-7 rounded-full bg-gray-100 dark:bg-[#2a2a2a] transition-all duration-500 ease-in-out border border-transparent overflow-hidden hover:bg-gray-200 dark:hover:bg-[#3a3a3a] md:hover:bg-gray-200 md:dark:hover:bg-[#3a3a3a] dark:hover:border-gray-600 md:hover:border-gray-600 cursor-pointer md:cursor-default select-none"
      style={{
        width: isExpanded ? undefined : '1.75rem', // w-7 = 28px
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
      }}
      onMouseEnter={(e) => {
        // Stop propagation to prevent parent hover effects
        e.stopPropagation()
        
        // Completely disable hover on mobile or touch devices
        if (isMobile || hasTouch) return
        
        if (containerRef.current) {
          setIsHovered(true)
          expandLogo(containerRef.current)
        }
      }}
      onMouseLeave={(e) => {
        // Stop propagation to prevent parent hover effects
        e.stopPropagation()
        
        // Completely disable hover on mobile or touch devices
        if (isMobile || hasTouch) return
        
        if (containerRef.current) {
          setIsHovered(false)
          collapseLogo(containerRef.current)
        }
      }}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onMouseDown={(e) => {
        // Always stop propagation to prevent parent clicks
        e.stopPropagation()
        e.preventDefault()
        
        if (isMobile && e.button === 0) {
          // Only use if touch/click didn't fire
          if (!touchHandledRef.current) {
            toggleMobile()
          }
        }
      }}
    >
      <div className="absolute top-1/2 w-4 h-4 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ left: '13.5px' }}>
        <img 
          src={logoUrl} 
          alt={tech}
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
      <div 
        className={`absolute top-1/2 -translate-y-1/2 flex items-center transition-opacity duration-300 ${isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
        style={{ left: '28px', pointerEvents: 'none' }}
      >
        <span ref={textRef} className="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
          {tech}
        </span>
      </div>
    </div>
  )
}

