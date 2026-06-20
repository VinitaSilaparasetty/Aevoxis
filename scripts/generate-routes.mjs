import { readFileSync, mkdirSync, copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dist = resolve(root, 'dist');

// Extract blog slugs from source without needing TypeScript compilation
const blogPostsSource = readFileSync(resolve(root, 'src/data/blog-posts.ts'), 'utf-8');
const slugMatches = [...blogPostsSource.matchAll(/slug:\s*[`'"]([\w-]+)[`'"]/g)];
const blogSlugs = slugMatches
  .map(m => m[1])
  .filter(s => s !== 'slug' && s.length > 4);

const routes = [
  'services',
  'services/eu-ai-act-engineering',
  'services/technical-writing-curriculum',
  'about',
  'impressum',
  'datenschutz',
  'contact',
  'blog',
  'insights',
  ...blogSlugs.flatMap(slug => [`blog/${slug}`, `insights/${slug}`]),
];

for (const route of routes) {
  const dir = resolve(dist, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(resolve(dist, 'index.html'), resolve(dir, 'index.html'));
  console.log(`  ✓ ${route}/index.html`);
}

// Fallback for any path not pre-generated: GitHub Pages serves 404.html for unknown paths
copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
console.log('  ✓ 404.html (SPA fallback)');

console.log(`\nGenerated ${routes.length} static route files.`);
