"use client"
import { useEffect, useRef, useState } from "react"
import { TextGenerateEffect } from "./text-generate-effect"
import { PillBadge } from "./pill-badge"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

interface TextWithPillBadgeProps {
  words: string
  className?: string
  filter?: boolean
  duration?: number
  staggerDelay?: number
  asHeading?: boolean
  showPillBadge?: boolean
}

export const TextWithPillBadge = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.1,
  asHeading = false,
  showPillBadge = true,
}: TextWithPillBadgeProps) => {
  const [isInView, setIsInView] = useState(false)
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null)
  const wordsArray = words.split(" ")
  
  // Calculate animation completion time
  const animationDuration = duration || 0.5
  const totalAnimationTime = (animationDuration * 1000) + (wordsArray.length * staggerDelay * 1000)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            // Clear any existing timer
            if (animationTimerRef.current) {
              clearTimeout(animationTimerRef.current)
            }
            // Set animation complete after the calculated time
            animationTimerRef.current = setTimeout(() => {
              setIsAnimationComplete(true)
            }, totalAnimationTime)
          } else {
            setIsInView(false)
            setIsAnimationComplete(false)
            // Clear timer when out of view
            if (animationTimerRef.current) {
              clearTimeout(animationTimerRef.current)
              animationTimerRef.current = null
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px 50px 0px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current)
      }
    }
  }, [totalAnimationTime])

  const shouldShowBadge = siteConfig.textWithPillBadge && showPillBadge && isInView && isAnimationComplete

  return (
    <div ref={containerRef} className={cn("inline-block relative", className)}>
      <div ref={textRef} className="inline-block relative z-10">
        <TextGenerateEffect 
          words={words} 
          asHeading={asHeading} 
          staggerDelay={staggerDelay}
          duration={duration}
          filter={filter}
          className={asHeading ? "mb-0" : ""}
        />
      </div>
      <div 
        className={cn(
          "absolute bg-[#f5f5f5] dark:bg-[#1f1f1f] border border-[#e5e5e5] dark:border-[#2a2a2a] rounded-md shadow-sm pointer-events-none transition-opacity duration-200",
          shouldShowBadge ? "opacity-100" : "opacity-0"
        )}
        style={{
          top: '-4px',
          left: '-6px',
          right: '-6px',
          bottom: '-4px',
        }}
      >
        {/* Top-left dot */}
        <span className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-[#a0a0a0] dark:bg-[#5a5a5a]" />
        {/* Top-right dot */}
        <span className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-[#a0a0a0] dark:bg-[#5a5a5a]" />
        {/* Bottom-left dot */}
        <span className="absolute bottom-0.5 left-0.5 w-1 h-1 rounded-full bg-[#a0a0a0] dark:bg-[#5a5a5a]" />
        {/* Bottom-right dot */}
        <span className="absolute bottom-0.5 right-0.5 w-1 h-1 rounded-full bg-[#a0a0a0] dark:bg-[#5a5a5a]" />
      </div>
    </div>
  )
}

