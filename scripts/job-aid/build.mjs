// Renders the one-page job aid to public/downloads as a PDF.
// Run by hand after editing five-rules.html: node scripts/job-aid/build.mjs
// Needs Playwright with Chromium; it is not part of `npm run build`.
import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const here = dirname(fileURLToPath(import.meta.url));
const src = resolve(here, 'five-rules.html');
const outDir = resolve(here, '../../public/downloads');
mkdirSync(outDir, { recursive: true });
const out = resolve(outDir, 'five-rules-before-you-hit-enter.pdf');

// Set CHROMIUM_PATH if the Playwright-managed browser isn't installed.
const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
);
const page = await browser.newPage();
await page.goto(pathToFileURL(src).href);
const overflow = await page.evaluate(() => document.body.scrollHeight - document.body.clientHeight);
if (overflow > 1) console.warn(`Warning: content runs ${overflow}px past one A4 page.`);
await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log(`Wrote ${out}`);
