"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title?: string;
    image?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // Extract animation duration from className immediately
  const animationDuration = React.useMemo(() => {
    if (className) {
      const match = className.match(/\[--animation-duration:([^\]]+)\]/);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  }, [className]);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current && !start) {
      // Duplicate items for seamless loop
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      setStart(true);
    }
  }, [start]);

  // Apply duration directly to ul element (where animate-scroll is applied)
  useEffect(() => {
    if (scrollerRef.current && animationDuration) {
      scrollerRef.current.style.setProperty("--animation-duration", animationDuration);
    }
  }, [animationDuration]);
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        onMouseEnter={() => {
          if (pauseOnHover) {
            setIsPaused(true);
          }
        }}
        onMouseLeave={() => {
          if (pauseOnHover) {
            setIsPaused(false);
          }
        }}
        style={{
          ...(start
            ? {
                animation: `scroll ${animationDuration || "40s"} ${
                  direction === "left" ? "forwards" : "reverse"
                } linear infinite`,
                animationPlayState: isPaused ? "paused" : "running",
              }
            : {}),
        } as React.CSSProperties}
      >
        {items.map((item, idx) => (
          <li
            className="w-[208px] max-w-full relative rounded-2xl border border-[#f5f5f5] dark:border-[#1f1f1f] bg-[#f5f5f5] dark:bg-[#0A0A0A] px-6 py-5 md:w-[240px] opacity-0 animate-fade-in flex flex-col shadow-sm hover:shadow-md hover:border-white dark:hover:border-[#171717] transition-all duration-300"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-50), var(--slate-100) / 50%)",
              animationDelay: `${idx * 0.1}s`,
            }}
            key={item.name}
          >
            <blockquote className="flex flex-col h-full">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] text-[#737373] dark:text-[#737373] font-normal flex-1">
                {item.quote}
              </span>
              <div className="relative z-20 mt-4 pt-4 flex flex-row items-center gap-3 flex-shrink-0">
                <div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-[#2a2a2a]"></div>
                  )}
                </div>
                <span className="text-sm leading-[1.6] text-gray-900 dark:text-white font-normal">
                  {item.name}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
