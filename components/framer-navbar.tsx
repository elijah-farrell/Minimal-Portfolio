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
  const [visible, setVisible] = useState<boolean>(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle mounting state for SSR
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use useLayoutEffect to set initial state synchronously before paint
  useLayoutEffect(() => {
    if (!isInitialized && isMounted) {
      setIsInitialized(true);
      
      // Always start with transparent navbar on new page load
      // Only show navbar if we're actually scrolled down on the current page
      const initialScrollY = window.scrollY;
      const shouldBeVisible = initialScrollY > 10;
      setVisible(shouldBeVisible);
      
      // If we're scrolled down, enable animations immediately
      if (shouldBeVisible) {
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
    
    if (latest > 10) {
      setVisible(true); // Visible (with background) when scrolled
    } else {
      setVisible(false); // Transparent at top
    }
    // Enable animations after first scroll interaction
    if (!animationsEnabled) {
      setAnimationsEnabled(true);
    }
  });

  // Calculate initial top position
  const initialTop = visible ? "0.5rem" : "0rem";

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 z-[60] w-full px-0 bg-transparent", className)}
      style={{ position: 'fixed', visibility: 'visible' }}
      initial={{
        top: initialTop,
      }}
      animate={{
        // Push down from top when visible (scrolled) - creates spacing from screen top
        top: visible ? "0.5rem" : "0rem",
      }}
      transition={{
        duration: animationsEnabled && isInitialized ? 0.15 : 0,
        ease: "easeOut",
      }}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean; animationsEnabled?: boolean }>,
              { 
                visible: isMounted ? visible : false, // Always start transparent during SSR
                animationsEnabled: isMounted ? animationsEnabled : false 
              },
            )
          : child,
      )}
    </motion.div>
  );
});

Navbar.displayName = 'Navbar';

export const NavBody = React.memo(({ children, className, visible, animationsEnabled = false }: NavBodyProps) => {
  const [isInitialized, setIsInitialized] = useState(false);
  
  useLayoutEffect(() => {
    setIsInitialized(true);
  }, []);

  // Calculate the exact initial state to prevent any animation
  const initialLeft = visible ? "5%" : "3%";
  const initialRight = visible ? "5%" : "3%";
  const initialPaddingLeft = visible ? "0.5rem" : "0rem";
  const initialPaddingRight = visible ? "0.5rem" : "0rem";
  const initialBackdropFilter = visible ? "blur(8px)" : "none";
  const initialBoxShadow = visible 
    ? "0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)"
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
          backdropFilter: visible ? "blur(8px)" : "none",
          boxShadow: visible
            ? "0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)"
            : "none",
          // Add responsive width animation - slide inward on larger screens
          left: visible ? "5%" : "3%",
          right: visible ? "5%" : "3%",
        }}
        transition={{
          duration: animationsEnabled && isInitialized ? 0.15 : 0,
          ease: "easeOut",
        }}
        className={cn(
          "absolute top-0 bottom-0 rounded-full overflow-hidden",
          visible ? "bg-white/95 dark:bg-[#171717]/90 border border-white/30 dark:border-[#2a2a2a]/20" : "bg-transparent",
        )}
      />
      {/* Content container with original layout - always visible */}
      <motion.div 
        className={cn(
          "relative z-10 flex w-full flex-row items-center justify-between",
          className,
        )}
        initial={{
          paddingLeft: initialPaddingLeft,
          paddingRight: initialPaddingRight,
        }}
        animate={{
          // Move nav items inward slightly when navbar background is visible
          paddingLeft: visible ? "0.5rem" : "0rem",
          paddingRight: visible ? "0.5rem" : "0rem",
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

export const MobileNav = React.memo(({ children, className, visible, animationsEnabled = false }: MobileNavProps) => {
  const [isInitialized, setIsInitialized] = useState(false);
  
  useLayoutEffect(() => {
    setIsInitialized(true);
  }, []);

  // Calculate the exact initial state to prevent any animation
  const initialBackdropFilter = visible ? "blur(8px)" : "none";
  const initialBoxShadow = visible
    ? "0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)"
    : "none";

  return (
    <motion.div
      initial={{
        backdropFilter: initialBackdropFilter,
        boxShadow: initialBoxShadow,
      }}
      animate={{
        backdropFilter: visible ? "blur(8px)" : "none",
        boxShadow: visible
          ? "0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)"
          : "none",
      }}
      transition={{
        duration: animationsEnabled && isInitialized ? 0.1 : 0,
        ease: "easeOut",
      }}
       className={cn(
         "relative z-10 mx-auto flex w-full max-w-4xl flex-row items-center px-4 py-2 md:hidden",
         visible ? "bg-white/95 dark:bg-[#171717]/90 border-b border-white/30 dark:border-[#2a2a2a]/20" : "bg-transparent",
         className,
       )}
    >
      {children}
    </motion.div>
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
            height: 0,
            opacity: 0
          }}
          animate={{ 
            height: "100vh",
            opacity: 1
          }}
          exit={{ 
            height: 0,
            opacity: 0
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            height: { duration: 0.3 },
            opacity: { duration: 0.2 }
          }}
          className={cn(
            "absolute inset-x-0 top-0 z-20 flex w-full flex-col bg-white/98 dark:bg-[#171717]/95 backdrop-blur-sm",
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
