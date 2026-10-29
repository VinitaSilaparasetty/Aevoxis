import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
// Writes every route as complete HTML, plus sitemap.xml, rss.xml, llms.txt
// and llms-full.txt, so crawlers and AI tools get real content without
// running JavaScript.

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dist = resolve(root, 'dist');
const ssrDir = resolve(root, 'dist-ssr');

// vite.config.ts hashes output file names, so look the entry up.
const entryFile = readdirSync(ssrDir, { recursive: true }).find((f) => /entry-server[^/\\]*\.js$/.test(f));
if (!entryFile) throw new Error('Server bundle not found in dist-ssr');
const { render, allRoutes, getMeta, canonicalFor, blogPosts, SITE_URL, PERSONAL_SITE_URL } = await import(
  pathToFileURL(resolve(ssrDir, entryFile)).href
);

const template = readFileSync(resolve(dist, 'index.html'), 'utf-8');
if (!template.includes('<!--app-head-->')) throw new Error('index.html is missing the <!--app-head--> marker');

const page = ({ html, head, lang }) =>
  template
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace('<!--app-head-->', head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

const routes = allRoutes();
for (const route of routes) {
  const out = route === '/' ? resolve(dist, 'index.html') : resolve(dist, route.slice(1), 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, page(render(route)));
  console.log(`  ✓ ${route}`);
}

// GitHub Pages serves 404.html for unknown paths: keep it a client-rendered
// fallback (empty root) so the router decides, and keep it out of search.
writeFileSync(
  resolve(dist, '404.html'),
  template.replace('<!--app-head-->', '<meta name="robots" content="noindex">'),
);
console.log('  ✓ 404.html (SPA fallback)');

// sitemap.xml: indexable pages under their canonical URL, once each.
const today = new Date().toISOString().slice(0, 10);
const seen = new Set();
const urls = [];
for (const route of routes) {
  const meta = getMeta(route);
  if (!meta || meta.noindex || meta.redirectTo) continue;
  const loc = canonicalFor(meta);
  if (!loc.startsWith(SITE_URL) || seen.has(loc)) continue;
  seen.add(loc);
  const post = blogPosts.find((p) => loc.endsWith(`/${p.slug}`));
  urls.push({ loc, lastmod: post?.dateModifiedISO ?? post?.datePublishedISO ?? today });
}
writeFileSync(
  resolve(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n') +
    `\n</urlset>\n`,
);
console.log(`  ✓ sitemap.xml (${urls.length} URLs)`);

const xml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const postUrl = (p) => p.canonicalUrl ?? `${SITE_URL}${p.canonicalPath}`;
const byDate = [...blogPosts].sort((a, b) => (b.datePublishedISO ?? '').localeCompare(a.datePublishedISO ?? ''));

writeFileSync(
  resolve(dist, 'rss.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n<channel>\n` +
    `  <title>Aevoxis Insights</title>\n  <link>${SITE_URL}/blog</link>\n` +
    `  <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>\n` +
    `  <description>Technical articles on EU AI Act Articles 12–14 engineering.</description>\n  <language>en</language>\n` +
    byDate
      .map(
        (p) =>
          `  <item>\n    <title>${xml(p.title)}</title>\n    <link>${postUrl(p)}</link>\n    <guid>${postUrl(p)}</guid>\n` +
          (p.datePublishedISO ? `    <pubDate>${new Date(p.datePublishedISO).toUTCString()}</pubDate>\n` : '') +
          `    <description>${xml(p.metaDescription)}</description>\n  </item>`,
      )
      .join('\n') +
    `\n</channel>\n</rss>\n`,
);
console.log('  ✓ rss.xml');

// llms.txt (https://llmstxt.org): a short map of the site for AI tools, and
// llms-full.txt with the full text of every article.
const blockToMd = (b) => {
  switch (b.type) {
    case 'paragraph': return b.text;
    case 'h2': return `## ${b.text}`;
    case 'h3': return `### ${b.text}`;
    case 'code': return '```' + b.language + '\n' + b.code + '\n```';
    case 'preformatted': return '```\n' + b.content + '\n```';
    case 'unordered-list': return b.items.map((i) => `- ${i}`).join('\n');
    case 'faq': return '## Frequently asked questions\n\n' + b.items.map((i) => `### ${i.question}\n\n${i.answer}`).join('\n\n');
    case 'cta': return `**${b.heading}** ${b.body}`;
    case 'author-bio': return `${b.text}\n\n${b.disclosure}`;
    default: return '';
  }
};

const summary = `# Aevoxis Solutions

> Aevoxis builds tooling that makes AI systems meet EU AI Act Articles 12 (automatic logging), 13 (transparency) and 14 (human oversight) inside the system's own code path. Founded by Vinita Silaparasetty, AI Governance Engineer and Google Developer Expert in Machine Learning, based in Germany.

The working prototype is the Spec-Drift Chronometer: real-time drift detection against a human-approved specification, a Justification Gate that stops the system until a human records a reasoned decision, and a SHA-256-verifiable audit trail. It was a Top 300 finalist (of 10,000+ entries) in the AWS 10,000 AIdeas Competition 2025.

## Pages

- [Home](${SITE_URL}/): what Aevoxis builds and why
- [Articles 12–14 engineering](${SITE_URL}/services/eu-ai-act-engineering): engagements while the product is in development
- [About the founder](${SITE_URL}/about)
- [Early access](${SITE_URL}/early-access)
- [Contact](${SITE_URL}/contact)

## Articles

${byDate.map((p) => `- [${p.title}](${postUrl(p)}): ${p.metaDescription}`).join('\n')}

## Demo and code

- [Spec-Drift Chronometer live demo](https://spec-drift-chronometer.aevoxis.de)
- [Source code on GitHub](https://github.com/VinitaSilaparasetty/spec-drift_chronometer)

## Optional

- [Full text of all articles](${SITE_URL}/llms-full.txt)
- [Vinita Silaparasetty's personal site (book, courses, teaching)](${PERSONAL_SITE_URL}/)
`;
writeFileSync(resolve(dist, 'llms.txt'), summary);
writeFileSync(
  resolve(dist, 'llms-full.txt'),
  `# Aevoxis Solutions – full article text\n\n` +
    byDate
      .map((p) => `# ${p.title}\n\nURL: ${postUrl(p)}\nAuthor: ${p.author}, ${p.authorRole}\nPublished: ${p.datePublishedISO ?? p.publishedDate}\n\n${p.content.map(blockToMd).filter(Boolean).join('\n\n')}`)
      .join('\n\n---\n\n') + '\n',
);
console.log('  ✓ llms.txt, llms-full.txt');

rmSync(ssrDir, { recursive: true, force: true });
console.log(`\nPre-rendered ${routes.length} routes.`);
