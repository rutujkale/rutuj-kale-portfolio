import type { ReactNode } from "react";

export function TechTag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>;
}
