import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ease, prefersReducedMotion } from "./env";

gsap.registerPlugin(ScrollTrigger, SplitText);

const durations = { lines: 1.15, words: 1.05, chars: 0.85 } as const;
const staggers = { lines: 0.075, words: 0.03, chars: 0.016 } as const;

function splitTween(el: HTMLElement, isIntro: boolean) {
  const type = (el.dataset.split || "lines") as keyof typeof durations;
  const delay = parseFloat(el.dataset.delay || "0");
  let tween: gsap.core.Tween | undefined;

  SplitText.create(el, {
    type: type === "lines" ? "lines" : `lines,${type}`,
    mask: "lines",
    autoSplit: false,
    linesClass: "split-line",
    onSplit(self) {
      gsap.set(el, { visibility: "visible" });
      const targets =
        type === "lines" ? self.lines : type === "words" ? self.words : self.chars;

      tween = gsap.from(targets, {
        yPercent: 112,
        rotate: type === "chars" ? 0 : 1.5,
        duration: durations[type],
        stagger: staggers[type],
        ease: ease.out,
        delay,
        scrollTrigger: isIntro
          ? undefined
          : { trigger: el, start: "top 88%", once: true },
      });
      return tween;
    },
  });

  return tween;
}

function blockTween(el: HTMLElement, isIntro: boolean) {
  const kind = el.dataset.reveal || "up";
  const delay = parseFloat(el.dataset.delay || "0");
  const from: gsap.TweenVars =
    kind === "fade"
      ? { autoAlpha: 0 }
      : kind === "clip"
        ? { clipPath: "inset(100% 0% 0% 0%)", autoAlpha: 1 }
        : kind === "scale"
          ? { scale: 1.04, clipPath: "inset(8% 8% 8% 8%)", autoAlpha: 1 }
          : { y: 34, autoAlpha: 0 };

  const to: gsap.TweenVars =
    kind === "clip" || kind === "scale"
      ? { clipPath: "inset(0% 0% 0% 0%)", scale: 1 }
      : {};

  gsap.set(el, { visibility: "visible" });

  return gsap.fromTo(el, from, {
    ...to,
    y: 0,
    autoAlpha: 1,
    duration: kind === "fade" ? 0.9 : 1.2,
    ease: ease.out,
    delay,
    scrollTrigger: isIntro ? undefined : { trigger: el, start: "top 90%", once: true },
  });
}

export function initReveals(root: ParentNode = document) {
  const intro = gsap.timeline({ paused: true });
  if (prefersReducedMotion()) return intro;

  root.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
    const tween = splitTween(el, el.hasAttribute("data-intro"));
    if (tween && el.hasAttribute("data-intro")) intro.add(tween, 0);
  });

  root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    const isIntro = el.hasAttribute("data-intro");
    const tween = blockTween(el, isIntro);
    if (isIntro) intro.add(tween, 0);
  });

  root.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
    const amount = parseFloat(el.dataset.parallax || "0.12");
    gsap.fromTo(
      el,
      { yPercent: -amount * 100 },
      {
        yPercent: amount * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement || el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  });

  return intro;
}
