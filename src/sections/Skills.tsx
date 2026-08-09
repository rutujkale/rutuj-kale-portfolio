import { SectionHeading } from "../components/SectionHeading";
import { TechTag } from "../components/TechTag";
import { skillCategories } from "../data/skills";

export function Skills() {
  return (
    <section id="skills">
      <div className="site-container py-16 md:py-20">
        <SectionHeading title="Skills" index="03 // 03" />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="rounded-lg border border-outline-variant bg-surface p-6">
              <div className="flex items-baseline justify-between gap-4 border-b border-outline-variant pb-3">
                <h3 className="font-mono text-sm font-medium tracking-[0.05em] text-primary">
                  {category.title.toUpperCase()}
                </h3>
                <span className="shrink-0 font-mono text-xs text-on-surface-variant">{category.code}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <TechTag key={skill}>{skill}</TechTag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
