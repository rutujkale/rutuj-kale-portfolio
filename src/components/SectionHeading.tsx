interface SectionHeadingProps {
  title: string;
  index?: string;
}

export function SectionHeading({ title, index }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="font-sans text-3xl font-semibold tracking-[-0.02em] text-on-surface">{title}</h2>
      <div className="h-px flex-1 bg-outline-variant" aria-hidden="true" />
      {index && <span className="shrink-0 font-mono text-sm text-on-surface-variant">{index}</span>}
    </div>
  );
}
