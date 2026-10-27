import { gsap } from "gsap";
import { isTouch, onScroll, prefersReducedMotion } from "../engine";
import { getScroll } from "../engine/scroll";

export type TracePreset = {
  frequency: number;
  amplitude: number;
  noise: number;
  phase: number;
  speed: number;
};

export const tracePresets: Record<string, TracePreset> = {
  fraudlens: { frequency: 2.1, amplitude: 0.55, noise: 0.62, phase: 0.2, speed: 0.55 },
  "chain-bi": { frequency: 1.15, amplitude: 0.72, noise: 0.38, phase: 1.1, speed: 0.35 },
  "smart-traffic": { frequency: 3.35, amplitude: 0.46, noise: 0.8, phase: 2.2, speed: 0.75 },
  "disaster-preparedness": { frequency: 0.82, amplitude: 0.76, noise: 0.48, phase: 0.6, speed: 0.3 },
  "pdf-audiobook-generator": { frequency: 4.7, amplitude: 0.34, noise: 0.7, phase: 1.7, speed: 0.9 },
};

type InstrumentState = {
  patch: string;
  tuning: number;
  pointerX: number;
  pointerY: number;
};

const state: InstrumentState = {
  patch: "fraudlens",
  tuning: 0,
  pointerX: 0,
  pointerY: 0,
};

const listeners = new Set<() => void>();
let started = false;

export const setPatch = (patch: string) => {
  if (state.patch === patch) return;
  state.patch = patch;
  listeners.forEach((fn) => fn());
};

export const getInstrument = () => state;

export const subscribeInstrument = (fn: () => void) => {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
};

export function initInstrument() {
  if (started) return;
  started = true;

  const syncTuning = () => {
    const viewport = window.innerHeight || 1;
    state.tuning = gsap.utils.clamp(0, 1, getScroll().y / viewport);
  };
  syncTuning();
  onScroll(syncTuning);
  window.addEventListener("resize", syncTuning, { passive: true });

  if (!prefersReducedMotion() && !isTouch()) {
    window.addEventListener(
      "pointermove",
      (event) => {
        state.pointerX = event.clientX / window.innerWidth - 0.5;
        state.pointerY = event.clientY / window.innerHeight - 0.5;
      },
      { passive: true },
    );
  }
}
