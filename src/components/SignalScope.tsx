import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { getInstrument, tracePresets, type TracePreset } from "../motion/instrument";
import { prefersReducedMotion } from "../engine";

const TAU = Math.PI * 2;

function lerp(current: number, target: number, amount: number) {
  return current + (target - current) * amount;
}

export function SignalScope({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reduced = prefersReducedMotion();
    let width = 0;
    let height = 0;
    let visible = true;

    const current: TracePreset = { ...tracePresets.fraudlens };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced) draw(0, true);
    };

    const draw = (time: number, still = false) => {
      if (!width || !height) return;
      const instrument = getInstrument();
      const target = tracePresets[instrument.patch] ?? tracePresets.fraudlens;
      const k = still ? 1 : 0.05;
      current.frequency = lerp(current.frequency, target.frequency, k);
      current.amplitude = lerp(current.amplitude, target.amplitude, k);
      current.noise = lerp(current.noise, target.noise, k);
      current.phase = lerp(current.phase, target.phase, k);
      current.speed = lerp(current.speed, target.speed, k);

      const tuning = still ? 1 : instrument.tuning;
      const pointerX = still ? 0 : instrument.pointerX;
      const pointerY = still ? 0 : instrument.pointerY;
      const drift = still ? 0 : Math.sin(time * 0.32) * 0.018;

      const center = height * 0.54;
      const amplitude = height * 0.22 * current.amplitude * (1 + pointerY * 0.12);
      const phase = current.phase + pointerX * 0.5 + drift;
      const noiseAmount = current.noise * (1 - tuning * 0.82);

      context.clearRect(0, 0, width, height);

      context.strokeStyle = "rgba(237, 232, 222, 0.08)";
      context.lineWidth = 1;
      for (let i = 1; i < 8; i += 1) {
        const x = (width / 8) * i;
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      context.strokeStyle = "rgba(237, 232, 222, 0.12)";
      context.beginPath();
      context.moveTo(0, center);
      context.lineTo(width, center);
      context.stroke();

      const points: Array<[number, number]> = [];
      const step = Math.max(2, width / 320);
      for (let x = 0; x <= width; x += step) {
        const u = x / width;
        const noise =
          Math.sin(u * 91 + time * 2.2) * Math.sin(u * 37 - time * 1.4) * 0.55 +
          Math.sin(u * 173 + time * 3.1) * 0.25;
        const wave =
          Math.sin(u * current.frequency * TAU + phase + time * current.speed) * 0.58 +
          Math.sin(u * current.frequency * 2.6 * TAU - phase * 1.4 - time * current.speed * 0.6) *
            0.24 +
          noise * noiseAmount;
        points.push([x, center + wave * amplitude * 2]);
      }

      const gradient = context.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "rgba(242, 180, 65, 0.16)");
      gradient.addColorStop(1, "rgba(242, 180, 65, 0)");
      context.beginPath();
      context.moveTo(0, height);
      points.forEach(([x, y]) => context.lineTo(x, y));
      context.lineTo(width, height);
      context.closePath();
      context.fillStyle = gradient;
      context.fill();

      context.strokeStyle = "rgba(242, 180, 65, 0.22)";
      context.lineWidth = 7;
      context.beginPath();
      points.forEach(([x, y], index) => {
        if (index === 0) context.moveTo(x, y - 1.5);
        else context.lineTo(x, y - 1.5);
      });
      context.stroke();

      context.strokeStyle = "#F2B441";
      context.lineWidth = 1.6;
      context.beginPath();
      points.forEach(([x, y], index) => {
        if (index === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      });
      context.stroke();

      const [lastX, lastY] = points[points.length - 1] ?? [0, center];
      context.beginPath();
      context.arc(lastX - 4, lastY, 3.2, 0, TAU);
      context.fillStyle = "#EDE8DE";
      context.fill();
      context.beginPath();
      context.arc(lastX - 4, lastY, 7, 0, TAU);
      context.strokeStyle = "rgba(242, 180, 65, 0.5)";
      context.lineWidth = 1;
      context.stroke();
    };

    const tick = (time: number) => {
      if (!visible) return;
      draw(time);
    };

    resize();

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(canvas);

    const intersection = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { rootMargin: "120px" },
    );
    intersection.observe(canvas);

    if (!reduced) {
      gsap.ticker.add(tick);
    } else {
      draw(0, true);
    }

    return () => {
      gsap.ticker.remove(tick);
      resizeObserver.disconnect();
      intersection.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
