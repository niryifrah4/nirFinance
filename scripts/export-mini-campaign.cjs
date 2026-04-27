#!/usr/bin/env node
/**
 * export-mini-campaign.cjs
 * מייצא 2 מודעות לקמפיין השאלון:
 *   A = ₪3M concept
 *   B = 11 שאלות concept
 * Story 1080×1920 (568px design) + Feed 1080×1080 (320px compact design)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CHROME    = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PROJECT   = path.resolve(__dirname, '..');
const OUT_DIR   = '/Users/niryifrah/Desktop/תוכן/ממומן/ממומן קמפיין חדש/גרפיקות';
const MINI_DIR  = '/Users/niryifrah/Desktop/תוכן/ממומן/ממומן קמפיין חדש/מיני קמפיין שאלון';
const STORY_DIR = path.join(OUT_DIR, 'story');
const FEED_DIR  = path.join(OUT_DIR, 'feed');
const HTML_DIR  = path.join(PROJECT, 'public', 'export', 'html');
const BASE_URL  = 'http://localhost:5173';

// ── FONTS (embedded base64) ──────────────────────────────────────────────────
const FONTS_DIR = path.join(PROJECT, 'public', 'fonts');
const _he      = fs.readFileSync(path.join(FONTS_DIR, 'NGS6v5_NC0k9P9H0TbFhsqMA6aw.woff2')).toString('base64');
const _latin   = fs.readFileSync(path.join(FONTS_DIR, 'NGS6v5_NC0k9P9H2TbFhsqMA.woff2')).toString('base64');
const _latinEx = fs.readFileSync(path.join(FONTS_DIR, 'NGS6v5_NC0k9P9H4TbFhsqMA6aw.woff2')).toString('base64');
const FONT_CSS = `
@font-face{font-family:'Heebo';font-style:normal;font-weight:100 900;font-display:block;
  src:url('data:font/woff2;base64,${_he}') format('woff2');
  unicode-range:U+0307-0308,U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F;}
@font-face{font-family:'Heebo';font-style:normal;font-weight:100 900;font-display:block;
  src:url('data:font/woff2;base64,${_latinEx}') format('woff2');
  unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;}
@font-face{font-family:'Heebo';font-style:normal;font-weight:100 900;font-display:block;
  src:url('data:font/woff2;base64,${_latin}') format('woff2');
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}
`;

// ── SHARED CSS ───────────────────────────────────────────────────────────────
const SHARED_CSS = `
  ${FONT_CSS}
  *{box-sizing:border-box;margin:0;padding:0;}
  .ad{font-family:'Heebo',sans-serif;overflow:hidden;position:relative;display:flex;flex-direction:column;justify-content:space-between;}
  .prof{display:flex;align-items:center;gap:9px;}
  .prof .av{border-radius:50%;overflow:hidden;flex-shrink:0;}
  .prof .av img{width:100%;height:100%;object-fit:cover;object-position:center top;}
  .btn{width:100%;font-family:'Heebo',sans-serif;font-weight:900;border-radius:12px;border:none;cursor:pointer;text-align:center;}
  .btn-lime{background:#adfe7a;color:#102a22;}
  .btn-dark{background:#102a22;color:#adfe7a;}
  /* Force LTR for currency amounts — bidi-override ensures ₪ stays left of number */
  .ltr{unicode-bidi:bidi-override;direction:ltr;display:inline-block;}
