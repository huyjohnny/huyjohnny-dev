"use client";

import { FileText, Github, Linkedin } from "lucide-react";
import type { FormEvent } from "react";
import { siteContent } from "../../content/site";
import Panel from "../ui/Panel";

function SocialLink({
  href,
  label,
  tooltip,
  fillClass,
  hoverTextClass,
  tooltipClass,
  icon: Icon,
}: {
  href: string;
  label: string;
  tooltip: string;
  fillClass: string;
  hoverTextClass: string;
  tooltipClass: string;
  icon: typeof Github;
}) {
  const opensInNewTab = href.startsWith("http") || href.toLowerCase().endsWith(".pdf");

  return (
    <div className="group relative">
      <a
        href={href}
        target={opensInNewTab ? "_blank" : undefined}
        rel={opensInNewTab ? "noreferrer" : undefined}
        aria-label={label}
        title={tooltip}
        className={`relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-border/45 bg-bg/45 text-muted transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${hoverTextClass}`}
      >
        <span
          className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-within:scale-x-100 ${fillClass}`}
          aria-hidden
        />
        <Icon size={16} className="relative z-10" aria-hidden />
        <span className="sr-only">{label}</span>
      </a>
      <span
        className={`pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-[11px] font-medium text-white opacity-0 shadow-card transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 ${tooltipClass}`}
      >
        {tooltip}
      </span>
    </div>
  );
}

export default function ContactSection() {
  const { contact } = siteContent;
  const socials = contact.socials.map((item) => ({
    ...item,
    icon: item.label === "GitHub" ? Github : item.label === "LinkedIn" ? Linkedin : FileText,
    tooltip: item.label === "GitHub" ? "GitHub" : item.label === "LinkedIn" ? "LinkedIn" : "Resume",
    fillClass:
      item.label === "GitHub"
        ? "bg-[#24292f]"
        : item.label === "LinkedIn"
          ? "bg-[#0A66C2]"
          : "bg-accent",
    hoverTextClass:
      item.label === "GitHub"
        ? "group-hover:text-white group-focus-within:text-white group-hover:border-[#24292f] group-focus-within:border-[#24292f]"
        : item.label === "LinkedIn"
          ? "group-hover:text-white group-focus-within:text-white group-hover:border-[#0A66C2] group-focus-within:border-[#0A66C2]"
          : "group-hover:text-white group-focus-within:text-white group-hover:border-accent group-focus-within:border-accent",
    tooltipClass:
      item.label === "GitHub"
        ? "bg-[#24292f]"
        : item.label === "LinkedIn"
          ? "bg-[#0A66C2]"
          : "bg-accent",
  }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const senderEmail = String(formData.get("email") ?? "");
    const subject = String(formData.get("subject") ?? "");
    const message = String(formData.get("message") ?? "");
    const body = `From: ${senderEmail}\n\n${message}`;
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section-pad scroll-mt-24 bg-bg">
      <div className="container-page flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <div className="mb-6 border-l-4 border-accent-3 pl-4 md:mb-7 md:pl-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
            <h2 className="section-title">{contact.title}</h2>
            <p className="section-subtitle mt-2.5 max-w-xl text-sm md:text-base">
              {contact.subtitle}
            </p>
          </div>

          <Panel>
            <p className="text-xl font-semibold tracking-tight text-text">{contact.ctaLine}</p>
            <p className="mt-1.5 text-sm text-muted">{contact.supportLine}</p>

            <form onSubmit={handleSubmit} className="mx-auto mt-5 w-full max-w-xl space-y-3">
              <label className="block">
                <span className="sr-only">Your email</span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full rounded-lg border border-border/60 bg-bg/55 px-3.5 py-2.5 text-sm text-text placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                />
              </label>
              <label className="block">
                <span className="sr-only">Subject</span>
                <input
                  required
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full rounded-lg border border-border/60 bg-bg/55 px-3.5 py-2.5 text-sm text-text placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                />
              </label>
              <label className="block">
                <span className="sr-only">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Message"
                  className="w-full resize-y rounded-lg border border-border/60 bg-bg/55 px-3.5 py-2.5 text-sm text-text placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                />
              </label>
              <button
                type="submit"
                className="mx-auto flex items-center rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-bg transition hover:shadow-glow-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                Send
              </button>
            </form>

            <div className="mt-5 border-t border-border/50 pt-4">
              <p className="mb-2 text-xs uppercase tracking-[0.14em] text-muted-2">Elsewhere</p>
              <div className="flex flex-wrap items-center justify-center gap-1">
                {socials.map((item) => (
                  <SocialLink
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    tooltip={item.tooltip}
                    fillClass={item.fillClass}
                    hoverTextClass={item.hoverTextClass}
                    tooltipClass={item.tooltipClass}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
          </Panel>
        </div>

        <p className="mt-5 text-xs text-muted-2">{contact.footerNote}</p>
      </div>
    </section>
  );
}
