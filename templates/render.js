// Renders the templates to PNG.
// Usage: npm i playwright && node templates/render.js
const { chromium } = require('playwright');
const path = require('path');

const jobs = [
  // [html file, element id, output path relative to repo root]
  ['featured-cards.html', 'c1', 'assets/featured/featured-1-portfolio.png'],
  ['featured-cards.html', 'c2', 'assets/featured/featured-2-github.png'],
  ['featured-cards.html', 'c3', 'assets/featured/featured-3-blog.png'],
  ['assets.html', 'cover', 'assets/cover/linkedin-cover.png'],
  ['assets.html', 'blog', 'assets/blog/blog-cover-template.png'],
  ['assets.html', 'post', 'assets/post/post-square-template.png'],
  ['assets.html', 'slide', 'assets/post/carousel-slide-template.png'],
  ['assets.html', 'diagram', 'assets/diagram/architecture-diagram-example.png'],
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1700, height: 1000 }, deviceScaleFactor: 1 });
  let current = null;
  for (const [file, id, out] of jobs) {
    if (current !== file) {
      await page.goto('file://' + path.resolve(__dirname, file));
      await page.waitForTimeout(400);
      current = file;
    }
    await page.locator('#' + id).screenshot({ path: path.resolve(__dirname, '..', out) });
    console.log('rendered', out);
  }

  // Logo PNGs from the SVGs
  for (const name of ['logo-mark', 'logo-mark-outline']) {
    const svg = path.resolve(__dirname, '..', 'assets/logo', name + '.svg');
    const p = await browser.newPage({ viewport: { width: 512, height: 512 } });
    await p.goto('file://' + svg);
    await p.screenshot({ path: path.resolve(__dirname, '..', 'assets/logo', name + '.png'), omitBackground: true });
    await p.close();
    console.log('rendered logo', name);
  }
  await browser.close();
})();
