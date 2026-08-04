"use client";

import { useRef, useState } from "react";
import { siteContent } from "../../content/site";
import type { Project } from "../../content/projects/projects";
import { projects } from "../../content/projects/projects";
import MotionReveal from "../ui/MotionReveal";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const { projects: projectsCopy } = siteContent;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const openProject = (project: Project, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
    lastTriggerRef.current?.focus();
  };

  return (
    <section id="projects" className="section-pad scroll-mt-24 bg-bg">
      <div className="container-page">
        <MotionReveal className="mb-6 border-l-4 border-accent pl-4 md:mb-7 md:pl-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Projects</p>
          <h2 className="section-title">{projectsCopy.title}</h2>
          <p className="section-subtitle mt-2.5 text-sm md:text-base">{projectsCopy.subtitle}</p>
        </MotionReveal>

        <div className="grid grid-cols-1 gap-6 md:auto-rows-fr md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <MotionReveal key={project.id} delayMs={index * 90} className="h-full">
              <ProjectCard project={project} onOpen={openProject} />
            </MotionReveal>
          ))}
        </div>
      </div>

      {selectedProject ? <ProjectModal project={selectedProject} onClose={closeProject} /> : null}
    </section>
  );
}
