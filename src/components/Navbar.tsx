import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../data/profile";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { cn } from "../lib/cn";
import { ButtonLink } from "./Button";

const HOME_SECTIONS = ["work", "background", "skills"] as const;

const navLinks = [
  { id: "work", label: "Work" },
  { id: "background", label: "Background" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isContact = pathname.startsWith("/contact");
  const isProject = pathname.startsWith("/projects");
  const activeSection = useScrollSpy(HOME_SECTIONS);

  const isActive = (id: string) => {
    if (id === "work") return isHome ? activeSection === "work" : isProject;
    if (id === "contact") return isContact;
    return isHome && activeSection === id;
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const linkClasses = cn(
    "rounded font-mono text-sm text-on-surface-variant transition-colors hover:text-primary"
  );

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant bg-surface/95 backdrop-blur">
      <nav className="site-container flex h-16 items-center justify-between" aria-label="Primary">
        <Link to="/" className="font-mono text-sm font-medium tracking-[0.05em] text-primary">
          {profile.name}
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={isHome && link.id !== "contact" ? `#${link.id}` : link.id === "contact" ? "/contact" : `/#${link.id}`}
              className={cn(linkClasses, isActive(link.id) && "text-primary")}
              aria-current={isActive(link.id) ? "true" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink href={profile.resumeUrl} download variant="secondary" className="px-4 py-2">
            Resume
          </ButtonLink>
        </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded border border-outline-variant text-on-surface md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-200",
                open && "top-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2 h-0.5 w-5 bg-current transition-opacity duration-200",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-4 h-0.5 w-5 bg-current transition-transform duration-200",
                open && "top-2 -rotate-45"
              )}
            />
          </span>
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-outline-variant bg-surface md:hidden">
          <nav className="site-container flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={isHome && link.id !== "contact" ? `#${link.id}` : link.id === "contact" ? "/contact" : `/#${link.id}`}
                onClick={() => setOpen(false)}
                className={cn(linkClasses, "px-2 py-3", isActive(link.id) && "text-primary")}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href={profile.resumeUrl} download variant="secondary" className="mt-2 w-full">
              Resume
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
