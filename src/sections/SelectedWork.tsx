import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/Button";
import { ProjectPreview } from "../components/ProjectPreview";
import { SectionHeading } from "../components/SectionHeading";
import { SignalScope } from "../components/SignalScope";
import { projects } from "../data/projects";
import { usePatch } from "../hooks/usePatch";
import { setPatch } from "../motion/instrument";

function shortName(title: string) {
  return title.split(":")[0];
}

export function SelectedWork() {
  const patch = usePatch();
  const active = projects.find((item) => item.id === patch) ?? projects[0];

  return (
    <section id="work" className="border-b border-line">
      <div className="site-container py-16 md:py-24">
        <SectionHeading
          index="01 / 03"
          eyebrow="SELECTED WORK"
          title={
            <>
              Five signals,
              <br />
              five decisions.
            </>
          }
          note="Each project is a patch: an input, a transformation, and an output someone can act on. Open a case to see the real evidence."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="work-row group"
                onPointerEnter={() => setPatch(project.id)}
                onFocus={() => setPatch(project.id)}
              >
                <span className="label pt-1.5">{project.index}</span>
                <div className="min-w-0">
                  <h3 className="work-row__title">
                    <span>{shortName(project.title)}</span>
                  </h3>
                  <p className="mt-2 max-w-xl text-s leading-relaxed text-muted">{project.summary}</p>
                  <p className="label mt-3 md:hidden">
                    {project.category} <span className="text-dim">/ {project.year}</span>
                  </p>
                </div>
                <div className="hidden md:block">
                  <p className="label">{project.category}</p>
                  <p className="label mt-1 text-dim">{project.year}</p>
                </div>
                <span className="justify-self-end pt-1.5 text-muted transition-colors group-hover:text-accent">
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <aside className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-[calc(var(--header-h)+1.5rem)]">
              <div className="flex items-center justify-between border-b border-line pb-2">
                <span className="label">MONITOR / {active.index}</span>
                <span className="label label-accent">LIVE TRACE</span>
              </div>
              <div className="relative mt-3 h-24 border border-line bg-panel">
                <SignalScope className="absolute inset-0 h-full w-full" />
              </div>
              <ProjectPreview project={active} className="mt-3 aspect-[16/10]" />
              <div className="mt-3 border-t border-line pt-3">
                <p className="label">SIGNAL PATH</p>
                <p className="mt-2 text-s leading-relaxed text-ink">
                  {active.signal.input}
                  <span className="mx-1.5 text-accent" aria-hidden="true">
                    →
                  </span>
                  {active.signal.output}
                </p>
                <p className="label mt-3 text-dim">{active.signal.code}</p>
                <Link to={`/projects/${active.id}`} className="nav-link mt-3">
                  View case →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