`;

// ── STORY ADS (568px tall) ────────────────────────────────────────────────────
const ADS_STORY = {

  // A — ₪3M story
  'A': `
  <div class="ad" style="background:#102a22;padding:24px 22px 22px;width:320px;">
    <div class="prof">
      <div class="av" style="width:38px;height:38px;border:2px solid rgba(173,254,122,0.45);">
        <img src="${BASE_URL}/NirBlack.jpg" alt="">
      </div>
      <div>
        <div style="font-size:13px;font-weight:900;color:#fff;line-height:1.1;">ניר יפרח</div>
        <div style="font-size:9.5px;font-weight:600;color:rgba(173,254,122,0.8);margin-top:1px;">תכנון פיננסי אישי ומשפחתי</div>
      </div>
    </div>
    <div style="text-align:center;">
      <div style="font-size:16px;font-weight:700;color:rgba(255,255,255,0.65);line-height:1.4;margin-bottom:12px;">
        בעשור הקרוב<br>אתם הולכים להרוויח
      </div>
      <div dir="ltr" style="font-size:72px;font-weight:900;color:#adfe7a;line-height:1;letter-spacing:-3px;margin-bottom:14px;">&#8362;3M</div>
      <div dir="ltr" style="display:flex;align-items:center;justify-content:center;gap:6px;margin-bottom:18px;">
        <span dir="ltr" style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.45);">&#8362;25K</span>
        <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.45);">בחודש</span>
        <span style="font-size:11px;color:rgba(173,254,122,0.4);">·</span>
        <span dir="ltr" style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.45);">&#8362;300K</span>
        <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.45);">בשנה</span>
      </div>
      <svg viewBox="0 0 260 12" style="width:75%;height:12px;display:block;margin:0 auto 18px;" preserveAspectRatio="none">
        <path d="M3,8 C50,3 120,10 180,6 C220,3 248,9 258,5" stroke="#e8372a" stroke-width="3" fill="none" stroke-linecap="round"/>
      </svg>
      <div style="font-size:22px;font-weight:900;color:#fff;line-height:1.25;margin-bottom:10px;">
        כמה מהם<br>ישרתו את<br><span style="color:#adfe7a;">המטרות שלכם?</span>
      </div>
      <div style="font-size:12px;font-weight:600;color:rgba(255,255,255,0.3);letter-spacing:0.5px;">גלו תוך 3 דקות</div>
    </div>
    <button class="btn btn-lime" style="font-size:15px;padding:14px;">לשאלון האישי לחצו ←</button>
  </div>`,

  // B — 11 שאלות story
  'B': `
  <div class="ad" style="background:#f0ebe0;padding:24px 22px 22px;width:320px;">
    <div class="prof">
      <div class="av" style="width:38px;height:38px;border:2px solid rgba(16,42,34,0.25);">
        <img src="${BASE_URL}/NirBlack.jpg" alt="">
      </div>
      <div>
        <div style="font-size:13px;font-weight:900;color:#102a22;line-height:1.1;">ניר יפרח</div>
        <div style="font-size:9.5px;font-weight:600;color:rgba(16,42,34,0.5);margin-top:1px;">תכנון פיננסי אישי ומשפחתי</div>
      </div>
    </div>
    <div style="text-align:center;">
      <div style="font-size:11px;font-weight:700;color:rgba(16,42,34,0.35);letter-spacing:3.5px;text-transform:uppercase;margin-bottom:20px;">שאלון אישי · בחינם</div>
      <div style="font-size:80px;font-weight:900;color:#102a22;line-height:0.9;letter-spacing:-4px;margin-bottom:8px;">11</div>
      <div style="font-size:28px;font-weight:900;color:#102a22;line-height:1.1;letter-spacing:-0.5px;margin-bottom:16px;">שאלות פיננסיות<br>שיגידו לכם</div>
      <div style="font-size:16px;font-weight:600;color:rgba(16,42,34,0.6);line-height:1.6;margin-bottom:18px;">בדיוק איפה אתם עומדים<br>ומה צריך לשפר.</div>
      <div style="font-size:11px;font-weight:700;color:rgba(16,42,34,0.35);letter-spacing:0.5px;">3 דקות · ללא התחייבות</div>
    </div>
    <button class="btn btn-dark" style="font-size:15px;padding:14px;">לשאלון האישי לחצו ←</button>
  </div>`
};

// ── FEED ADS (320px tall — compact for 1:1) ───────────────────────────────────
const ADS_FEED = {

  // A — ₪3M feed (compact)
  'A': `
  <div class="ad" style="background:#102a22;padding:18px 20px 18px;width:320px;">
    <div class="prof">
      <div class="av" style="width:34px;height:34px;border:2px solid rgba(173,254,122,0.45);">
        <img src="${BASE_URL}/NirBlack.jpg" alt="">
      </div>
      <div>
        <div style="font-size:12px;font-weight:900;color:#fff;line-height:1.1;">ניר יפרח</div>
        <div style="font-size:9px;font-weight:600;color:rgba(173,254,122,0.8);margin-top:1px;">תכנון פיננסי אישי ומשפחתי</div>
      </div>
    </div>
    <div style="text-align:center;">
      <div style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.6);line-height:1.4;margin-bottom:8px;">
        בעשור הקרוב אתם הולכים להרוויח
      </div>
      <div dir="ltr" style="font-size:62px;font-weight:900;color:#adfe7a;line-height:1;letter-spacing:-2px;margin-bottom:6px;">&#8362;3M</div>
      <div dir="ltr" style="display:flex;align-items:center;justify-content:center;gap:5px;margin-bottom:10px;">
        <span dir="ltr" style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.4);">&#8362;25K</span>
        <span style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.4);">בחודש</span>
        <span style="font-size:10px;color:rgba(173,254,122,0.4);">·</span>
        <span dir="ltr" style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.4);">&#8362;300K</span>
        <span style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.4);">בשנה</span>
      </div>
      <svg viewBox="0 0 260 12" style="width:70%;height:10px;display:block;margin:0 auto 10px;" preserveAspectRatio="none">
        <path d="M3,8 C50,3 120,10 180,6 C220,3 248,9 258,5" stroke="#e8372a" stroke-width="3" fill="none" stroke-linecap="round"/>
      </svg>
      <div style="font-size:18px;font-weight:900;color:#fff;line-height:1.2;margin-bottom:6px;">
        כמה מהם ישרתו את<br><span style="color:#adfe7a;">המטרות שלכם?</span>
      </div>
      <div style="font-size:10px;font-weight:600;color:rgba(255,255,255,0.3);">גלו תוך 3 דקות</div>
    </div>
    <button class="btn btn-lime" style="font-size:14px;padding:12px;">לשאלון האישי לחצו ←</button>
  </div>`,

  // B — 11 שאלות feed (compact)
  'B': `
  <div class="ad" style="background:#f0ebe0;padding:16px 20px 16px;width:320px;">
    <div class="prof">
      <div class="av" style="width:32px;height:32px;border:2px solid rgba(16,42,34,0.25);">
        <img src="${BASE_URL}/NirBlack.jpg" alt="">
      </div>
      <div>
        <div style="font-size:12px;font-weight:900;color:#102a22;line-height:1.1;">ניר יפרח</div>
        <div style="font-size:9px;font-weight:600;color:rgba(16,42,34,0.5);margin-top:1px;">תכנון פיננסי אישי ומשפחתי</div>
      </div>
    </div>
    <div style="text-align:center;">
      <div style="font-size:56px;font-weight:900;color:#102a22;line-height:0.9;letter-spacing:-2px;margin-bottom:6px;">11</div>
      <div style="font-size:22px;font-weight:900;color:#102a22;line-height:1.1;letter-spacing:-0.5px;margin-bottom:8px;">שאלות פיננסיות<br>שיגידו לכם</div>
      <div style="font-size:13px;font-weight:600;color:rgba(16,42,34,0.6);line-height:1.55;margin-bottom:10px;">בדיוק איפה אתם עומדים<br>ומה צריך לשפר.</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:8px;">
        <span style="font-size:10px;font-weight:700;color:rgba(16,42,34,0.35);">3 דקות</span>
        <span style="color:rgba(16,42,34,0.2);">·</span>
        <span style="font-size:10px;font-weight:700;color:rgba(16,42,34,0.35);">ללא התחייבות</span>
        <span style="color:rgba(16,42,34,0.2);">·</span>
        <span style="font-size:10px;font-weight:700;color:rgba(16,42,34,0.35);">בחינם</span>
      </div>
    </div>
    <button class="btn btn-dark" style="font-size:14px;padding:11px;">לשאלון האישי לחצו ←</button>
  </div>`
};

// ── MAKE HTML ────────────────────────────────────────────────────────────────
// storyH = design height in px (568 for story/feed)
// outW/outH = output canvas size
// For story: scale by width  (1080/320 = 3.375), canvas 1080×1920
// For feed:  scale by height (1080/568 = 1.9),   canvas 1080×1080 (pillarboxed with bg color)
function makeHTML(adContent, outW, outH, adH, bgColor) {
  const bg = bgColor || '#000';
  const scaleW = outW / 320;
  const scaleH = outH / adH;
  const scale  = Math.min(scaleW, scaleH);           // fit without clipping
  const scaledW = Math.round(320 * scale);
  const scaledH = Math.round(adH  * scale);
  const left  = Math.round((outW - scaledW) / 2);   // center horizontally
  const top   = Math.round((outH - scaledH) / 2);   // center vertically
  return `<!DOCTYPE html>
