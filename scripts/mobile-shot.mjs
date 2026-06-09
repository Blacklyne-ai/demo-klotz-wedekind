import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  await page.goto('http://localhost:4402/', { waitUntil: 'networkidle' });
  await page.evaluate(() => { try { localStorage.setItem('klotz-wedekind-cookie-consent', 'accepted'); document.getElementById('cookie-banner')?.remove(); } catch(e){} });
  await page.screenshot({ path: 'docs/sec-mobile-hero.png' });
  // Test mobile-menu open
  await page.locator('#menu-toggle').click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'docs/sec-mobile-menu.png' });
  await browser.close();
  console.log('done');
})();
