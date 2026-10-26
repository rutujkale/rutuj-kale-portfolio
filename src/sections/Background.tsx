import { SectionHeading } from "../components/SectionHeading";
import { TechTag } from "../components/TechTag";
import { education, hackathon, profile, softSkills } from "../data/profile";

export function Background() {
  return (
    <section id="background" className="border-b border-line">
      <div className="site-container py-16 md:py-24">
        <SectionHeading
          index="02 / 03"
          eyebrow="BACKGROUND"
          title={
            <>
              Trained across
              <br />
              the whole stack.
            </>
          }
          note="Education, a national hackathon, and the working habits that sit between the model and the person using it."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
              <p className="text-m leading-snug text-ink">{profile.supporting}</p>
              <p className="label mt-6">BASED / {profile.location}</p>
              <p className="label mt-2">STATUS / <span className="text-accent">{profile.status}</span></p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <article className="grid gap-4 border-t border-line py-6 sm:grid-cols-[8.5rem_1fr]">
              <span className="label label-accent">01 / EDUCATION</span>
              <div>
                <h3 className="font-display text-2xl leading-tight tracking-[-0.03em] text-ink">
                  {education.degree}
                </h3>
                <p className="mt-1 text-s text-muted">{education.institution}</p>
                <p className="label mt-3">CGPA / <span className="text-ink">{education.cgpa}</span></p>
                <div className="mt-5">
                  <p className="label">RELEVANT COURSEWORK</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <TechTag key={course}>{course}</TechTag>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className="grid gap-4 border-t border-line py-6 sm:grid-cols-[8.5rem_1fr]">
              <span className="label label-accent">02 / HACKATHON</span>
              <div>
                <h3 className="font-display text-2xl leading-tight tracking-[-0.03em] text-ink">
                  {hackathon.project}
                </h3>
                <p className="mt-1 text-s text-muted">
                  {hackathon.name} / {hackathon.year}
                </p>
                <p className="mt-4 max-w-xl text-s leading-relaxed text-muted">
                  Built interactive simulation scripts in C# with Unity as part of a cross-functional
                  team, then refactored core modules after code review to improve responsiveness.
                </p>
              </div>
            </article>

            <article className="grid gap-4 border-y border-line py-6 sm:grid-cols-[8.5rem_1fr]">
              <span className="label label-accent">03 / WORKING STYLE</span>
              <div>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {softSkills.map((skill) => (
                    <span key={skill} className="flex items-center gap-2 text-s text-muted">
                      <span className="h-1 w-1 bg-accent" aria-hidden="true" />
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="mt-5 max-w-xl text-s leading-relaxed text-muted">
                  I care about the full path: whether the data is honest, whether the model is
                  calibrated, and whether the interface makes the result understandable.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

