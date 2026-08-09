export function TechTag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded border border-outline-variant bg-surface-container-low px-2 py-1 font-mono text-xs text-on-surface-variant">
      {children}
    </span>
  );
}
