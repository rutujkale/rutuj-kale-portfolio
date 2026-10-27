import { Link } from "react-router-dom";
import { SignalScope } from "../components/SignalScope";
import { ButtonLink } from "../components/Button";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { usePatch } from "../hooks/usePatch";
import { setPatch } from "../motion/instrument";

function shortName(title: string) {
  return title.split(":")[0];
}

export function Hero() {
  const patch = usePatch();
  const project = projects.find((item) => item.id === patch) ?? projects[0];

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.14] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" aria-hidden="true" />
      <div className="site-container relative pt-8 md:pt-12">
        <div className="flex items-center justify-between gap-4 border-b border-line pb-3 md:justify-end">
          <span className="label md:hidden">AI + DATA SCIENCE</span>
          <span className="label text-dim md:hidden">2026</span>
          <span className="label hidden md:inline">AI + DATA SCIENCE / 2026</span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="display" data-split="chars" data-intro>
              RUTUJ
              <br />
              KALE
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p
              className="max-w-sm text-m leading-snug text-ink"
              data-reveal="up"
              data-intro
            >
              I build systems that turn noisy data into working decisions.
            </p>
            <p
              className="mt-4 max-w-sm text-s leading-relaxed text-muted"
              data-reveal="up"
              data-intro
              data-delay="0.12"
            >
              AI and data science engineer working across machine learning, computer vision,
              analytics and the interfaces that make the output usable.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="#work">See the work</ButtonLink>
              <ButtonLink href={profile.resumeUrl} download variant="secondary" icon={false}>
                Resume
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-line md:mt-14">
          <div className="flex items-center justify-between gap-4 py-3">
            <p className="label">
              LIVE TRACE / PATCH <span className="text-ink">{project.index}</span>
            </p>
            <p className="label label-accent">NOISE → SIGNAL</p>
          </div>

          <div className="relative h-[24vh] min-h-[200px] max-h-[360px] border-y border-line">
            <SignalScope className="absolute inset-0 h-full w-full" />
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between py-2">
              <div className="flex justify-between px-2">
                {["0", "1", "2", "3", "4", "5", "6", "7", "8"].map((tick) => (
                  <span key={tick} className="label text-[0.5rem] text-dim">
                    {tick}
                  </span>
                ))}
              </div>
              <div className="flex justify-between px-2">
                <span className="label text-[0.5rem] text-dim">IN</span>
                <span className="label text-[0.5rem] text-dim">OUT</span>
              </div>
            </div>
          </div>

          <div className="grid gap-5 py-5 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="label">INPUT</p>
              <p className="mt-1.5 text-s leading-snug text-ink">{project.signal.input}</p>
            </div>
            <div className="md:col-span-3">
              <p className="label">TRANSFORM</p>
              <p className="mt-1.5 text-s leading-snug text-ink">{project.signal.transform}</p>
            </div>
            <div className="md:col-span-3">
              <p className="label">OUTPUT</p>
              <p className="mt-1.5 text-s leading-snug text-ink">{project.signal.output}</p>
            </div>
            <div className="md:col-span-3 md:border-l md:border-line md:pl-5">
              <p className="label">PATCH / {project.index}</p>
              <p className="mt-1.5 font-display text-xl leading-tight tracking-[-0.03em] text-ink">
                {shortName(project.title)}
              </p>
              <Link to={`/projects/${project.id}`} className="nav-link mt-2">
                Open case →
              </Link>
            </div>
          </div>

          <div className="border-t border-line py-3">
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Select a project patch">
              {projects.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPatch(item.id)}
                  onPointerEnter={() => setPatch(item.id)}
                  aria-pressed={item.id === project.id}
                  className={
                    item.id === project.id
                      ? "border border-accent bg-accent px-2 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.06em] text-ground"
                      : "border border-line px-2 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.06em] text-muted transition-colors hover:border-accent hover:text-ink"
                  }
                >
                  {item.index} {shortName(item.title)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 border-t border-line py-5 sm:grid-cols-3">
          <p className="label">
            ROLE <span className="text-ink">/ AI + DATA SCIENCE</span>
          </p>
          <p className="label">
            BASED <span className="text-ink">/ {profile.location}</span>
          </p>
          <p className="label sm:text-right">
            STATUS <span className="text-accent">/ {profile.status}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
