import { gsap } from "gsap";
import { isTouch, prefersReducedMotion } from "./env";

export function initFill(root: ParentNode = document) {
  if (isTouch() || prefersReducedMotion()) return;

  root.querySelectorAll<HTMLElement>("[data-fill]").forEach((element) => {
    const fill = element.querySelector<HTMLElement>(".btn__fill");
    if (!fill) return;

    let closed = true;
    const point = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      return `${event.clientX - rect.left}px ${event.clientY - rect.top}px`;
    };

    const open = (at: string) => {
      if (closed) gsap.set(fill, { clipPath: `circle(0% at ${at})` });
      closed = false;
      element.classList.add("is-filled");
      gsap.to(fill, {
        clipPath: `circle(150% at ${at})`,
        duration: 0.55,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const close = (at: string) => {
      element.classList.remove("is-filled");
      gsap.to(fill, {
        clipPath: `circle(0% at ${at})`,
        duration: 0.45,
        ease: "power3.out",
        overwrite: true,
        onComplete: () => {
          closed = true;
        },
      });
    };

    element.addEventListener("pointerenter", (event) => open(point(event)));
    element.addEventListener("pointerleave", (event) => close(point(event)));
    element.addEventListener("focus", () => {
      if (element.matches(":focus-visible")) open("50% 50%");
    });
    element.addEventListener("blur", () => close("50% 50%"));
  });
}
