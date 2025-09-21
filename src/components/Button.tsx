"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-ring disabled:opacity-60 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-600 text-white shadow-[var(--shadow-glow)] hover:bg-primary-700",
        secondary:
          "bg-secondary-500 text-white hover:bg-secondary-600 shadow-sm",
        ghost:
          "bg-transparent text-foreground border border-black/10 hover:bg-black/5",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-base",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonStyles({ variant, size }), className)} {...props} />
  )
);
Button.displayName = "Button";

export function ButtonLink({
  href,
  className,
  variant,
  size,
  children,
  ...props
}: VariantProps<typeof buttonStyles> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    >
      {children}
    </Link>
  );
}
