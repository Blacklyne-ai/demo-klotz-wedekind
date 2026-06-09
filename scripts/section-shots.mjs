import { chromium } from 'playwright';

const SECTIONS = [
  { url: 'http://localhost:4402/', name: 'home-hero',     scrollTo: 0 },
  { url: 'http://localhost:4402/', name: 'home-heritage', scrollTo: 'sec1' },
  { url: 'http://localhost:4402/', name: 'home-services', scrollTo: 'sec2' },
  { url: 'http://localhost:4402/', name: 'home-team',     scrollTo: 'sec4' },
  { url: 'http://localhost:4402/', name: 'home-final-cta', scrollTo: 'final' },
  { url: 'http://localhost:4402/', name: 'home-footer',   scrollTo: 'footer' },
];

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  for (const s of SECTIONS) {
    await page.goto(s.url, { waitUntil: 'networkidle' });
    await page.evaluate(() => { try { localStorage.setItem('klotz-wedekind-cookie-consent', 'accepted'); document.getElementById('cookie-banner')?.remove(); } catch(e){} });
    if (s.scrollTo === 0) {} 
    else if (s.scrollTo === 'sec1') await page.evaluate(() => document.querySelectorAll('section')[1].scrollIntoView());
    else if (s.scrollTo === 'sec2') await page.evaluate(() => document.querySelectorAll('section')[2].scrollIntoView());
    else if (s.scrollTo === 'sec4') await page.evaluate(() => document.querySelectorAll('section')[4].scrollIntoView());
    else if (s.scrollTo === 'final') await page.evaluate(() => document.querySelector('.final-cta').scrollIntoView());
    else if (s.scrollTo === 'footer') await page.evaluate(() => document.querySelector('footer').scrollIntoView({block: 'start'}));
    await page.waitForTimeout(400);
    await page.screenshot({ path: `docs/sec-${s.name}.png` });
    console.log('OK', s.name);
  }
  await browser.close();
})();
