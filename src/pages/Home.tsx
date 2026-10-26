import { ButtonLink } from "../components/Button";
import { profile } from "../data/profile";
import { usePageMeta } from "../hooks/usePageMeta";
import { Background } from "../sections/Background";
import { Hero } from "../sections/Hero";
import { SelectedWork } from "../sections/SelectedWork";
import { Skills } from "../sections/Skills";

export function Home() {
  usePageMeta(
    "Rutuj Kale | AI and Data Science Engineer",
    "Portfolio of Rutuj Kale, an AI and data science engineer building systems that turn noisy data into working decisions across fraud detection, DeFi analytics, computer vision, simulation and audio.",
  );

  return (
    <>
      <Hero />
      <SelectedWork />
      <Background />
      <Skills />
      <section className="border-t border-line">
        <div className="site-container py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="label label-accent">OUTPUT / NEXT</p>
              <h2 className="display-tight mt-4" data-split="lines">
                Have a noisy problem?
              </h2>
              <p className="mt-5 max-w-xl text-m leading-snug text-muted">
                I am open to AI, data science and software engineering roles. Bring the messy input;
                I will help route it to a decision.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
              <ButtonLink href={`mailto:${profile.email}`} variant="secondary" icon={false}>
                Email me
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
