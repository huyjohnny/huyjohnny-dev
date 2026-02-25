import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-border/30 bg-bg/40 px-2.5 py-1 text-xs text-muted ${className}`}
    >
      {children}
    </span>
  );
}