<html lang="he"><head><meta charset="UTF-8"><style>
  ${SHARED_CSS}
  html,body{direction:ltr;width:${outW}px;height:${outH}px;overflow:hidden;background:${bg};margin:0;padding:0;}
  .wrapper{position:absolute;left:${left}px;top:${top}px;width:320px;height:${adH}px;transform:scale(${scale});transform-origin:top left;direction:rtl;}
  .ad{width:320px;height:${adH}px;border-radius:0;}
</style></head>
<body><div class="wrapper">${adContent}</div></body></html>`;
}

// ── SCREENSHOT ───────────────────────────────────────────────────────────────
function screenshot(htmlPath, output, w, h) {
  const url = `file://${htmlPath}`;
  const cmd = [
    `"${CHROME}"`,
    '--headless=new',
    `--screenshot="${output}"`,
    `--window-size=${w},${h}`,
    '--force-device-scale-factor=1',
    '--hide-scrollbars',
    '--disable-gpu',
    `"${url}"`
  ].join(' ');
  execSync(cmd, { stdio: 'pipe' });
}

// ── MAIN ─────────────────────────────────────────────────────────────────────
[STORY_DIR, FEED_DIR, HTML_DIR, MINI_DIR].forEach(d => fs.mkdirSync(d, { recursive: true }));

