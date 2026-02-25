"use client";

import Image from "next/image";
import { projects } from "../../content/projects/projects";
import { siteContent } from "../../content/site";

export default function HeroSection() {
  const { hero } = siteContent;
  const hasRole = Boolean(hero.role?.trim());
  const ctaLabelChars = hero.primaryCta.label.split("");
  const featuredProject = projects[0];
  const handleEnterClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById("projects");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#projects");
  };

  return (
    <section id="top" className="relative isolate min-h-[88svh] scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-15" aria-hidden />

      <div className="container-page min-h-[calc(88svh-var(--nav-height))] py-8 md:py-10">
        <div className="grid min-h-[calc(88svh-var(--nav-height))] items-center gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="text-[clamp(2.5rem,6vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-text">
              {hero.name}
            </h1>
            {hasRole ? (
              <p className="mt-2 max-w-lg text-[clamp(1.05rem,2.2vw,1.5rem)] font-medium leading-tight text-text/90">
                {hero.role}
              </p>
            ) : null}

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              {hero.summary}
            </p>

            <div className="mt-7">
              <a
                href={hero.primaryCta.href}
                onClick={handleEnterClick}
                className="group relative inline-flex items-center overflow-hidden rounded-xl border border-white/25 bg-accent px-5 py-3 text-sm font-semibold text-bg shadow-[0_12px_28px_rgba(var(--glow),.25),inset_0_1px_0_rgba(255,255,255,.3),inset_0_-1px_0_rgba(0,0,0,.14)] transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:shadow-glow-strong active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-[1px] rounded-[10px] bg-white/[0.03]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-2 top-1 h-1/2 rounded-full bg-gradient-to-b from-white/28 to-transparent"
                />
                <span className="relative z-20 inline-flex" aria-hidden>
                  {ctaLabelChars.map((char, index) => (
                    <span
                      key={`${char}-${index}`}
                      style={{ transitionDelay: `${index * 20}ms` }}
                      className="inline-block whitespace-pre transition-transform duration-350 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-[3px] group-focus-within:-translate-y-[3px]"
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
                <span className="sr-only">{hero.primaryCta.label}</span>
              </a>
            </div>

          </div>

          <div className="relative md:-translate-y-2">
            <div className="pointer-events-none absolute -inset-8 rounded-full bg-gradient-sunset opacity-55 blur-3xl" />
            <div className="relative aspect-[4/3] w-full">
              {hero.visual ? (
                <Image
                  src={hero.visual.src}
                  alt={hero.visual.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-2 md:p-3"
                />
              ) : featuredProject?.coverImage ? (
                <Image
                  src={featuredProject.coverImage.src}
                  alt={featuredProject.coverImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-accent-2/55 via-accent-4/42 to-accent-3/46" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
