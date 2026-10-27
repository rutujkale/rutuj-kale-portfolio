import type { Project } from "../data/projects";
import { cn } from "../lib/cn";

export function ProjectPreview({
  project,
  className,
  priority = false,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
}) {
  const lead = project.media?.[0];

  if (!lead) return null;

  return (
    <div className={cn("relative overflow-hidden border border-line bg-panel", className)}>
      <img
        src={lead.src}
        alt={lead.alt}
        width={lead.width}
        height={lead.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover object-top"
      />
      <span className="label absolute left-3 top-3 bg-ground/85 px-2 py-1 text-[0.5rem] text-accent">
        REAL CAPTURE
      </span>
    </div>
  );
}
