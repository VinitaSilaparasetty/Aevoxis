import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes, Providers } from "./App";
import { allRoutes, getMeta, headTags, NOT_FOUND_META, SITE_URL, PERSONAL_SITE_URL, canonicalFor } from "./seo/meta";
import { blogPosts } from "./data/blog-posts";

// Build-time entry used by scripts/prerender.mjs to turn every route into
// complete HTML.
export function render(url: string) {
  const meta = getMeta(url) ?? NOT_FOUND_META;
  const html = renderToString(
    <Providers>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </Providers>,
  );
  return { html, head: headTags(meta), lang: meta.lang, meta };
}

export { allRoutes, getMeta, canonicalFor, blogPosts, SITE_URL, PERSONAL_SITE_URL };
