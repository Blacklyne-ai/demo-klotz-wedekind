import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto('http://localhost:4402/', { waitUntil: 'networkidle' });
  await page.evaluate(() => { try { localStorage.setItem('klotz-wedekind-cookie-consent', 'accepted'); document.getElementById('cookie-banner')?.remove(); } catch(e){} });
  const cta = await page.$('.final-cta');
  await cta.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'docs/sec-final-cta-real.png' });
  // Footer separately
  const footer = await page.$('footer');
  await footer.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'docs/sec-footer-real.png' });
  await browser.close();
  console.log('done');
})();
