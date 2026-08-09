import { Hero } from "../sections/Hero";
import { SelectedWork } from "../sections/SelectedWork";
import { Background } from "../sections/Background";
import { Skills } from "../sections/Skills";
import { usePageMeta } from "../hooks/usePageMeta";

export function Home() {
  usePageMeta(
    "Rutuj Kale | AI & Data Science Engineer",
    "Portfolio of Rutuj Kale, a B.Tech Artificial Intelligence and Data Science student building practical software, machine learning, computer vision, and data-driven applications."
  );

  return (
    <>
      <Hero />
      <SelectedWork />
      <Background />
      <Skills />
    </>
  );
}
