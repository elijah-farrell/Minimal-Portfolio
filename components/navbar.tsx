"use client";
import React, { useState, memo, useCallback, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Navbar, 
  NavBody, 
  NavItems, 
  MobileNav, 
  MobileNavHeader, 
  MobileNavMenu, 
  NavbarLogo, 
  MobileNavToggle 
} from "./framer-navbar";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { useStableNavbar } from "@/hooks/use-stable-navbar";

const PortfolioNavbar = memo(() => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navItems, handleNavClick } = useStableNavbar();
  const navbarRef = useRef<HTMLDivElement>(null);
  const scrollLockY = useRef(0);

  const handleMobileMenuToggle = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const handleMobileMenuClose = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;

    if (mobileMenuOpen) {
      scrollLockY.current = scrollY;
      root.classList.add("nav-open");
      body.classList.add("nav-open");
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      body.style.height = "100%";
      body.style.overflow = "hidden";
    } else {
      const previousTop = body.style.top;
      root.classList.remove("nav-open");
      body.classList.remove("nav-open");
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.height = "";
      body.style.overflow = "";
      const restored = previousTop ? parseInt(previousTop, 10) * -1 : scrollLockY.current;
      if (!Number.isNaN(restored)) {
        window.scrollTo(0, restored);
      }
    }

    return () => {
      root.classList.remove("nav-open");
      body.classList.remove("nav-open");
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.height = "";
      body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <Navbar ref={navbarRef} className="relative">
      {/* Desktop Navbar */}
      <NavBody>
        <div className="flex items-center w-full">
          <div className="flex items-center">
            <NavbarLogo />
          </div>
          <div className="flex items-center ml-auto gap-1">
            <DarkModeToggle />
            <NavItems 
              items={navItems}
              scrollToSection={handleNavClick}
            />
          </div>
        </div>
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav>
        <div className="flex items-center justify-between w-full relative z-[100]">
          <div className="ml-4 relative z-[100]">
            <NavbarLogo onCloseMobileMenu={() => setMobileMenuOpen(false)} />
          </div>
          <div className="flex items-center gap-1 mr-4 relative z-[100]">
            <MobileNavToggle 
              isOpen={mobileMenuOpen}
              onClick={handleMobileMenuToggle}
            />
          </div>
        </div>
        
        <MobileNavMenu 
          isOpen={mobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              onClick={() => {
                handleMobileMenuClose();
              }}
              className="text-2xl font-medium text-neutral-600 dark:text-neutral-300 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex justify-center">
            <DarkModeToggle />
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
});

PortfolioNavbar.displayName = 'PortfolioNavbar';

export { PortfolioNavbar };
