import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ButtonLink } from "../components/Button";
import { GithubIcon } from "../components/Icons";
import { ProjectMedia } from "../components/ProjectMedia";
import { SignalScope } from "../components/SignalScope";
import { TechTag } from "../components/TechTag";
import { projects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";
import { setPatch } from "../motion/instrument";
import { NotFound } from "./NotFound";

function shortName(title: string) {
  return title.split(":")[0];
}

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  usePageMeta(
    project ? `${project.title} | Rutuj Kale` : "Project not found | Rutuj Kale",
    project?.description,
  );

  useEffect(() => {
    if (project) setPatch(project.id);
  }, [project]);

  if (!project) return <NotFound />;

  const currentIndex = projects.findIndex((item) => item.id === project.id);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <section className="border-b border-line">
        <div className="site-container pt-8 md:pt-12">
          <Link to="/#work" className="nav-link">
            ← Back to work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="label label-accent">PROJECT {project.index}</span>
            <span className="label text-dim" aria-hidden="true">
              /
            </span>
            <span className="label">{project.year}</span>
            <span className="label text-dim" aria-hidden="true">
              /
            </span>
            <span className="label">{project.category}</span>
            {project.label && (
              <>
                <span className="label text-dim" aria-hidden="true">
                  /
                </span>
                <span className="label label-accent">{project.label}</span>
              </>
            )}
          </div>

          <h1 key={project.id} className="display-tight mt-5 max-w-5xl" data-split="lines" data-intro>
            {project.title}
          </h1>

          <div className="mt-8 grid gap-8 border-t border-line pt-6 lg:grid-cols-12">
            <p className="max-w-2xl text-m leading-snug text-ink lg:col-span-8" data-reveal="up" data-intro>
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2 lg:col-span-4 lg:justify-end">
              {project.github && (
                <ButtonLink
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  icon={false}
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  Source
                </ButtonLink>
              )}
              {project.demo && (
                <ButtonLink
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon
                >
                  Live demo
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </section>

      {project.media?.length ? (
        <section className="site-container py-10 md:py-14">
          <ProjectMedia project={project} />
        </section>
      ) : null}

      <section className="site-container grid gap-12 pb-20 pt-6 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col gap-14 lg:col-span-8">
          <article>
            <h2 className="label label-accent">01 / OVERVIEW</h2>
            <p className="mt-4 max-w-2xl text-body leading-relaxed text-muted">{project.overview}</p>
          </article>

          <article className="border-t border-line pt-8">
            <h2 className="label label-accent">02 / IMPLEMENTATION</h2>
            <p className="mt-4 max-w-2xl text-body leading-relaxed text-muted">
              {project.implementation}
            </p>
          </article>

          <article className="border-t border-line pt-8">
            <h2 className="label label-accent">03 / MY CONTRIBUTION</h2>
            <ul className="mt-4 max-w-2xl">
              {project.contribution.map((item) => (
                <li key={item} className="flex gap-3 border-b border-line py-3 last:border-b-0">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-accent" aria-hidden="true" />
                  <span className="text-s leading-relaxed text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="border-t border-line pt-8">
            <h2 className="label label-accent">04 / TECHNOLOGIES</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <TechTag key={technology}>{technology}</TechTag>
              ))}
            </div>
          </article>
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
            <div className="border border-line bg-panel p-5">
              <div className="flex items-center justify-between gap-3 border-b border-line pb-3">
                <span className="label">SIGNAL / {project.signal.code}</span>
                <span className="label label-accent">PATCH {project.index}</span>
              </div>
              <div className="relative mt-3 h-24 border border-line">
                <SignalScope className="absolute inset-0 h-full w-full" />
              </div>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="label">INPUT</dt>
                  <dd className="mt-1 text-s leading-snug text-ink">{project.signal.input}</dd>
                </div>
                <div>
                  <dt className="label">TRANSFORM</dt>
                  <dd className="mt-1 text-s leading-snug text-ink">{project.signal.transform}</dd>
                </div>
                <div>
                  <dt className="label">OUTPUT</dt>
                  <dd className="mt-1 text-s leading-snug text-ink">{project.signal.output}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 border-t border-line pt-4">
              <p className="label">CHANNELS</p>
              <div className="mt-3 flex flex-col gap-2">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link justify-between"
                  >
                    GitHub repository <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <p className="text-s text-dim">Source not public.</p>
                )}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link justify-between"
                  >
                    Live demo <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <p className="text-s text-dim">No public demo.</p>
                )}
              </div>
            </div>
          </div>
        </aside>
      </section>

      {next && (
        <section className="border-t border-line">
          <Link to={`/projects/${next.id}`} className="group block">
            <div className="site-container flex flex-col gap-4 py-12 md:flex-row md:items-end md:justify-between md:py-16">
              <div>
                <p className="label label-accent">NEXT PATCH / {next.index}</p>
                <p className="mt-3 font-display text-[clamp(2rem,5vw,4.5rem)] leading-none tracking-[-0.045em] text-ink transition-colors group-hover:text-accent">
                  {shortName(next.title)}
                </p>
              </div>
              <span className="label flex items-center gap-2">
                Open case <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        </section>
      )}
    </>
  );
}
