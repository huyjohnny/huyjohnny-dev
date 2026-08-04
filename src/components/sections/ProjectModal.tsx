"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "../../content/projects/projects";
import Tag from "../ui/Tag";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [visible, setVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => setVisible(true));

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    const focusTarget = panelRef.current?.querySelector<HTMLElement>("button, a[href]");
    focusTarget?.focus();

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${project.id}-title`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className={`fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4 backdrop-blur-sm transition duration-200 motion-reduce:transition-none ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        ref={panelRef}
        className={`w-[92vw] max-w-3xl rounded-xl border border-border/40 bg-surface p-5 shadow-modal transition duration-200 motion-reduce:transition-none md:p-6 ${
          visible ? "scale-100 opacity-100" : "scale-[0.97] opacity-0"
        }`}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 id={`${project.id}-title`} className="text-2xl font-semibold tracking-tight text-text">
              {project.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{project.description}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-border/40 bg-bg/30 px-3 py-1.5 text-sm text-muted transition hover:bg-surface-2 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            Close
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 8).map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">What I did</h4>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              {project.bullets.slice(0, 6).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-lg border border-border/40 bg-bg/30">
            {project.coverImage ? (
              <Image
                src={project.coverImage.src}
                alt={project.coverImage.alt}
                width={960}
                height={640}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="grid h-full min-h-44 place-items-center p-4 text-center text-sm text-muted">
                Media preview placeholder
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.appStore ? (
            <a
              href={project.links.appStore}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              App Store
            </a>
          ) : null}
          {project.links.live ? (
            <div className="group relative">
              {project.links.liveNote ? (
                <button
                  type="button"
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed items-center rounded-lg bg-accent/70 px-4 py-2 text-sm font-semibold text-bg/80"
                >
                  Live Demo
                </button>
              ) : (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg transition hover:shadow-glow-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  Live Demo
                </a>
              )}
              {project.links.liveNote ? (
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border/50 bg-surface px-2.5 py-1 text-xs text-text opacity-0 shadow-card transition group-hover:opacity-100">
                  {project.links.liveNote}
                </span>
              ) : null}
            </div>
          ) : null}
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg border border-border/50 px-4 py-2 text-sm font-medium text-text transition hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
