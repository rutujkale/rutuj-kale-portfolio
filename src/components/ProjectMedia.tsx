import type { Project } from "../data/projects";
import { cn } from "../lib/cn";

export function ProjectMedia({ project }: { project: Project }) {
  const [lead, ...rest] = project.media ?? [];

  if (!lead) return null;

  return (
    <div className="flex flex-col gap-8">
      <figure>
        <div className="overflow-hidden border border-line bg-panel">
          <img
            src={lead.src}
            alt={lead.alt}
            width={lead.width}
            height={lead.height}
            decoding="async"
            className="h-auto w-full"
          />
        </div>
        <figcaption className="mt-3 flex flex-col gap-1 border-t border-line pt-3 text-xs text-muted sm:flex-row sm:justify-between">
          <span>{lead.caption}</span>
          <span className="label">REAL CAPTURE</span>
        </figcaption>
      </figure>

      {rest.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((item) => (
            <figure key={item.src} className={cn(rest.length % 2 === 1 && "sm:last:col-span-2")}>
              <div className="overflow-hidden border border-line bg-panel">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-2 text-xs leading-relaxed text-muted">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
