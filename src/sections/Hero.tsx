import { ButtonLink } from "../components/Button";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-outline-variant">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />
      <div className="site-container relative py-20 md:py-32">
        <div className="inline-flex max-w-full flex-col gap-2 rounded border border-outline-variant bg-surface-container-low px-4 py-3 font-mono text-xs text-on-surface-variant">
          <span className="tracking-[0.05em]">&gt; FOCUS: {profile.focus.join(" / ")}</span>
          <span className="flex items-center gap-2 tracking-[0.05em]">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            STATUS: {profile.status}
          </span>
        </div>
        <h1 className="mt-8 max-w-3xl font-sans text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-on-surface md:text-headline-xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
          {profile.supporting}
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <ButtonLink href="#work">View Work</ButtonLink>
          <ButtonLink href={profile.resumeUrl} download variant="secondary">
            Download Resume
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
