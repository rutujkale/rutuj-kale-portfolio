import { useEffect } from "react";
import { ButtonLink } from "../components/Button";
import { usePageMeta } from "../hooks/usePageMeta";

export function NotFound() {
  usePageMeta("Page not found | Rutuj Kale", "The requested page does not exist.");

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => {
      meta.remove();
    };
  }, []);

  return (
    <section className="border-b border-line">
      <div className="site-container py-20 md:py-32">
        <p className="label label-accent">ERROR / 404</p>
        <h1 className="display-tight mt-5 max-w-3xl" data-split="lines" data-intro>
          Signal lost.
        </h1>
        <p className="mt-6 max-w-xl text-m leading-snug text-muted">
          The page you are looking for does not exist, moved, or was never patched in.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Return home</ButtonLink>
          <ButtonLink href="/#work" variant="secondary" icon={false}>
            View work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
