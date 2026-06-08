import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const refs = [
  { url: 'https://www.route66-hh.de/',           file: 'ref-route66.png' },
  { url: 'https://www.astonservicehamburg.de/',  file: 'ref-aston.png' },
  { url: 'https://www.auto-motorrad-freigang.de/', file: 'ref-freigang.png' },
];

const demo = [
  { url: 'http://localhost:4402/',                                       file: 'demo-home.png',     full: true },
  { url: 'http://localhost:4402/ueber-uns',                              file: 'demo-ueber.png',    full: true },
  { url: 'http://localhost:4402/leistungen',                             file: 'demo-leistungen.png', full: true },
  { url: 'http://localhost:4402/leistungen/lackiererei',                 file: 'demo-lackiererei.png', full: true },
  { url: 'http://localhost:4402/leistungen/rahmenrichtstand',            file: 'demo-rahmen.png',   full: true },
  { url: 'http://localhost:4402/partner',                                file: 'demo-partner.png',  full: true },
  { url: 'http://localhost:4402/ansprechpartner',                        file: 'demo-team.png',     full: true },
  { url: 'http://localhost:4402/jobs',                                   file: 'demo-jobs.png',     full: true },
  { url: 'http://localhost:4402/kontakt',                                file: 'demo-kontakt.png',  full: true },
];

(async () => {
  await mkdir('./docs', { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();

  for (const r of refs) {
    try {
      await page.goto(r.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.screenshot({ path: `docs/${r.file}` });
      console.log('OK ref', r.file);
    } catch (e) {
      console.log('FAIL ref', r.file, e.message);
    }
  }

  for (const d of demo) {
    try {
      await page.goto(d.url, { waitUntil: 'networkidle', timeout: 15000 });
      await page.evaluate(() => { try { localStorage.setItem('klotz-wedekind-cookie-consent', 'accepted'); document.getElementById('cookie-banner')?.remove(); } catch(e){} });
      await page.screenshot({ path: `docs/${d.file}`, fullPage: !!d.full });
      console.log('OK demo', d.file);
    } catch (e) {
      console.log('FAIL demo', d.file, e.message);
    }
  }

  // Mobile shots
  const mctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mpage = await mctx.newPage();
  const mobiles = [
    { url: 'http://localhost:4402/', file: 'demo-home-mobile.png' },
    { url: 'http://localhost:4402/leistungen/lackiererei', file: 'demo-lackiererei-mobile.png' },
  ];
  for (const m of mobiles) {
    try {
      await mpage.goto(m.url, { waitUntil: 'networkidle', timeout: 15000 });
      await mpage.evaluate(() => { try { localStorage.setItem('klotz-wedekind-cookie-consent', 'accepted'); document.getElementById('cookie-banner')?.remove(); } catch(e){} });
      await mpage.screenshot({ path: `docs/${m.file}`, fullPage: true });
      console.log('OK mobile', m.file);
    } catch (e) {
      console.log('FAIL mobile', m.file, e.message);
    }
  }

  await browser.close();
})();
