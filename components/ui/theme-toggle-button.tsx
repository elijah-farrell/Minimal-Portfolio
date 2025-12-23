'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export interface ThemeToggleButtonProps {
  theme?: 'light' | 'dark';
  showLabel?: boolean;
  className?: string;
  onClick?: () => void;
}

export const ThemeToggleButton = ({
  theme = 'light',
  showLabel = false,
  className,
  onClick,
}: ThemeToggleButtonProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show both icons and let CSS handle visibility based on theme to prevent flash
  if (!mounted) {
    return (
      <button
        className={cn(
          'theme-toggle-button relative overflow-hidden flex items-center justify-center opacity-50 cursor-not-allowed',
          showLabel && 'gap-2',
          className
        )}
        disabled
        aria-label="Toggle theme"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden" />
        <Moon className="h-[1.2rem] w-[1.2rem] hidden dark:block" />
        {showLabel && (
          <>
            <span className="text-sm dark:hidden">Light</span>
            <span className="text-sm hidden dark:block">Dark</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        'theme-toggle-button relative overflow-hidden flex items-center justify-center opacity-100 cursor-pointer hover:opacity-80',
        showLabel && 'gap-2',
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <span className="relative flex items-center justify-center">
        <Sun
          className={cn(
            "h-[1.2rem] w-[1.2rem] transition-transform duration-300 origin-center",
            theme === "light"
              ? "rotate-0 scale-100"
              : "-rotate-90 scale-0"
          )}
        />
        <Moon
          className={cn(
            "h-[1.2rem] w-[1.2rem] absolute transition-transform duration-300 origin-center",
            theme === "dark"
              ? "rotate-0 scale-100"
              : "rotate-90 scale-0"
          )}
        />
      </span>
      {showLabel && (
        <span className="text-sm">
          {theme === 'light' ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
};
