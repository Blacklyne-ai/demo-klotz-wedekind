import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const urls = [
    { url: 'http://localhost:4402/partner',                        file: 'hero-partner.png' },
    { url: 'http://localhost:4402/ueber-uns',                      file: 'hero-ueber.png' },
    { url: 'http://localhost:4402/jobs',                           file: 'hero-jobs.png' },
    { url: 'http://localhost:4402/leistungen/lackiererei',         file: 'hero-lackiererei.png' },
    { url: 'http://localhost:4402/leistungen/nutzfahrzeug-service', file: 'hero-nfz.png' },
  ];
  for (const u of urls) {
    await page.goto(u.url, { waitUntil: 'networkidle' });
    await page.evaluate(() => { try { localStorage.setItem('klotz-wedekind-cookie-consent', 'accepted'); document.getElementById('cookie-banner')?.remove(); } catch(e){} });
    await page.waitForTimeout(300);
    await page.screenshot({ path: `docs/${u.file}` });
    console.log('OK', u.file);
  }
  await browser.close();
})();
