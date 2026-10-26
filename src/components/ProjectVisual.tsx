import type { ReactNode } from "react";
import type { VisualVariant } from "../data/projects";
import { cn } from "../lib/cn";

interface ProjectVisualProps {
  variant: VisualVariant;
  title: string;
  className?: string;
}

const windowTitles: Record<VisualVariant, string> = {
  traffic: "traffic_monitor.py",
  disaster: "disaster_sim.unity",
  audiobook: "audio_player.py",
  fraud: "risk_console.py",
  chainbi: "chain_bi_dashboard.tsx",
};

export function ProjectVisual({ variant, title, className }: ProjectVisualProps) {
  return (
    <div
      role="img"
      aria-label={`Stylized interface preview for ${title}`}
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded border border-outline-variant bg-surface-container-lowest",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container px-3 py-2">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-surface-variant" />
          <span className="h-2 w-2 rounded-full bg-surface-variant" />
          <span className="h-2 w-2 rounded-full bg-surface-variant" />
        </div>
        <span className="font-mono text-[10px] tracking-[0.05em] text-on-surface-variant">
          {windowTitles[variant]}
        </span>
      </div>
      <div className="relative flex-1 p-4">{renderBody(variant)}</div>
    </div>
  );
}

function renderBody(variant: VisualVariant): ReactNode {
  switch (variant) {
    case "traffic":
      return <TrafficVisual />;
    case "disaster":
      return <DisasterVisual />;
    case "audiobook":
      return <AudiobookVisual />;
    case "fraud":
      return <FraudVisual />;
    case "chainbi":
      return <ChainBiVisual />;
  }
}

function TrafficVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded border border-outline-variant bg-surface-container-lowest">
      <div className="bg-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <span className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.05em] text-primary">
        STREAM: LIVE
      </span>
      <span className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.05em] text-on-surface-variant">
        DETECT | TRACK
      </span>
      <span className="absolute bottom-3 right-3 font-mono text-[10px] tracking-[0.05em] text-on-surface-variant">
        YOLO: ACTIVE
      </span>
      <div className="absolute left-[16%] top-[30%] h-16 w-24 rounded-sm border border-primary/70" aria-hidden="true" />
      <div className="absolute right-[22%] top-[22%] h-12 w-20 rounded-sm border border-primary/50" aria-hidden="true" />
      <div className="absolute bottom-[24%] left-[32%] h-14 w-24 rounded-sm border border-primary/60" aria-hidden="true" />
      <div className="absolute bottom-[18%] right-[10%] h-10 w-16 rounded-sm border border-outline-variant" aria-hidden="true" />
    </div>
  );
}

const disasterNodes = [
  { x: 64, y: 120 },
  { x: 150, y: 80 },
  { x: 240, y: 150 },
  { x: 320, y: 70 },
  { x: 205, y: 190 },
];

function DisasterVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded border border-outline-variant bg-surface-container-lowest">
      <div className="bg-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 360 240"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g stroke="#3c4a42" strokeWidth="1">
          <line x1="64" y1="120" x2="150" y2="80" />
          <line x1="150" y1="80" x2="240" y2="150" />
          <line x1="240" y1="150" x2="320" y2="70" />
          <line x1="150" y1="80" x2="205" y2="190" />
          <line x1="205" y1="190" x2="320" y2="70" />
        </g>
      </svg>
      <span className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.05em] text-primary">
        SIM: RUNNING
      </span>
      <span className="absolute bottom-3 right-3 font-mono text-[10px] tracking-[0.05em] text-on-surface-variant">
        NODE MAP
      </span>
      {disasterNodes.map((node) => (
        <span
          key={`${node.x}-${node.y}`}
          className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
          style={{ left: node.x, top: node.y }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

const audioBars = [
  30, 50, 38, 64, 42, 72, 55, 34, 60, 44, 28, 52, 66, 40, 58, 33, 47, 62, 38, 50,
];

function AudiobookVisual() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 rounded border border-outline-variant bg-surface-container-lowest px-6 py-4">
      <div className="flex h-24 w-full items-end justify-center gap-1.5" aria-hidden="true">
        {audioBars.map((height, index) => (
          <span
            key={index}
            className="w-1.5 rounded-sm bg-primary/70"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="flex w-full items-center gap-4">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-primary/50 text-primary"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <div className="relative h-1 flex-1 overflow-hidden rounded bg-outline-variant" aria-hidden="true">
          <span className="absolute inset-y-0 left-0 w-1/3 bg-primary" />
        </div>
        <span className="shrink-0 font-mono text-[10px] tracking-[0.05em] text-on-surface-variant">
          TTS: READY
        </span>
      </div>
    </div>
  );
}

const shapDrivers = [78, 54, 41, 29, 18];

function FraudVisual() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between gap-4 overflow-hidden rounded border border-outline-variant bg-surface-container-lowest p-4">
      <div className="bg-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="relative flex items-start justify-between">
        <div>
          <span className="block font-mono text-[10px] tracking-[0.05em] text-on-surface-variant">
            RISK SCORE
          </span>
          <span className="font-mono text-2xl font-semibold text-on-surface">73.2</span>
        </div>
        <span className="rounded border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[10px] tracking-[0.05em] text-primary">
          BLOCK
        </span>
      </div>
      <div className="relative h-1.5 w-full overflow-hidden rounded bg-outline-variant" aria-hidden="true">
        <span className="absolute inset-y-0 left-0 w-[73%] bg-primary" />
      </div>
      <div className="relative flex flex-col gap-1.5" aria-hidden="true">
        <span className="font-mono text-[10px] tracking-[0.05em] text-on-surface-variant">
          SHAP DRIVERS
        </span>
        {shapDrivers.map((width, index) => (
          <div key={index} className="h-1.5 w-full overflow-hidden rounded bg-outline-variant/50">
            <span className="block h-full rounded bg-primary/70" style={{ width: `${width}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

const chainBars = [42, 68, 55, 80, 36, 62, 47];

function ChainBiVisual() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between gap-4 overflow-hidden rounded border border-outline-variant bg-surface-container-lowest p-4">
      <div className="bg-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="relative flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.05em] text-primary">
          RETENTION: 21.1%
        </span>
        <span className="font-mono text-[10px] tracking-[0.05em] text-on-surface-variant">
          TOP 1%: 49% TX
        </span>
      </div>
      <div className="relative flex h-24 w-full items-end justify-center gap-2" aria-hidden="true">
        {chainBars.map((height, index) => (
          <span
            key={index}
            className="w-4 rounded-t-sm bg-primary/70"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <span className="relative font-mono text-[10px] tracking-[0.05em] text-on-surface-variant">
        RFM | COHORTS | DRIFT
      </span>
    </div>
  );
}
