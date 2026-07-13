"use client";

import { Dice2, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#about", label: "About", id: "about" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["top", "projects", "about", "contact"]
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));
    let frameId: number | null = null;

    const updateActiveSection = () => {
      frameId = null;
      const marker = window.innerHeight * 0.4;
      let currentSection = sections[0]?.id ?? "top";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      // The final section may be shorter than the viewport and never cross the marker.
      const atPageBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (atPageBottom && sections.at(-1)) {
        currentSection = sections.at(-1)!.id;
      }

      setActiveSection(currentSection);
    };

    const scheduleUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = savedTheme === "dark" || (!savedTheme && prefersDark) ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition ${
        scrolled ? "bg-bg/80" : "bg-bg/72"
      }`}
    >
      <div className="container-page">
        <nav className="relative grid h-[var(--nav-height)] grid-cols-[1fr_auto] items-center border-b border-border/70 md:grid-cols-[1fr_auto_1fr]">
          <a href="#top" className="inline-flex items-baseline">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-transparent text-text">
              <Dice2 size={16} strokeWidth={2} aria-hidden />
            </span>
          </a>

          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <li key={item.href} className="group relative">
                  <a
                    href={item.href}
                    className={`text-sm tracking-[0.03em] transition ${
                      active ? "text-text" : "text-muted hover:text-text"
                    } uppercase tracking-[0.14em]`}
                  >
                    {item.label}
                  </a>
                  <span
                    className={`absolute -bottom-[9px] left-1/2 h-[2px] w-8 -translate-x-1/2 origin-center bg-accent transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </li>
              );
            })}
          </ul>

          <div className="flex justify-self-end">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="hidden h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-transparent text-muted transition hover:border-border/80 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 md:inline-flex"
            >
              {theme === "dark" ? (
                <Sun size={15} strokeWidth={2} aria-hidden />
              ) : (
                <Moon size={15} strokeWidth={2} aria-hidden />
              )}
            </button>

            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="justify-self-end rounded-md border border-border/60 bg-surface px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-text transition hover:bg-surface-2 md:hidden"
            >
              Menu
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`container-page transition md:hidden ${
          menuOpen ? "max-h-72 pt-2 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <ul className="rounded-md border border-border/70 bg-surface/96 p-2 shadow-card">
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm uppercase tracking-[0.14em] transition ${
                    active
                      ? "bg-bg text-text shadow-[inset_0_0_0_1px_rgba(202,191,169,.75)]"
                      : "text-muted hover:bg-surface-2 hover:text-text"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
