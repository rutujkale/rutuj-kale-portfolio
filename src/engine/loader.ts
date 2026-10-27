import { gsap } from "gsap";
import { ease, prefersReducedMotion } from "./env";

let format = (p: number) => String(Math.round(p)).padStart(3, "0");
let exit: ((root: HTMLElement) => gsap.core.Timeline) | null = null;

export const setLoaderFormat = (fn: (p: number) => string) => {
  format = fn;
};

export const setLoaderExit = (fn: (root: HTMLElement) => gsap.core.Timeline) => {
  exit = fn;
};

const MIN = 0.65;
const MAX = 1.15;

function criticalAssets(): Promise<unknown>[] {
  const images = [
    ...document.querySelectorAll<HTMLImageElement>(
      "img[data-critical], [data-intro] img, [data-gl-instant] img",
    ),
  ];
  return [
    document.fonts.ready,
    ...images.map((img) =>
      img.complete ? Promise.resolve() : img.decode().catch(() => {}),
    ),
  ];
}

export async function runLoader(beforeExit?: () => void): Promise<void> {
  const root = document.getElementById("loader");
  if (!root) {
    beforeExit?.();
    return;
  }

  if (prefersReducedMotion()) {
    await Promise.race([Promise.all(criticalAssets()), wait(MAX)]);
    beforeExit?.();
    await gsap.to(root, { autoAlpha: 0, duration: 0.3 });
    finish(root);
    return;
  }

  const count = root.querySelector<HTMLElement>("[data-loader-count]");
  const bar = root.querySelector<HTMLElement>("[data-loader-bar]");
  const tasks = criticalAssets();
  let done = 0;
  const shown = { v: 0 };
  const target = { v: 0 };

  tasks.forEach((task) => {
    task.then(() => {
      done += 1;
      target.v = (done / tasks.length) * 100;
    });
  });

  const start = performance.now();

  await new Promise<void>((resolve) => {
    const tick = () => {
      const elapsed = (performance.now() - start) / 1000;
      const timeCap = Math.min(100, (elapsed / MIN) * 100);
      const goal = elapsed > MAX ? 100 : Math.min(target.v, timeCap);
      shown.v += (goal - shown.v) * 0.18;
      if (goal === 100 && shown.v > 99.5) shown.v = 100;
      if (count) count.textContent = format(shown.v);
      if (bar) bar.style.transform = `scaleX(${shown.v / 100})`;
      if (shown.v === 100) {
        gsap.ticker.remove(tick);
        resolve();
      }
    };
    gsap.ticker.add(tick);
  });

  beforeExit?.();

  if (exit) {
    await exit(root);
    finish(root);
    return;
  }

  await gsap
    .timeline()
    .to(root.querySelectorAll("[data-loader-out]"), {
      yPercent: -110,
      duration: 0.7,
      ease: ease.inOut,
      stagger: 0.05,
    })
    .to(root, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.9, ease: ease.inOut }, "-=0.35");

  finish(root);
}

function finish(root: HTMLElement) {
  root.hidden = true;
  document.documentElement.classList.add("is-loaded");
}

const wait = (seconds: number) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

