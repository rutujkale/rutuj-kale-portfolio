export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const isTouch = () =>
  window.matchMedia("(hover: none), (pointer: coarse)").matches;

export const isMobile = () => window.matchMedia("(max-width: 767px)").matches;

export const ease = {
  out: "expo.out",
  inOut: "expo.inOut",
  soft: "power3.out",
  spring: "back.out(1.6)",
} as const;
