import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

type ButtonVariant = "primary" | "secondary";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: boolean;
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="square"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
    </svg>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  className,
  icon = true,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn("btn", variant === "primary" && "btn--primary", className)}
      data-fill
      {...props}
    >
      <span className="btn__fill" aria-hidden="true" />
      <span className="btn__content">{children}</span>
      {icon && <ArrowIcon className="btn__icon relative z-10 h-3.5 w-3.5" />}
    </a>
  );
}
