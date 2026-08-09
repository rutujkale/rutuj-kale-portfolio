import { SectionHeading } from "../components/SectionHeading";
import { TechTag } from "../components/TechTag";
import { TimelineItem } from "../components/TimelineItem";
import { education, hackathon, softSkills } from "../data/profile";

export function Background() {
  return (
    <section id="background" className="border-b border-outline-variant">
      <div className="site-container py-16 md:py-20">
        <SectionHeading title="Background" index="02 // 03" />
        <div className="mt-12 max-w-3xl space-y-12">
          <TimelineItem
            label="EDUCATION"
            title={education.degree}
            subtitle={education.institution}
            meta={`CGPA: ${education.cgpa}`}
          >
            <div className="mt-4">
              <h3 className="font-mono text-xs tracking-[0.05em] text-on-surface-variant">
                RELEVANT COURSEWORK
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <TechTag key={course}>{course}</TechTag>
                ))}
              </div>
            </div>
          </TimelineItem>

          <TimelineItem
            label="HACKATHON / PROJECT EXPERIENCE"
            title={hackathon.project}
            subtitle={hackathon.name}
            meta={hackathon.year}
          >
            <p className="mt-2 text-base leading-relaxed">
              Developed interactive simulation scripts in C# using Unity as part of a cross-functional
              team for the Smart India Hackathon.
            </p>
          </TimelineItem>

          <TimelineItem label="SOFT SKILLS">
            <div className="mt-2 flex flex-wrap gap-x-8 gap-y-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-2 font-mono text-xs tracking-[0.05em] text-on-surface-variant"
                >
                  <span className="text-primary" aria-hidden="true">
                    &gt;
                  </span>
                  {skill}
                </span>
              ))}
            </div>
          </TimelineItem>
        </div>
      </div>
    </section>
  );
}
