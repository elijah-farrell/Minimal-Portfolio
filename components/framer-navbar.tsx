"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState, useEffect, useLayoutEffect, memo, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Home } from "lucide-react";
import { DarkModeToggle } from "@/components/dark-mode-toggle";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
  scrollProgress?: number;
  animationsEnabled?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
    isDropdown?: boolean;
    sections?: Array<{ name: string; sectionId: string }>;
    icon?: React.ReactNode;
  }[];
  className?: string;
  onItemClick?: () => void;
  scrollToSection?: (sectionId: string) => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
  animationsEnabled?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = React.memo(({ children, className, ref: externalRef }: NavbarProps) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const ref = (externalRef as React.RefObject<HTMLDivElement>) || internalRef;
  const { scrollY } = useScroll();
  
  // Initialize with SSR-safe default - always start transparent
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Scroll range for gradual animation (0px to 100px)
  const SCROLL_START = 0;
  const SCROLL_END = 100;

  // Handle mounting state for SSR
  useEffect(() => {
    setIsMounted(true);
    
    // Check if screen is mobile (768px or less)
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use useLayoutEffect to set initial state synchronously before paint
  useLayoutEffect(() => {
    if (!isInitialized && isMounted) {
      setIsInitialized(true);
      
      // Calculate initial scroll progress
      const initialScrollY = window.scrollY;
      const initialProgress = Math.min(Math.max((initialScrollY - SCROLL_START) / (SCROLL_END - SCROLL_START), 0), 1);
      setScrollProgress(initialProgress);
      
      // If we're scrolled down, enable animations immediately
      if (initialProgress > 0) {
        setAnimationsEnabled(true);
      }
      
      // Clear any stored scroll state on page load
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('navbar-scroll-state');
      }
    }
  }, [isInitialized, isMounted]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Only handle scroll events after component is mounted
    if (!isMounted) return;
    
    // Calculate scroll progress (0 to 1) based on scroll position
    const progress = Math.min(Math.max((latest - SCROLL_START) / (SCROLL_END - SCROLL_START), 0), 1);
    setScrollProgress(progress);
    
    // Enable animations after first scroll interaction
    if (!animationsEnabled) {
      setAnimationsEnabled(true);
    }
  });

  // Convert progress to visible state for backward compatibility
  const visible = scrollProgress > 0;

  // Calculate initial top position - no push down on mobile (768px and below)
  const initialTop = (scrollProgress > 0 && !isMobile) ? `${0.5 * scrollProgress}rem` : "0rem";

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 z-[60] w-full px-0 bg-transparent", className)}
      style={{ position: 'fixed', visibility: 'visible' }}
      initial={{
        top: initialTop,
      }}
      animate={{
        // Push down from top gradually based on scroll progress
        // Disabled on mobile (768px and below)
        top: (!isMobile) ? `${0.5 * scrollProgress}rem` : "0rem",
      }}
      transition={{
        duration: animationsEnabled && isInitialized ? 0.3 : 0,
        ease: "easeOut",
      }}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean; scrollProgress?: number; animationsEnabled?: boolean }>,
              { 
                visible: isMounted ? visible : false, // Always start transparent during SSR
                scrollProgress: isMounted ? scrollProgress : 0,
                animationsEnabled: isMounted ? animationsEnabled : false 
              },
            )
          : child,
      )}
    </motion.div>
  );
});

Navbar.displayName = 'Navbar';

