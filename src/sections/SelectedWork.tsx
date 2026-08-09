import { ProjectGrid } from "../components/ProjectGrid";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/projects";

export function SelectedWork() {
  return (
    <section id="work" className="border-b border-outline-variant">
      <div className="site-container py-16 md:py-20">
        <SectionHeading title="Selected Work" index={`01 // ${String(projects.length).padStart(2, "0")}`} />
        <div className="mt-10">
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </section>
  );
}
