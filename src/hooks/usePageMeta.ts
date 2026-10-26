import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { absoluteUrl } from "../data/site";

function setMeta(selector: string, attribute: "content" | "href", value: string) {
  let element = document.head.querySelector<HTMLElement>(selector);
  if (!element) {
    element = document.createElement(selector.startsWith("link") ? "link" : "meta");
    if (selector.startsWith('meta[name="')) {
      element.setAttribute("name", selector.split('"')[1]);
    }
    if (selector.startsWith('meta[property="')) {
      element.setAttribute("property", selector.split('"')[1]);
    }
    if (selector.startsWith("link")) {
      element.setAttribute("rel", "canonical");
    }
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

export function usePageMeta(title: string, description?: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = absoluteUrl(pathname);
    document.title = title;
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[name="twitter:title"]', "content", title);

    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:description"]', "content", description);
    }
  }, [title, description, pathname]);
}
