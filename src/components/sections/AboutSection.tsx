import { Code2, Coffee, CookingPot, Music2, Sparkles } from "lucide-react";
import Image from "next/image";
import { siteContent } from "../../content/site";
import Panel from "../ui/Panel";
import Tag from "../ui/Tag";

const personalityIcons: Record<string, typeof Coffee> = {
  Coffee,
  Cooking: CookingPot,
  Coding: Code2,
  Music: Music2,
};

export default function AboutSection() {
  const { about } = siteContent;

  return (
    <section id="about" className="section-pad scroll-mt-24 bg-bg">
      <div className="container-page">
        <div className="mb-6 border-l-4 border-accent-4 pl-4 md:mb-7 md:pl-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">About</p>
          <h2 className="section-title">About</h2>
          <p className="section-subtitle mt-2.5 text-sm md:text-base">
            {about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:items-stretch md:gap-7">
          <div className="md:col-span-7 md:h-full">
            <Panel className="h-full">
              <div className="mb-5 overflow-hidden rounded-xl bg-bg/35">
                {about.photo ? (
                  <Image
                    src={about.photo.src}
                    alt={about.photo.alt}
                    width={900}
                    height={1100}
                    className="h-auto w-full object-contain"
                  />
                ) : (
                  <div className="grid aspect-[4/5] place-items-center bg-gradient-to-br from-accent-4/20 via-surface to-accent-3/18 p-6 text-center">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-2">About Photo</p>
                      <p className="mt-2 text-sm text-muted">
                        Add your portrait at <code className="rounded bg-bg/50 px-1">/public/images/about.jpg</code>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-sm leading-relaxed text-muted md:text-base">
                {about.narrative}
              </p>

              <div className="mt-4 rounded-lg border border-border/30 bg-bg/30 px-4 py-3 text-sm text-muted">
                <span className="font-medium text-text">Currently:</span> {about.currently}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {about.personality.map((label) => {
                  const Icon = personalityIcons[label] ?? Sparkles;
                  return (
                    <Tag key={label} className="px-3 py-1">
                      <Icon size={14} className="text-muted-2" aria-hidden />
                      <span>{label}</span>
                    </Tag>
                  );
                })}
              </div>
            </Panel>
          </div>

          <div className="flex flex-col gap-3.5 md:col-span-5 md:h-full">
            <Panel className="flex-1">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                What I&apos;m good at
              </h3>
              <ul className="mt-4 space-y-2.5">
                {about.strengths.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel className="flex-1">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Toolbox</h3>
              <div className="mt-4 space-y-3">
                {about.toolbox.map((group) => (
                  <div key={group.group}>
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-2">
                      {group.group}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-muted">
                <Sparkles size={14} className="text-accent" aria-hidden />
                <span>{about.learning}</span>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
}
