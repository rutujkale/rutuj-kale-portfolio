import type { ReactNode } from "react";
import { cn } from "../lib/cn";

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  note?: ReactNode;
  className?: string;
}

export function SectionHeading({ index, eyebrow, title, note, className }: SectionHeadingProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-12 md:items-end", className)}>
      <div className="md:col-span-8">
        <div className="flex items-center gap-3">
          {index && <span className="label label-accent">{index}</span>}
          <span className="h-px w-8 bg-line" aria-hidden="true" />
          <span className="label">{eyebrow}</span>
        </div>
        <h2 className="display-tight mt-5" data-split="lines">
          {title}
        </h2>
      </div>
      {note && (
        <div className="md:col-span-4 md:justify-self-end md:pb-1">
          <p className="max-w-sm text-s leading-relaxed text-muted md:text-right">{note}</p>
        </div>
      )}
    </div>
  );
}
