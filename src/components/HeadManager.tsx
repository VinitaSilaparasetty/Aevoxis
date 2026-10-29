import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getMeta, headTags, NOT_FOUND_META } from "@/seo/meta";

// Keeps <head> in sync with the route on client-side navigation. The same
// tags are written into each page's HTML at build time (scripts/prerender.mjs),
// so crawlers that don't run JavaScript see them too.
export function HeadManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getMeta(pathname) ?? NOT_FOUND_META;
    document.documentElement.lang = meta.lang;
    document.head.querySelectorAll("[data-head]").forEach((el) => el.remove());
    const tpl = document.createElement("template");
    tpl.innerHTML = headTags(meta);
    tpl.content.querySelectorAll("[data-head]").forEach((el) => {
      // Scripts parsed via innerHTML don't count as script elements that run,
      // but JSON-LD doesn't need to run, only to be present.
      document.head.appendChild(el);
    });
  }, [pathname]);

  return null;
}
