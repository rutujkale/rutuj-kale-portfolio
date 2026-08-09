import type { Project } from "../data/projects";
import { cn } from "../lib/cn";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
      {projects.map((project, index) => (
        <div key={project.id} className={cn("md:col-span-12", index > 0 && "md:col-span-6")}>
          <ProjectCard project={project} featured={index === 0} />
        </div>
      ))}
    </div>
  );
}
