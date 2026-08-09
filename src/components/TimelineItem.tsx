import type { ReactNode } from "react";

interface TimelineItemProps {
  label: string;
  title?: string;
  subtitle?: string;
  meta?: string;
  children?: ReactNode;
}

export function TimelineItem({ label, title, subtitle, meta, children }: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      <span
        className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border border-primary bg-surface"
        aria-hidden="true"
      />
      <span className="font-mono text-xs tracking-[0.05em] text-primary">{label}</span>
      {title && (
        <h3 className="mt-2 font-sans text-2xl font-semibold tracking-tight text-on-surface">{title}</h3>
      )}
      {(subtitle || meta) && (
        <p className="mt-1 font-mono text-sm text-on-surface-variant">
          {subtitle}
          {subtitle && meta ? " — " : ""}
          {meta}
        </p>
      )}
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
