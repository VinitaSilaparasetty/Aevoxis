import { blogPosts, type BlogPost } from "@/data/blog-posts";
import { homeFaq, engagementFaq } from "@/data/site-content";

function faqPage(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export const SITE_URL = "https://aevoxis.de";
export const PERSONAL_SITE_URL = "https://vinitasilaparasetty.github.io";
export const SITE_NAME = "Aevoxis Solutions";
export const DEFAULT_IMAGE = `${SITE_URL}/favicon.png`;

export const AUTHOR = {
  "@type": "Person",
  "@id": `${SITE_URL}/about#vinita`,
  name: "Vinita Silaparasetty",
  jobTitle: "AI Governance Engineer",
  url: `${SITE_URL}/about`,
  sameAs: [
    "https://www.linkedin.com/in/vinita-silaparasetty",
    "https://github.com/VinitaSilaparasetty",
    "https://g.dev/vinitasilaparasetty",
    PERSONAL_SITE_URL,
  ],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Newcastle University" },
  knowsAbout: ["EU AI Act", "AI governance", "Human oversight of AI systems", "Machine learning", "Amazon Bedrock"],
};

export const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#org`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_IMAGE,
  email: "info@aevoxis.de",
  sameAs: ["https://www.linkedin.com/company/aevoxis-solutions/", "https://github.com/VinitaSilaparasetty"],
};

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  lang: "en" | "de";
  ogType?: "website" | "article";
  canonical?: string;
  noindex?: boolean;
  redirectTo?: string;
  keywords?: string[];
  jsonLd?: object[];
}

type StaticRoute = Omit<PageMeta, "path">;

const staticRoutes: Record<string, StaticRoute> = {
  "/": {
    title: "Aevoxis – EU AI Act tooling: Article 50 now, Articles 12–14 next",
    description:
      "Aevoxis builds EU AI Act compliance into your AI system: Article 50 transparency and content marking, which apply today, plus the Articles 12–14 logging and human-oversight duties that follow in December 2027.",
    lang: "en",
    jsonLd: [
      { "@context": "https://schema.org", ...ORGANIZATION },
      { "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: SITE_URL, publisher: { "@id": ORGANIZATION["@id"] } },
      faqPage(homeFaq),
    ],
  },
  "/services": {
    title: "Services – EU AI Act Article 50 and Articles 12–14 – Aevoxis",
    description:
      "Engineering engagements for the EU AI Act: Article 50 transparency and content marking, which apply today, and the Articles 12–14 logging, transparency and human-oversight duties that follow.",
    lang: "en",
  },
  "/services/eu-ai-act-engineering": {
    title: "EU AI Act Article 50 and Articles 12–14 Engineering – Aevoxis",
    description:
      "Gap analysis and implementation of Article 50 AI disclosure and content marking, which already apply, plus automatic logging (Art. 12), transparency (Art. 13) and human oversight (Art. 14) in production AI systems.",
    lang: "en",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "EU AI Act Article 50 and Articles 12–14 engineering",
        serviceType: "AI compliance engineering",
        provider: { "@id": ORGANIZATION["@id"] },
        areaServed: "European Union",
      },
      faqPage(engagementFaq),
    ],
  },
  "/services/technical-writing-curriculum": {
    title: "Curriculum Development & Technical Writing – Vinita Silaparasetty",
    description: "Curriculum development and technical writing services have moved to Vinita Silaparasetty's personal site.",
    lang: "en",
    noindex: true,
    redirectTo: `${PERSONAL_SITE_URL}/services.html`,
    canonical: `${PERSONAL_SITE_URL}/services.html`,
  },
  "/about": {
    title: "About Vinita Silaparasetty – Aevoxis Solutions",
    description:
      "Vinita Silaparasetty is an AI Governance Engineer, Google Developer Expert in Machine Learning and Apress author, building Aevoxis in Germany.",
    lang: "en",
    jsonLd: [{ "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: AUTHOR }],
  },
  "/about/my-story": {
    title: "My Story: From a VR Headset to AI Governance – Vinita Silaparasetty",
    description:
      "Vinita Silaparasetty paused her fashion degree to design a dual-purpose VR headset (Indian Design Patent IN 307907). The same design-first approach drives her EU AI Act work today.",
    lang: "en",
    ogType: "article",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "From a VR Headset to AI Governance",
        url: `${SITE_URL}/about/my-story`,
        inLanguage: "en",
        author: AUTHOR,
      },
    ],
  },
  "/work/in-house-ai-support-chatbot": {
    title: "Case Study: Scoping an In-House AI Support Chatbot",
    description:
      "Independent consulting work from early 2025: why a vendor chatbot fell short, a Rasa and Claude design, and a four-week pilot with one success metric.",
    lang: "en",
    ogType: "article",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Scoping an In-House AI Support Chatbot",
        description:
          "Case study: replacing a vendor chatbot, starting with a four-week pilot. Independent consulting work completed in early 2025.",
        url: `${SITE_URL}/work/in-house-ai-support-chatbot`,
        inLanguage: "en",
        author: AUTHOR,
      },
    ],
  },
  "/work/illustrative-scenarios": {
    title: "Illustrative Scenarios: EU AI Act Engineering – Aevoxis",
    description:
      "Worked examples, not client case studies: how Aevoxis would approach Article 50 disclosure, content marking and Articles 12–14 logging and human oversight.",
    lang: "en",
    ogType: "article",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "How an Engagement Would Work: Illustrative Scenarios",
        description:
          "Illustrative scenarios with invented companies, not client work: Article 50(1) disclosure, Article 50(2) and 50(4) marking, and Articles 12–14 for a high-risk hiring tool.",
        url: `${SITE_URL}/work/illustrative-scenarios`,
        inLanguage: "en",
        author: AUTHOR,
      },
    ],
  },
  "/early-access": {
    title: "Early Access – Aevoxis: Article 50 now, Articles 12–14 next",
    description:
      "Join early access to Aevoxis: in-code tooling for EU AI Act Article 50 transparency and content marking, extending to the Articles 12–14 logging and human-oversight duties that apply from December 2027.",
    lang: "en",
  },
  "/contact": {
    title: "Contact – Article 50 and Articles 12–14 Engineering – Aevoxis",
    description: "Contact Aevoxis Solutions about EU AI Act engineering for your AI system: Article 50 transparency today, Articles 12–14 next.",
    lang: "en",
  },
  "/blog": {
    title: "Insights on EU AI Act Engineering – Aevoxis",
    description:
      "Technical articles on EU AI Act compliance engineering: audit logging, transparency and human oversight in real AI systems.",
    lang: "en",
  },
  "/insights": {
    title: "Insights on EU AI Act Engineering – Aevoxis",
    description:
      "Technical articles on EU AI Act compliance engineering: audit logging, transparency and human oversight in real AI systems.",
    lang: "en",
    canonical: `${SITE_URL}/blog`,
  },
  "/impressum": {
    title: "Impressum – Aevoxis Solutions",
    description: "Impressum und Anbieterkennzeichnung von Aevoxis Solutions, Mitglied der SMartDE e. G.",
    lang: "de",
  },
  "/datenschutz": {
    title: "Datenschutzerklärung – Aevoxis Solutions",
    description: "Datenschutzerklärung von Aevoxis Solutions gemäß DSGVO.",
    lang: "de",
  },
};

