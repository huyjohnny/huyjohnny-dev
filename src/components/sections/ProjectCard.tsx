import type { Project } from "../../content/projects/projects";
import Tag from "../ui/Tag";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project, trigger: HTMLButtonElement) => void;
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={(event) => onOpen(project, event.currentTarget)}
      className="card-edge group relative flex h-full min-h-[28rem] w-full transform-gpu flex-col rounded-xl border border-border/45 bg-surface p-5 text-left shadow-card transition-[transform,box-shadow,background-color,border-color] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:scale-[1.006] hover:border-border/70 hover:bg-surface/95 hover:shadow-[0_24px_54px_rgba(110,84,52,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      <div className="mb-4 overflow-hidden rounded-lg border border-border/45 bg-bg/40">
        <div className="relative h-64 w-full md:h-72">
          {project.coverImage ? (
            <img
              src={project.coverImage.src}
              alt={project.coverImage.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-end bg-gradient-to-br from-accent-2/40 via-accent-4/28 to-accent-3/35 p-3">
              <span className="rounded-md border border-border/50 bg-surface/85 px-2 py-1 text-[11px] uppercase tracking-[0.14em] text-muted-2">
                Preview
              </span>
            </div>
          )}
        </div>
      </div>
      {project.meta ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-2">{project.meta}</p>
      ) : null}

      <h3 className="text-xl font-semibold tracking-tight text-text transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0.5">
        {project.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:text-text">
        {project.oneLiner}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 3).map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-5">
        <div className="relative h-5 overflow-hidden">
          <span className="block text-sm text-muted transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-5 group-hover:opacity-0">
            View details
          </span>
          <span className="absolute inset-0 translate-y-5 text-sm text-text opacity-0 transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
            Open case study
          </span>
        </div>
        <span
          aria-hidden
          className="text-base text-muted transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1 group-hover:text-text"
        >
          →
        </span>
      </div>
    </button>
  );
}
