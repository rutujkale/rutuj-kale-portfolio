import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { boot, enter, leave, scrollToTarget } from "./index";
import { setupMotion } from "../motion/setup";

export function EngineRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  const lastKey = useRef(`${location.pathname}${location.search}`);
  const pending = useRef(false);
  const transitioning = useRef(false);
  const booted = useRef(false);

  useEffect(() => {
    let alive = true;
    void boot(setupMotion).then(() => {
      if (!alive) return;
      booted.current = true;
      if (location.hash) scrollToTarget(location.hash);
    });
    return () => {
      alive = false;
    };
    // Boot once. Location changes are handled by the effects below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;
      if (!booted.current || transitioning.current) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      pending.current = true;
      transitioning.current = true;
      void leave()
        .catch(() => undefined)
        .then(() => {
          navigate(`${url.pathname}${url.search}${url.hash}`);
        });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [navigate]);

  useEffect(() => {
    const key = `${location.pathname}${location.search}`;
    if (key === lastKey.current) return;
    lastKey.current = key;
    if (!booted.current) return;

    const hadTransition = pending.current;
    pending.current = false;

    void enter({ transition: hadTransition, scrollTop: true })
      .catch(() => undefined)
      .finally(() => {
        transitioning.current = false;
      });
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!booted.current || !location.hash || transitioning.current) return;
    const target = window.setTimeout(() => scrollToTarget(location.hash), 60);
    return () => window.clearTimeout(target);
  }, [location.hash]);

  return null;
}
