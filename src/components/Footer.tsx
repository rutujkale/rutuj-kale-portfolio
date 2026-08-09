import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant bg-surface-container-low">
      <div className="site-container flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-mono text-sm font-medium tracking-[0.05em] text-primary">{profile.name}</p>
          <p className="mt-3 font-mono text-xs leading-relaxed text-on-surface-variant">
            AI &amp; DATA SCIENCE
            <br />
            SOFTWARE DEVELOPMENT
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-on-surface-variant transition-colors hover:text-primary"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-on-surface-variant transition-colors hover:text-primary"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-outline-variant">
        <div className="site-container flex flex-col items-center justify-between gap-2 py-6 md:flex-row">
          <p className="font-mono text-xs text-on-surface-variant">© {year} RUTUJ KALE</p>
          <p className="font-mono text-xs text-on-surface-variant">
            AI &amp; DATA SCIENCE / SOFTWARE DEVELOPMENT
          </p>
        </div>
      </div>
    </footer>
  );
}
