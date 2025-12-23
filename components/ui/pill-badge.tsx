import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const pillBadgeVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all relative",
  {
    variants: {
      variant: {
        default:
          "bg-white dark:bg-[#171717] text-[#737373] dark:text-[#737373] border border-[#f5f5f5] dark:border-[#1f1f1f] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.2)] rounded-full",
        subtle:
          "bg-gray-50 dark:bg-[#1a1a1a] text-[#737373] dark:text-[#737373] border border-gray-200 dark:border-[#2a2a2a] shadow-[inset_0_1px_1px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_1px_1px_rgba(0,0,0,0.2)] rounded-full",
        elevated:
          "bg-white dark:bg-[#171717] text-[#737373] dark:text-[#737373] border border-[#f5f5f5] dark:border-[#1f1f1f] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.3)] rounded-full",
        square:
          "bg-[#f5f5f5] dark:bg-[#1f1f1f] text-[#737373] dark:text-[#737373] border border-[#e5e5e5] dark:border-[#2a2a2a] rounded-md shadow-sm",
      },
      size: {
        sm: "px-2 py-0.5 text-xs leading-tight",
        default: "px-2.5 py-1 text-sm leading-tight",
        lg: "px-3 py-1.5 text-sm leading-tight",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface PillBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pillBadgeVariants> {
  asChild?: boolean
}

const PillBadge = React.forwardRef<HTMLSpanElement, PillBadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    const isSquare = variant === "square"
    
    return (
      <span
        ref={ref}
        className={cn(pillBadgeVariants({ variant, size }), className)}
        {...props}
      >
        {props.children}
        {isSquare && (
          <>
            {/* Top-left dot */}
            <span className="absolute top-1 left-1 w-1 h-1 rounded-full bg-[#a0a0a0] dark:bg-[#5a5a5a]" />
            {/* Top-right dot */}
            <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[#a0a0a0] dark:bg-[#5a5a5a]" />
            {/* Bottom-left dot */}
            <span className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-[#a0a0a0] dark:bg-[#5a5a5a]" />
            {/* Bottom-right dot */}
            <span className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-[#a0a0a0] dark:bg-[#5a5a5a]" />
          </>
        )}
      </span>
    )
  }
)
PillBadge.displayName = "PillBadge"

export { PillBadge, pillBadgeVariants }

