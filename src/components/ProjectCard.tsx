import { ButtonLink } from "./Button";
import { GithubIcon } from "./Icons";
import { ProjectVisual } from "./ProjectVisual";
import { TechTag } from "./TechTag";
import type { Project } from "../data/projects";
import { cn } from "../lib/cn";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border border-outline-variant bg-surface transition-colors duration-300 hover:border-primary/50",
        featured && "md:flex-row"
      )}
    >
      <div
        className={cn(
          "bg-surface-container-low",
          featured ? "border-outline-variant md:w-3/5 md:border-r" : "order-2 border-t border-outline-variant"
        )}
      >
        <div className={cn("p-4", featured ? "h-64 md:h-full" : "h-44")}>
          <ProjectVisual variant={project.visual} title={project.title} />
        </div>
      </div>
      <div className={cn("flex flex-col p-6 md:p-8", featured ? "md:w-2/5 md:justify-center" : "order-1")}>
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-on-surface-variant">
          <span>PROJECT {project.index}</span>
          <span className="text-outline-variant" aria-hidden="true">
            /
          </span>
          <span>{project.year}</span>
          {project.label && (
            <span className="rounded border border-primary/40 bg-primary/10 px-1.5 py-0.5 text-primary">
              {project.label}
            </span>
          )}
        </div>
        <h3 className="mt-3 font-sans text-2xl font-semibold tracking-tight text-on-surface">
          {project.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-on-surface-variant">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechTag key={technology}>{technology}</TechTag>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={`/projects/${project.id}`} variant="secondary" className="px-4 py-2">
            View Project
          </ButtonLink>
          {project.github && (
            <ButtonLink
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="px-4 py-2"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </ButtonLink>
          )}
        </div>
      </div>
    </article>
  );
}
