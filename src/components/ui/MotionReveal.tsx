"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type MotionRevealProps = {
  children: ReactNode;
  delayMs?: number;
  className?: string;
};

export default function MotionReveal({ children, delayMs = 0, className = "" }: MotionRevealProps) {
  const [visible, setVisible] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={nodeRef}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`reveal-base ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
