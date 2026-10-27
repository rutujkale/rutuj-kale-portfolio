import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./env";

gsap.registerPlugin(ScrollTrigger);

export type ScrollState = { y: number; velocity: number; progress: number };

let lenis: Lenis | null = null;
const listeners = new Set<(state: ScrollState) => void>();
const state: ScrollState = { y: 0, velocity: 0, progress: 0 };

export function initScroll() {
  if (lenis || prefersReducedMotion()) {
    if (!lenis) window.addEventListener("scroll", nativeTick, { passive: true });
    return;
  }

  lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
    anchors: true,
  });

  lenis.on("scroll", (instance: Lenis) => {
    state.y = instance.scroll;
    state.velocity = instance.velocity;
    state.progress = instance.limit > 0 ? instance.scroll / instance.limit : 0;
    ScrollTrigger.update();
    listeners.forEach((fn) => fn(state));
  });

  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function nativeTick() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  state.velocity = window.scrollY - state.y;
  state.y = window.scrollY;
  state.progress = max > 0 ? window.scrollY / max : 0;
  listeners.forEach((fn) => fn(state));
}

export const onScroll = (fn: (state: ScrollState) => void) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

export const getScroll = () => state;

export const stopScroll = () => lenis?.stop();
export const startScroll = () => lenis?.start();

export function resetScroll() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo(0, 0);
  state.y = 0;
  state.velocity = 0;
}

export function scrollToTarget(target: string | HTMLElement | number) {
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 4) });
    return;
  }
  if (typeof target === "number") {
    window.scrollTo({ top: target });
    return;
  }
  const element = typeof target === "string" ? document.querySelector(target) : target;
  element?.scrollIntoView({ block: "start" });
}
