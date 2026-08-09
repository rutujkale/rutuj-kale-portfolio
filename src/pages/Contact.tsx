import { useState } from "react";
import { ButtonLink } from "../components/Button";
import { ContactForm } from "../components/ContactForm";
import { CheckIcon, CopyIcon, GithubIcon, LinkedinIcon } from "../components/Icons";
import { profile } from "../data/profile";
import { usePageMeta } from "../hooks/usePageMeta";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="text-on-surface-variant transition-colors hover:text-primary"
      aria-label={copied ? "Email address copied" : "Copy email address"}
    >
      {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
    </button>
  );
}

export function Contact() {
  usePageMeta(
    "Contact | Rutuj Kale | AI & Data Science Engineer",
    "Reach out to Rutuj Kale about AI/ML and software engineering opportunities."
  );

  return (
    <>
      <section className="site-container pt-16 md:pt-24">
        <div className="inline-flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          OPEN TO OPPORTUNITIES
        </div>
        <h1 className="mt-6 font-sans text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-on-surface md:text-headline-xl">
          Let's talk.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
          Open to AI/ML and software engineering opportunities. Reach out directly or send a message
          below.
        </p>
      </section>

      <section className="site-container grid gap-6 pb-24 pt-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="rounded-lg border border-outline-variant bg-surface p-6 md:p-8">
            <h2 className="font-sans text-2xl font-semibold tracking-tight text-on-surface">
              Direct Contact
            </h2>
            <dl className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <dt className="mt-1 shrink-0 font-mono text-xs text-primary">EMAIL</dt>
                <dd className="flex flex-wrap items-center gap-2">
                  <a
                    href={`mailto:${profile.email}`}
                    className="break-all text-on-surface underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    {profile.email}
                  </a>
                  <CopyEmailButton />
                </dd>
              </div>
              <div className="flex items-start gap-4">
                <dt className="shrink-0 font-mono text-xs text-primary">LOCATION</dt>
                <dd className="text-on-surface">{profile.location}</dd>
              </div>
            </dl>
            <div className="mt-8 h-px bg-outline-variant" aria-hidden="true" />
            <div className="mt-8 flex flex-col gap-3">
              <ButtonLink
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="w-full"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </ButtonLink>
              <ButtonLink
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="w-full"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </ButtonLink>
              <ButtonLink href={profile.resumeUrl} download variant="secondary" className="w-full">
                Resume
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