export const NavBody = React.memo(({ children, className, visible, scrollProgress = 0, animationsEnabled = false }: NavBodyProps) => {
  const [isInitialized, setIsInitialized] = useState(false);
  
  useLayoutEffect(() => {
    setIsInitialized(true);
  }, []);

  // Calculate gradual values based on scroll progress
  const blurAmount = scrollProgress * 8; // 0 to 8px blur
  const leftMargin = 3 + (scrollProgress * 2); // 3% to 5%
  const rightMargin = 3 + (scrollProgress * 2); // 3% to 5%
  const shadowOpacity = scrollProgress * 0.15;
  const shadowOpacity2 = scrollProgress * 0.1;
  const paddingAmount = scrollProgress * 0.5; // 0 to 0.5rem

  // Calculate the exact initial state to prevent any animation
  const initialLeft = `${leftMargin}%`;
  const initialRight = `${rightMargin}%`;
  const initialPaddingLeft = `${paddingAmount}rem`;
  const initialPaddingRight = `${paddingAmount}rem`;
  const initialBackdropFilter = scrollProgress > 0 ? `blur(${blurAmount}px)` : "none";
  const initialBoxShadow = scrollProgress > 0
    ? `0 4px 12px rgba(0, 0, 0, ${shadowOpacity}), 0 2px 4px rgba(0, 0, 0, ${shadowOpacity2})`
    : "none";

  return (
    <div className="relative z-10 mx-auto hidden md:flex w-full max-w-4xl px-12 py-2">
      {/* Background container constrained to inner content area */}
      <motion.div
        initial={{
          backdropFilter: initialBackdropFilter,
          boxShadow: initialBoxShadow,
          left: initialLeft,
          right: initialRight,
        }}
        animate={{
          backdropFilter: scrollProgress > 0 ? `blur(${blurAmount}px)` : "none",
          boxShadow: scrollProgress > 0
            ? `0 4px 12px rgba(0, 0, 0, ${shadowOpacity}), 0 2px 4px rgba(0, 0, 0, ${shadowOpacity2})`
            : "none",
          // Add responsive width animation - slide inward gradually based on scroll
          left: `${leftMargin}%`,
          right: `${rightMargin}%`,
        }}
        transition={{
          duration: animationsEnabled && isInitialized ? 0.3 : 0,
          ease: "easeOut",
        }}
        className={cn(
          "absolute top-0 bottom-0 rounded-full overflow-hidden dark:hidden",
          scrollProgress > 0 ? "border border-white/30" : "",
        )}
        style={{
          ...(scrollProgress > 0 ? {
            backgroundColor: `rgba(255, 255, 255, ${scrollProgress * 0.95})`,
          } : {
            backgroundColor: "transparent",
          }),
        }}
      />
      <motion.div
        initial={{
          backdropFilter: initialBackdropFilter,
          boxShadow: initialBoxShadow,
          left: initialLeft,
          right: initialRight,
        }}
        animate={{
          backdropFilter: scrollProgress > 0 ? `blur(${blurAmount}px)` : "none",
          boxShadow: scrollProgress > 0
            ? `0 4px 12px rgba(0, 0, 0, ${shadowOpacity}), 0 2px 4px rgba(0, 0, 0, ${shadowOpacity2})`
            : "none",
          left: `${leftMargin}%`,
          right: `${rightMargin}%`,
        }}
        transition={{
          duration: animationsEnabled && isInitialized ? 0.3 : 0,
          ease: "easeOut",
        }}
        className="absolute top-0 bottom-0 rounded-full overflow-hidden hidden dark:block"
        style={{
          ...(scrollProgress > 0 ? {
            backgroundColor: `rgba(23, 23, 23, ${scrollProgress * 0.9})`,
            border: `1px solid rgba(42, 42, 42, ${scrollProgress * 0.2})`,
          } : {
            backgroundColor: "transparent",
            border: "none",
          }),
        }}
      />
      {/* Content container with original layout - always visible */}
      <motion.div 
        className={cn(
          "relative z-10 flex w-full flex-row items-center justify-between",
          className,
        )}
        initial={{
          paddingLeft: `${scrollProgress * 0.5}rem`,
          paddingRight: `${scrollProgress * 0.5}rem`,
        }}
        animate={{
          // Move nav items inward slightly when navbar background is visible
          paddingLeft: `${scrollProgress * 0.5}rem`,
          paddingRight: `${scrollProgress * 0.5}rem`,
        }}
        transition={{
          duration: animationsEnabled && isInitialized ? 0.15 : 0,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
});

NavBody.displayName = 'NavBody';

export const NavItems = React.memo(({ items, className, onItemClick, scrollToSection }: NavItemsProps) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(true); // Start as true to prevent hydration issues
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastHoveredIndexRef = useRef<number | null>(null);

  const handleMouseEnter = (index: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // Only animate if we're transitioning from one button to another
    const isTransitioning = hoveredIndex !== null && hoveredIndex !== index;
    setShouldAnimate(isTransitioning);
    
    if (isTransitioning) {
      lastHoveredIndexRef.current = hoveredIndex;
    }
    
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      lastHoveredIndexRef.current = null;
      setShouldAnimate(false);
    }, 150);
  };

  // Simple mount effect
  useEffect(() => {
    setMounted(true);
    
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Force re-render when hoveredIndex changes to update hover position
  useEffect(() => {
    // This will trigger a re-render to update the hover background position
  }, [hoveredIndex]);

  // Always render the navbar items to prevent hydration issues
  // if (!mounted) {
  //   return (
  //     <div className={cn(
  //       "flex flex-row items-center text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 relative h-10 nav-container group opacity-0",
  //       className,
  //     )}>
  //       {/* Placeholder content */}
  //       {items.map((_, idx) => (
  //         <div key={idx} className="h-full px-0" />
  //       ))}
  //     </div>
  //   );
  // }

  // Store the last valid position to prevent sliding back on unhover
  const lastPositionRef = useRef<{left: number, width: number} | null>(null);

  // Calculate hover background position and size based on actual item dimensions
  const getHoverStyle = () => {
    if (hoveredIndex === null || !itemRefs.current[hoveredIndex]) {
      // When no item is hovered, just fade out at the current position
      const lastPosition = lastPositionRef.current;
      if (lastPosition) {
        return {
          opacity: 0,
          width: `${lastPosition.width}px`,
          left: `${lastPosition.left}px`,
          transform: 'translateX(0)',
        };
      }
      return {
        opacity: 0,
        width: 0,
        left: 0,
        transform: 'translateX(0)',
      };
    }

    const hoveredItem = itemRefs.current[hoveredIndex];
    const container = containerRef.current;
    
    if (!container) {
      return {
        opacity: 0,
        width: 0,
        left: 0,
        transform: 'translateX(0)',
      };
    }

    const containerRect = container.getBoundingClientRect();
    const itemRect = hoveredItem.getBoundingClientRect();
    
    const left = itemRect.left - containerRect.left;
    const width = itemRect.width;

    // Store the current position for unhover fade-out
    lastPositionRef.current = { left, width };

    return {
      opacity: 1,
      width: `${width}px`,
      left: `${left}px`,
      transform: 'translateX(0)',
    };
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-row items-center text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 relative h-8 nav-container group",
        className,
      )}
      onMouseLeave={handleMouseLeave}
    >
      {/* React state-controlled sliding background */}
      <div 
        className="absolute bg-gray-100 dark:bg-neutral-800 rounded-lg transition-all h-full top-0" 
        style={{
          ...getHoverStyle(),
          transitionDuration: shouldAnimate ? '200ms' : '0ms',
          transitionTimingFunction: 'ease-out',
        }}
      />
      
      {items.map((item, idx) => (
        <div 
          key={`nav-item-${idx}`} 
          ref={(el) => { itemRefs.current[idx] = el; }}
          className="relative flex justify-center items-center h-full group/nav-item px-0"
          style={{
            '--item-index': idx,
          } as React.CSSProperties}
          onMouseEnter={() => handleMouseEnter(idx)}
          data-nav-item={idx}
        >
          {item.isDropdown ? (
            <div className="relative">
              <div className="flex items-center">
                  <Link 
                    href={item.link}
                    className="relative px-3 py-2 transition-all duration-300 ease-in-out flex items-center rounded-lg z-10 text-neutral-600 dark:text-neutral-300"
                    onMouseEnter={() => handleMouseEnter(idx)}
                  >
                  {item.icon && <span className="relative z-20 mr-2">{item.icon}</span>}
                  <span className="relative z-20">{item.name}</span>
                </Link>
                <button 
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                  className="px-2 py-2 transition-all duration-200 ease-in-out rounded-md text-neutral-600 dark:text-neutral-300"
                  onMouseEnter={() => handleMouseEnter(idx)}
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === idx ? 'rotate-180' : ''
                  }`} />
                </button>
              </div>
              
              {/* Dropdown */}
              <AnimatePresence>
                {openDropdown === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-neutral-950 rounded-lg border border-[#f5f5f5] dark:border-neutral-700 py-2 z-[9999]"
                  >
                    {item.sections?.map((section, sectionIdx) => (
                      <button
                        key={sectionIdx}
                        onClick={() => {
                          if (scrollToSection) {
                            scrollToSection(section.sectionId);
                          }
                          setOpenDropdown(null);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm transition-colors duration-150 text-neutral-600 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-800"
                      >
                        {section.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              href={item.link}
              className="relative px-3 py-2 transition-all duration-300 ease-in-out flex items-center rounded-lg z-10 text-neutral-600 dark:text-neutral-300"
              onMouseEnter={() => handleMouseEnter(idx)}
            >
              {item.icon && <span className="relative z-20 mr-2">{item.icon}</span>}
              <span className="relative z-20">{item.name}</span>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
});

NavItems.displayName = 'NavItems';

export const MobileNav = React.memo(({ children, className }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "relative z-10 mx-auto flex w-full max-w-4xl flex-row items-center px-4 py-2 md:hidden bg-background border-b border-border",
        className,
      )}
    >
      {children}
    </div>
  );
});

MobileNav.displayName = 'MobileNav';

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className={cn(
            "fixed inset-0 z-20 flex w-full flex-col bg-background text-foreground",
            className,
          )}
        >
          {/* Links section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              duration: 0.2,
              delay: 0.1,
              ease: "easeOut"
            }}
            className="flex flex-col items-center justify-center gap-8 flex-1 pt-20 pb-8"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const NavbarLogo = memo(({ onCloseMobileMenu }: { onCloseMobileMenu?: () => void }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  
  const handleClick = useCallback(() => {
    setIsClicked(true);
    // Close mobile menu if it's open
    if (onCloseMobileMenu) {
      onCloseMobileMenu();
    }
    // Reset click state after animation
    setTimeout(() => setIsClicked(false), 300);
  }, [onCloseMobileMenu]);

  return (
    <div className="flex items-center justify-center">
      <Link 
        href="/"
        onClick={handleClick}
        className="relative hover:opacity-80 transition-opacity cursor-pointer focus:outline-none rounded px-1 py-1 group flex items-center justify-center"
        aria-label="Go to home page"
      >
        <div className={`relative w-11 h-11 rounded-full overflow-hidden transition-all duration-200 ${
          isClicked ? 'border-0' : 'border-2 border-[#f5f5f5] dark:border-[#1f1f1f] hover:border-gray-400 dark:hover:border-gray-500'
        }`}>
          <img 
            src="/pfp.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover object-center"
            style={{ 
              imageRendering: 'auto',
              objectPosition: 'center center'
            }}
            loading="eager"
            fetchPriority="high"
          />
          {/* Home Icon Overlay */}
          <div className={`absolute inset-0 rounded-full bg-white/50 dark:bg-black/50 flex items-center justify-center transition-opacity duration-200 ${
            isClicked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}>
            <Home className="w-5 h-5 text-black dark:text-white" />
          </div>
        </div>
      </Link>
    </div>
  );
});

NavbarLogo.displayName = 'NavbarLogo';

export const MobileNavToggle = memo(({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-lg transition-colors"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-5 h-5 flex flex-col justify-center items-center">
        <span className={`block w-4 h-0.5 bg-neutral-600 dark:bg-neutral-300 transition-all duration-300 ${
          isOpen ? 'rotate-45 translate-y-1.5' : ''
        }`} />
        <span className={`block w-4 h-0.5 bg-neutral-600 dark:bg-neutral-300 transition-all duration-300 mt-1 ${
          isOpen ? 'opacity-0' : ''
        }`} />
        <span className={`block w-4 h-0.5 bg-neutral-600 dark:bg-neutral-300 transition-all duration-300 mt-1 ${
          isOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`} />
      </div>
    </button>
  );
});

MobileNavToggle.displayName = 'MobileNavToggle';
