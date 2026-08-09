import { Link, useParams } from "react-router-dom";
import { ButtonLink } from "../components/Button";
import { GithubIcon } from "../components/Icons";
import { ProjectVisual } from "../components/ProjectVisual";
import { SectionHeading } from "../components/SectionHeading";
import { TechTag } from "../components/TechTag";
import { projects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  usePageMeta(
    project ? `${project.title} | Rutuj Kale` : "Project Not Found | Rutuj Kale",
    project?.description
  );

  if (!project) {
    return (
      <section className="site-container flex flex-col items-start gap-6 py-24">
        <span className="font-mono text-xs text-primary">404</span>
        <h1 className="font-sans text-4xl font-bold tracking-[-0.03em] text-on-surface">
          Project not found.
        </h1>
        <ButtonLink href="/">Back to home</ButtonLink>
      </section>
    );
  }

  return (
    <>
      <section className="site-container pt-14 md:pt-20">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.05em] text-on-surface-variant transition-colors hover:text-primary"
        >
          <span aria-hidden="true">&larr;</span>
          BACK TO WORK
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-on-surface-variant">
          <span>PROJECT {project.index}</span>
          <span className="text-outline-variant" aria-hidden="true">
            /
          </span>
          <span>{project.year}</span>
          <span className="text-outline-variant" aria-hidden="true">
            /
          </span>
          <span>{project.category.toUpperCase()}</span>
        </div>
        <h1 className="mt-4 max-w-3xl font-sans text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-on-surface md:text-headline-xl">
          {project.title}
        </h1>
        {project.label && (
          <span className="mt-5 inline-block rounded border border-primary/40 bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
            {project.label}
          </span>
        )}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechTag key={technology}>{technology}</TechTag>
          ))}
        </div>
      </section>

      <section className="site-container mt-10">
        <ProjectVisual variant={project.visual} title={project.title} className="h-72 md:h-96" />
      </section>

      <section className="site-container grid gap-10 pb-24 pt-14 lg:grid-cols-12">
        <div className="flex flex-col gap-14 lg:col-span-8">
          <div>
            <SectionHeading title="Overview" />
            <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">{project.overview}</p>
          </div>
          <div>
            <SectionHeading title="Implementation" />
            <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">{project.implementation}</p>
          </div>
          <div>
            <SectionHeading title="My Contribution" />
            <ul className="mt-6 space-y-3">
              {project.contribution.map((item) => (
                <li key={item} className="flex items-start gap-3 text-on-surface-variant">
                  <span className="mt-0.5 font-mono text-sm text-primary" aria-hidden="true">
                    &gt;
                  </span>
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="flex flex-col gap-6 lg:col-span-4">
          <div className="rounded-lg border border-outline-variant bg-surface p-6">
            <h2 className="font-mono text-xs tracking-[0.05em] text-primary">TECHNOLOGIES</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <TechTag key={technology}>{technology}</TechTag>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-outline-variant bg-surface p-6">
            <h2 className="font-mono text-xs tracking-[0.05em] text-primary">LINKS</h2>
            <div className="mt-4 flex flex-col gap-3">
              {project.github ? (
                <ButtonLink
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </ButtonLink>
              ) : (
                <p className="font-mono text-xs leading-relaxed text-on-surface-variant">
                  Source not public.
                </p>
              )}
              {project.demo && (
                <ButtonLink
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full"
                >
                  View Demo
                </ButtonLink>
              )}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