export const NOT_FOUND_META: PageMeta = {
  title: "Page not found – Aevoxis Solutions",
  description: "This page does not exist.",
  path: "/404",
  lang: "en",
  noindex: true,
};

function postMeta(post: BlogPost, path: string): PageMeta {
  const canonical = post.canonicalUrl ?? `${SITE_URL}${post.canonicalPath}`;
  const title = post.metaTitle ?? `${post.title} – Aevoxis`;
  const jsonLd: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: post.title,
      description: post.metaDescription,
      url: canonical,
      mainEntityOfPage: canonical,
      inLanguage: "en",
      ...(post.datePublishedISO ? { datePublished: post.datePublishedISO, dateModified: post.dateModifiedISO ?? post.datePublishedISO } : {}),
      author: { ...AUTHOR, jobTitle: post.authorRole },
      publisher: ORGANIZATION,
      ...(post.keywords ? { keywords: post.keywords.join(", ") } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: canonical },
      ],
    },
  ];
  const faq = post.content.find((b): b is Extract<typeof b, { type: "faq" }> => b.type === "faq");
  if (faq) jsonLd.push(faqPage(faq.items));
  if (post.howTo) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: post.howTo.name,
      step: post.howTo.steps.map((s) => ({ "@type": "HowToStep", name: s.name, text: s.text })),
    });
  }
  return {
    title,
    description: post.metaDescription,
    path,
    lang: "en",
    ogType: "article",
    canonical,
    keywords: post.keywords,
    jsonLd,
  };
}

/** Metadata for any route path; null when the path doesn't exist. */
export function getMeta(pathname: string): PageMeta | null {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const route = staticRoutes[path];
  if (route) return { ...route, path };
  const m = path.match(/^\/(blog|insights)\/([\w-]+)$/);
  if (m) {
    const post = blogPosts.find((p) => p.slug === m[2]);
    if (post) return postMeta(post, path);
  }
  return null;
}

export function canonicalFor(meta: PageMeta): string {
  return meta.canonical ?? `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;
}

/** Every route to pre-render at build time. */
export function allRoutes(): string[] {
  return [
    ...Object.keys(staticRoutes),
    ...blogPosts.flatMap((p) => [`/blog/${p.slug}`, `/insights/${p.slug}`]),
  ];
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** The <head> tags for a page, as an HTML string (used when pre-rendering). */
export function headTags(meta: PageMeta): string {
  const canonical = canonicalFor(meta);
  const tags = [
    `<title data-head>${esc(meta.title)}</title>`,
    `<meta data-head name="description" content="${esc(meta.description)}">`,
    `<link data-head rel="canonical" href="${esc(canonical)}">`,
    `<meta data-head property="og:title" content="${esc(meta.title)}">`,
    `<meta data-head property="og:description" content="${esc(meta.description)}">`,
    `<meta data-head property="og:type" content="${meta.ogType ?? "website"}">`,
    `<meta data-head property="og:url" content="${esc(canonical)}">`,
    `<meta data-head property="og:site_name" content="${SITE_NAME}">`,
    `<meta data-head property="og:image" content="${DEFAULT_IMAGE}">`,
    `<meta data-head property="og:locale" content="${meta.lang === "de" ? "de_DE" : "en_GB"}">`,
    `<meta data-head name="twitter:card" content="summary">`,
    `<meta data-head name="twitter:title" content="${esc(meta.title)}">`,
    `<meta data-head name="twitter:description" content="${esc(meta.description)}">`,
  ];
  if (meta.keywords?.length) tags.push(`<meta data-head name="keywords" content="${esc(meta.keywords.join(", "))}">`);
  if (meta.noindex) tags.push(`<meta data-head name="robots" content="noindex, follow">`);
  if (meta.redirectTo) tags.push(`<meta data-head http-equiv="refresh" content="0; url=${esc(meta.redirectTo)}">`);
  for (const ld of meta.jsonLd ?? []) {
    tags.push(`<script data-head type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>`);
  }
  return tags.join("\n    ");
}
