import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../data/profile";
import { startScroll, stopScroll } from "../engine";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { cn } from "../lib/cn";
import { ButtonLink } from "./Button";

const HOME_SECTIONS = ["work", "background", "skills"] as const;

const navLinks = [
  { id: "work", label: "Work", index: "01" },
  { id: "background", label: "Background", index: "02" },
  { id: "skills", label: "Skills", index: "03" },
  { id: "contact", label: "Contact", index: "04" },
] as const;

function useLocalTime() {
  const [time, setTime] = useState(() =>
    new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    }).format(new Date()),
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }).format(new Date()),
      );
    }, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isContact = pathname.startsWith("/contact");
  const isProject = pathname.startsWith("/projects");
  const activeSection = useScrollSpy(HOME_SECTIONS);
  const time = useLocalTime();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const isActive = (id: string) => {
    if (id === "work") return isProject || (isHome && activeSection === "work");
    if (id === "contact") return isContact;
    return isHome && activeSection === id;
  };

  const to = (id: string) => {
    if (id === "contact") return "/contact";
    return isHome ? `#${id}` : `/#${id}`;
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.documentElement.classList.add("menu-open");
    stopScroll();
    const frame = requestAnimationFrame(() => firstLinkRef.current?.focus());
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKeyDown);
      document.documentElement.classList.remove("menu-open");
      startScroll();
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ground">
      <nav className="site-container flex h-[var(--header-h)] items-center justify-between gap-4" aria-label="Primary">
        <Link to="/" className="group flex min-h-10 items-center">
          <span className="font-mono text-[0.6875rem] font-medium tracking-[0.13em] text-ink transition-colors group-hover:text-accent">
            RUTUJ KALE
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={to(link.id)}
                className="nav-link"
                aria-current={isActive(link.id) ? "true" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <span className="label hidden tabular-nums xl:inline" aria-label={`Local time ${time} India Standard Time`}>
            {time} IST
          </span>
          <ButtonLink
            href={profile.resumeUrl}
            download
            variant="secondary"
            icon={false}
            className="hidden md:inline-flex"
          >
            Resume
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            className="relative flex h-11 w-11 items-center justify-center border border-line-strong text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span
                className={cn(
                  "absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-200",
                  open && "top-1.5 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-px w-5 bg-current transition-opacity duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 h-px w-5 bg-current transition-transform duration-200",
                  open && "top-1.5 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 top-[var(--header-h)] z-40 overflow-y-auto border-t border-line bg-ground md:hidden"
        >
          <div className="flex min-h-full flex-col justify-between px-[var(--gutter)] pb-8 pt-6">
            <nav aria-label="Mobile">
              {navLinks.map((link, index) => (
                <Link
                  key={link.id}
                  ref={index === 0 ? firstLinkRef : undefined}
                  to={to(link.id)}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-line py-5"
                  aria-current={isActive(link.id) ? "true" : undefined}
                >
                  <span
                    className={cn(
                      "font-display text-[clamp(2rem,9vw,3.5rem)] leading-none tracking-[-0.04em]",
                      isActive(link.id) && "text-accent",
                    )}
                  >
                    {link.label}
                  </span>
                  <span className="label label-accent">{link.index}</span>
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-4">
              <ButtonLink href={profile.resumeUrl} download className="w-full">
                Download resume
              </ButtonLink>
              <div className="flex items-center justify-between gap-4">
                <a href={`mailto:${profile.email}`} className="link-inline text-s">
                  {profile.email}
                </a>
                <span className="label">{time} IST</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
