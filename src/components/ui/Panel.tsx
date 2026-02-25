import type { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  className?: string;
};

export default function Panel({ children, className = "" }: PanelProps) {
  return <div className={`surface-panel p-5 md:p-6 ${className}`}>{children}</div>;
}
