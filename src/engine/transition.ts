import { gsap } from "gsap";
import { ease, prefersReducedMotion } from "./env";

export type Transition = {
  leave: (curtain: HTMLElement) => Promise<unknown> | gsap.core.Animation;
  enter: (curtain: HTMLElement) => Promise<unknown> | gsap.core.Animation;
};

const panel = (curtain: HTMLElement) =>
  curtain.querySelector<HTMLElement>(".curtain__panel");
const line = (curtain: HTMLElement) =>
  curtain.querySelector<HTMLElement>(".curtain__line");

const current: Transition = {
  leave: (curtain) =>
    gsap
      .timeline()
      .set(curtain, { autoAlpha: 1 })
      .fromTo(
        line(curtain),
        { scaleX: 0, opacity: 1, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.45, ease: ease.inOut },
      )
      .fromTo(
        panel(curtain),
        { yPercent: 100 },
        { yPercent: 0, duration: 0.65, ease: ease.inOut },
        "-=0.15",
      )
      .to(line(curtain), { opacity: 0, duration: 0.2 }, "-=0.15"),
  enter: (curtain) =>
    gsap
      .timeline()
      .to(panel(curtain), { yPercent: -100, duration: 0.85, ease: ease.inOut })
      .set(curtain, { autoAlpha: 0 })
      .set(panel(curtain), { yPercent: 100 }),
};

const reduced: Transition = {
  leave: (curtain) =>
    gsap.timeline().set(curtain, { autoAlpha: 1 }).fromTo(curtain, { opacity: 0 }, { opacity: 1, duration: 0.18 }),
  enter: (curtain) => gsap.to(curtain, { autoAlpha: 0, duration: 0.18 }),
};

let active = current;

export const setTransition = (transition: Transition) => {
  active = transition;
};

const pick = () => (prefersReducedMotion() ? reduced : active);
const getCurtain = () => document.getElementById("curtain") as HTMLElement;

export const playLeave = () => Promise.resolve(pick().leave(getCurtain()));
export const playEnter = () => Promise.resolve(pick().enter(getCurtain()));
