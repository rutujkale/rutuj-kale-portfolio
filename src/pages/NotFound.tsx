import { ButtonLink } from "../components/Button";
import { usePageMeta } from "../hooks/usePageMeta";

export function NotFound() {
  usePageMeta("Page Not Found | Rutuj Kale");

  return (
    <section className="site-container flex flex-col items-start gap-6 py-24">
      <span className="font-mono text-xs text-primary">404</span>
      <h1 className="font-sans text-4xl font-bold tracking-[-0.03em] text-on-surface">
        Page not found.
      </h1>
      <p className="max-w-xl text-lg text-on-surface-variant">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <ButtonLink href="/">Back to home</ButtonLink>
    </section>
  );
}
