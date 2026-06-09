import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto('http://localhost:4402/', { waitUntil: 'networkidle' });
  await page.evaluate(() => { try { localStorage.setItem('klotz-wedekind-cookie-consent', 'accepted'); document.getElementById('cookie-banner')?.remove(); } catch(e){} });

  // Header crop
  const header = await page.$('#site-header');
  await header.screenshot({ path: 'docs/logo-header.png' });

  // Footer crop
  await page.evaluate(() => document.querySelector('footer').scrollIntoView({block: 'start'}));
  await page.waitForTimeout(400);
  const footer = await page.$('footer');
  await footer.screenshot({ path: 'docs/logo-footer.png' });

  // Mobile header
  const mctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mpage = await mctx.newPage();
  await mpage.goto('http://localhost:4402/', { waitUntil: 'networkidle' });
  await mpage.evaluate(() => { try { localStorage.setItem('klotz-wedekind-cookie-consent', 'accepted'); document.getElementById('cookie-banner')?.remove(); } catch(e){} });
  const mheader = await mpage.$('#site-header');
  await mheader.screenshot({ path: 'docs/logo-header-mobile.png' });

  await browser.close();
  console.log('done');
})();
