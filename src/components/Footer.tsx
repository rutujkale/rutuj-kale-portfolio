import { profile } from "../data/profile";
import { scrollToTarget } from "../engine";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="site-container py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label label-accent">OUTPUT / CONTACT</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-block max-w-full break-words font-display text-[clamp(1.6rem,4.2vw,3.6rem)] leading-[1.05] tracking-[-0.04em] text-ink transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
            <p className="mt-5 max-w-md text-s leading-relaxed text-muted">
              Open to AI, data science and software engineering roles. The instrument is on.
            </p>
          </div>
          <div className="md:col-span-5 md:justify-self-end">
            <p className="label">CHANNELS</p>
            <div className="mt-4 flex flex-col items-start gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link min-h-11 gap-2 md:min-h-10"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link min-h-11 gap-2 md:min-h-10"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                LinkedIn
                <span aria-hidden="true">↗</span>
              </a>
              <a href={profile.resumeUrl} download className="nav-link min-h-11 gap-2 md:min-h-10">
                Resume
                <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="mt-6 label">{profile.location}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="site-container flex flex-col gap-3 py-5 md:flex-row md:items-center md:justify-between">
          <p className="label">
            © {year} RUTUJ KALE / ALL SIGNALS RESERVED
          </p>
          <div className="flex items-center gap-5">
            <p className="label hidden sm:inline">BUILT WITH REACT / GSAP / CANVAS</p>
            <button
              type="button"
              onClick={() => scrollToTarget(0)}
              className="nav-link min-h-11 md:min-h-10"
              aria-label="Back to top"
            >
              TOP ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
