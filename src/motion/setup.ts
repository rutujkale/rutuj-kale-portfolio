import { gsap } from "gsap";
import { ease, setLoaderExit } from "../engine";
import { initInstrument } from "./instrument";

export function setupMotion() {
  initInstrument();

  setLoaderExit((root) =>
    gsap
      .timeline()
      .to(root.querySelector("[data-loader-count]"), {
        yPercent: -110,
        duration: 0.25,
        ease: ease.inOut,
      })
      .to(
        root.querySelectorAll("[data-loader-out]"),
        { yPercent: -110, duration: 0.4, ease: ease.inOut, stagger: 0.03 },
        "-=0.15",
      )
      .to(
        root.querySelector("[data-loader-line]"),
        { scaleX: 0, transformOrigin: "left center", duration: 0.35, ease: ease.inOut },
        "-=0.25",
      )
      .to(
        root,
        { clipPath: "inset(0% 0% 100% 0%)", duration: 0.5, ease: ease.inOut },
        "-=0.15",
      ),
  );
}
