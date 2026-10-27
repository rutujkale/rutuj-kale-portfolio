import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initScroll, resetScroll, startScroll, stopScroll } from "./scroll";
import { initReveals } from "./reveal";
import { initFill } from "./interactions";
import { runLoader } from "./loader";
import { playEnter, playLeave } from "./transition";
import { prefersReducedMotion } from "./env";

export { onScroll, getScroll, scrollToTarget, stopScroll, startScroll } from "./scroll";
export { setTransition } from "./transition";
export { setLoaderFormat, setLoaderExit } from "./loader";
export { ease, isTouch, isMobile, prefersReducedMotion } from "./env";

gsap.registerPlugin(ScrollTrigger);

export type PageFn = (page: { intro: gsap.core.Timeline; path: string }) => void | (() => void);

const pageFns = new Set<PageFn>();
const cleanups: (() => void)[] = [];
let ctx: gsap.Context | null = null;
let intro: gsap.core.Timeline | null = null;
let ready = false;
let booted = false;

export function onPage(fn: PageFn) {
  pageFns.add(fn);
  if (ready) runPageFn(fn);
  return () => {
    pageFns.delete(fn);
  };
}

function runPageFn(fn: PageFn) {
  ctx?.add(() => {
    const cleanup = fn({ intro: intro!, path: location.pathname });
    if (typeof cleanup === "function") cleanups.push(cleanup);
  });
}

export function syncFlags() {
  const html = document.documentElement.classList;
  html.add("js", "is-booted");
  html.toggle("motion", !prefersReducedMotion());
}

function initPage() {
  syncFlags();
  ctx = gsap.context(() => {
    intro = initReveals(document);
    initFill(document);
  });
  ready = true;
  pageFns.forEach(runPageFn);
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

export async function boot(setup?: () => void) {
  if (booted) return;
  booted = true;
  syncFlags();
  initScroll();
  setup?.();
  stopScroll();
  await runLoader(initPage);
  startScroll();
  intro?.play();
}

export async function leave() {
  stopScroll();
  await playLeave();
}

export function cleanup() {
  if (!ready) return;
  ready = false;
  cleanups.splice(0).forEach((callback) => callback());
  ctx?.revert();
  ctx = null;
}

export async function enter({ transition = true, scrollTop = true } = {}) {
  if (!booted) return;
  cleanup();
  if (scrollTop) resetScroll();
  initPage();
  if (transition) await playEnter();
  startScroll();
  intro?.play();
  document.getElementById("main-content")?.focus({ preventScroll: true });
}
