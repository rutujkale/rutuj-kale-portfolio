import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type ButtonVariant = "primary" | "secondary";

function buttonClasses(variant: ButtonVariant, className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded border px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.05em] transition-colors duration-200",
    variant === "primary"
      ? "border-primary bg-primary text-on-primary hover:bg-primary-fixed"
      : "border-outline-variant bg-transparent text-on-surface hover:border-primary hover:text-primary",
    className
  );
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
}

export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return <a className={buttonClasses(variant, className)} {...props} />;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary", className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, className)} {...props} />;
}