console.log('🎯 מייצא מיני קמפיין שאלון — 2 מודעות × 2 מידות\n');

const AD_NAMES = {
  'A': 'מודעה-3מיליון',
  'B': 'מודעה-11שאלות'
};

const AD_BG = {
  'A': '#102a22',
  'B': '#f0ebe0'
};

Object.keys(ADS_STORY).forEach(id => {
  const name = AD_NAMES[id];
  const bg   = AD_BG[id];

  // Story 9:16 (568px design → 1080×1920)
  const storyPath = path.join(HTML_DIR, `mini-${id}-story.html`);
  fs.writeFileSync(storyPath, makeHTML(ADS_STORY[id], 1080, 1920, 568, bg));
  const storyPng = path.join(STORY_DIR, `mini-${id}-story-1080x1920.png`);
  const storyMini = path.join(MINI_DIR, `${id}-${name}-story-1080x1920.png`);
  screenshot(storyPath, storyPng, 1080, 1920);
  fs.copyFileSync(storyPng, storyMini);
  console.log(`✓ Story ${id} → ${path.basename(storyPng)}`);

  // Feed 1:1 — same story design (568px), scaled to fit 1080×1080 (pillarboxed, bg fills sides)
  const feedPath = path.join(HTML_DIR, `mini-${id}-feed.html`);
  fs.writeFileSync(feedPath, makeHTML(ADS_STORY[id], 1080, 1080, 568, bg));
  const feedPng = path.join(FEED_DIR, `mini-${id}-feed-1080x1080.png`);
  const feedMini = path.join(MINI_DIR, `${id}-${name}-feed-1080x1080.png`);
  screenshot(feedPath, feedPng, 1080, 1080);
  fs.copyFileSync(feedPng, feedMini);
  console.log(`✓ Feed  ${id} → ${path.basename(feedPng)}`);
});

console.log('\n✅ מוכן!');
console.log(`📁 גרפיקות: ${OUT_DIR}`);
console.log(`📁 קמפיין:  ${MINI_DIR}`);
