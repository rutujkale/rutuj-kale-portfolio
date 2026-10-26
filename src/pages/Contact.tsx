import { useState } from "react";
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
      className="flex h-9 w-9 shrink-0 items-center justify-center border border-line-strong text-muted transition-colors hover:border-accent hover:text-accent"
      aria-label={copied ? "Email address copied" : "Copy email address"}
    >
      {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}

export function Contact() {
  usePageMeta(
    "Contact | Rutuj Kale",
    "Reach Rutuj Kale about AI, data science and software engineering roles, projects or collaborations.",
  );

  return (
    <>
      <section className="border-b border-line">
        <div className="site-container pt-8 md:pt-12">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <span className="label label-accent">OPEN CHANNEL / 04</span>
            <span className="label hidden sm:inline">RESPONSE / DIRECT EMAIL</span>
          </div>
          <h1 className="display-tight mt-8 max-w-4xl" data-split="lines" data-intro>
            Let's talk.
          </h1>
          <div className="mt-8 grid gap-6 border-t border-line pt-6 md:grid-cols-12">
            <p className="max-w-xl text-m leading-snug text-ink md:col-span-8" data-reveal="up" data-intro>
              I am open to AI, data science and software engineering roles. If you have a messy
              problem, a project, or a team that needs another builder, send the signal.
            </p>
            <p className="label md:col-span-4 md:justify-self-end md:self-end">
              STATUS / <span className="text-accent">{profile.status}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="site-container py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="label">DIRECT</p>
            <div className="mt-3 flex items-start gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="break-all font-display text-[clamp(1.5rem,3.2vw,2.6rem)] leading-tight tracking-[-0.04em] text-ink transition-colors hover:text-accent"
              >
                {profile.email}
              </a>
              <CopyEmailButton />
            </div>

            <dl className="mt-10 border-t border-line">
              <div className="flex items-baseline justify-between gap-4 border-b border-line py-4">
                <dt className="label">LOCATION</dt>
                <dd className="text-right text-s text-ink">{profile.location}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-line py-4">
                <dt className="label">STATUS</dt>
                <dd className="text-right text-s text-accent">{profile.status}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-line py-4">
                <dt className="label">PREFERRED</dt>
                <dd className="text-right text-s text-ink">Email, LinkedIn</dd>
              </div>
            </dl>

            <div className="mt-10">
              <p className="label">CHANNELS</p>
              <div className="mt-4 flex flex-col items-start gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link gap-2"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  GitHub
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link gap-2"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" />
                  LinkedIn
                  <span aria-hidden="true">↗</span>
                </a>
                <a href={profile.resumeUrl} download className="nav-link gap-2">
                  Resume
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
