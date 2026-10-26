import { SectionHeading } from "../components/SectionHeading";
import { TechTag } from "../components/TechTag";
import { skillCategories } from "../data/skills";

export function Skills() {
  const count = skillCategories.reduce((total, category) => total + category.skills.length, 0);

  return (
    <section id="skills">
      <div className="site-container py-16 md:py-24">
        <SectionHeading
          index="03 / 03"
          eyebrow="CAPABILITIES"
          title={
            <>
              The patch
              <br />
              bay.
            </>
          }
          note={`${String(skillCategories.length).padStart(2, "0")} channels, ${count} contacts. The tools I reach for when a problem needs a working system, not a demo.`}
        />

        <div className="mt-12 border-t border-line">
          {skillCategories.map((category) => (
            <div
              key={category.code}
              className="group grid gap-4 border-b border-line py-6 transition-colors hover:bg-panel/40 md:grid-cols-12 md:items-start md:gap-6"
            >
              <div className="flex items-center gap-3 md:col-span-1">
                <span className="label label-accent">{category.code}</span>
                <span className="h-px w-6 bg-line md:hidden" aria-hidden="true" />
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl leading-tight tracking-[-0.03em] text-ink transition-colors group-hover:text-accent">
                  {category.title}
                </h3>
                <p className="label mt-2 text-dim">
                  {String(category.skills.length).padStart(2, "0")} CONTACTS
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:col-span-7">
                {category.skills.map((skill) => (
                  <TechTag key={skill}>{skill}</TechTag>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="label">SIGNAL CHAIN / PYTHON / SQL / POSTGRESQL / REACT / UNITY</p>
          <p className="label text-dim">ALWAYS PATCHING</p>
        </div>
      </div>
    </section>
  );
}
