"use client";
import React, { useState, memo, useCallback } from "react";
import { motion } from "framer-motion";
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

  const handleMobileMenuToggle = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const handleMobileMenuClose = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <Navbar>
      {/* Desktop Navbar */}
      <NavBody>
        <div className="flex items-center justify-between w-full">
          <div className="ml-0">
            <NavbarLogo />
          </div>
          <div className="flex items-center gap-1 mr-0">
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
            <DarkModeToggle />
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
            <a
              key={idx}
              href={item.link}
              onClick={() => {
                handleMobileMenuClose();
                handleNavClick(item.link);
              }}
              className="text-2xl font-medium text-neutral-600 dark:text-neutral-300 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
});

PortfolioNavbar.displayName = 'PortfolioNavbar';

export { PortfolioNavbar };
