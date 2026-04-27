#!/usr/bin/env node
/**
 * export-ads.js
 * Generates story (1080×1920) and feed (1080×1350) PNGs for all 6 ads.
 * Requires Vite dev server running at localhost:4321
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PROJECT = path.resolve(__dirname, '..');
const CAMPAIGN_DIR = '/Users/niryifrah/Desktop/תוכן/ממומן/ממומן קמפיין חדש/גרפיקות';
const STORY_DIR = path.join(CAMPAIGN_DIR, 'story');
const FEED_DIR  = path.join(CAMPAIGN_DIR, 'feed');
const HTML_DIR  = path.join(PROJECT, 'public', 'export', 'html');
const BASE_URL  = 'http://localhost:4321';

// ── EMBEDDED FONTS (base64 — no network request needed) ─────────────────────
const FONTS_DIR = path.join(PROJECT, 'public', 'fonts');
const _he      = fs.readFileSync(path.join(FONTS_DIR, 'NGS6v5_NC0k9P9H0TbFhsqMA6aw.woff2')).toString('base64');
const _latin   = fs.readFileSync(path.join(FONTS_DIR, 'NGS6v5_NC0k9P9H2TbFhsqMA.woff2')).toString('base64');
const _latinEx = fs.readFileSync(path.join(FONTS_DIR, 'NGS6v5_NC0k9P9H4TbFhsqMA6aw.woff2')).toString('base64');
const FONT_CSS = `
@font-face { font-family:'Heebo'; font-style:normal; font-weight:100 900; font-display:block;
  src:url('data:font/woff2;base64,${_he}') format('woff2');
  unicode-range:U+0307-0308,U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F; }
@font-face { font-family:'Heebo'; font-style:normal; font-weight:100 900; font-display:block;
  src:url('data:font/woff2;base64,${_latinEx}') format('woff2');
  unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF; }
@font-face { font-family:'Heebo'; font-style:normal; font-weight:100 900; font-display:block;
  src:url('data:font/woff2;base64,${_latin}') format('woff2');
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD; }
`;

// ── SHARED CSS ──────────────────────────────────────────────────────────────
const SHARED_CSS = `
  ${FONT_CSS}
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Heebo', sans-serif; direction: rtl; background: #000; }

  .ad { overflow: hidden; position: relative; }

  .profile-dark { display: flex; align-items: center; gap: 10px; }
  .profile-dark .pic { width: 40px; height: 40px; border-radius: 50%; overflow: hidden; border: 2px solid rgba(173,254,122,0.5); flex-shrink: 0; }
  .profile-dark .pic img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
  .profile-dark .name { font-size: 14px; font-weight: 900; color: #fff; line-height: 1.1; }
  .profile-dark .title { font-size: 10px; font-weight: 600; color: rgba(173,254,122,0.85); }

  .profile-light { display: flex; align-items: center; gap: 10px; }
  .profile-light .pic { width: 40px; height: 40px; border-radius: 50%; overflow: hidden; border: 2px solid rgba(16,42,34,0.35); flex-shrink: 0; }
  .profile-light .pic img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
  .profile-light .name { font-size: 14px; font-weight: 900; color: #102a22; line-height: 1.1; }
  .profile-light .title { font-size: 10px; font-weight: 600; color: rgba(16,42,34,0.55); }

  /* AD 1 */
  .ad1 { background: #102a22; display: flex; flex-direction: column; justify-content: space-between; padding: 26px 24px 24px; }
  .ad1 .headline { font-size: 35px; font-weight: 900; color: #fff; line-height: 1.05; letter-spacing: -0.5px; text-align: center; }
  .ad1 .sub { font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.68); line-height: 1.5; text-align: center; }
  .ad1 .cta-btn { width: 100%; background: #adfe7a; color: #102a22; font-family: 'Heebo', sans-serif; font-size: 15px; font-weight: 900; padding: 13px; border-radius: 10px; border: none; cursor: pointer; text-align: center; }

  /* AD 2 */
  .ad2 { background: #102a22; display: flex; flex-direction: column; justify-content: space-between; padding: 26px 24px 24px; }
  .ad2 .h2 { font-size: 30px; font-weight: 900; color: #fff; line-height: 1.15; letter-spacing: -0.5px; text-align: center; }
  .ad2 .h2 em { font-style: normal; color: #102a22; background: #adfe7a; padding: 1px 8px; border-radius: 5px; }
  .ad2 .cta2-btn { background: #adfe7a; color: #102a22; font-family: 'Heebo', sans-serif; font-size: 15px; font-weight: 900; padding: 13px 0; border-radius: 10px; border: none; cursor: pointer; width: 100%; text-align: center; }

  /* AD 3 */
  .ad3 { background: #102a22; }
`;

// ── AD HTML SNIPPETS ─────────────────────────────────────────────────────────
const AD_HTML = {
  '01': `
    <div class="ad ad1">
      <div class="profile-dark">
        <div class="pic"><img src="${BASE_URL}/NirBlack.jpg" alt=""></div>
        <div><div class="name">ניר יפרח</div><div class="title">תכנון פיננסי אישי ומשפחתי</div></div>
      </div>
      <div class="headline">
        מקבלים<br>החלטות<br>כלכליות רק<br>על סמך<br>
        <span style="color:#adfe7a;">תחושת בטן?</span>
      </div>
      <div>
        <div class="sub" style="margin-bottom:14px;">5 דקות שיגידו לכם איפה אתם עומדים מבחינה כלכלית ומה כדאי לשפר כבר עכשיו (:</div>
        <button class="cta-btn">לשאלון האישי לחצו ←</button>
      </div>
    </div>`,

  '02': `
    <div class="ad ad2">
      <div class="profile-dark">
        <div class="pic"><img src="${BASE_URL}/NirBlack.jpg" alt=""></div>
        <div><div class="name">ניר יפרח</div><div class="title">תכנון פיננסי אישי ומשפחתי</div></div>
      </div>
      <div class="h2">
        המשפחה שלכם מתנהלת<br>
        <em>כמו עסק שצומח</em><br>
        או שהיא רק <span style="color:#e8372a;">מתנהלת?</span>
      </div>
      <div>
        <div style="font-size:14px;font-weight:600;color:rgba(255,255,255,0.6);line-height:1.5;text-align:center;margin-bottom:14px;">5 דקות שיגידו לכם בדיוק איפה אתם עומדים (:</div>
        <button class="cta2-btn">לשאלון האישי לחצו ←</button>
      </div>
    </div>`,

  '03': `
    <div class="ad ad3" style="display:flex;flex-direction:column;justify-content:space-between;padding:26px 22px 24px;">
      <div class="profile-dark">
        <div class="pic"><img src="${BASE_URL}/NirBlack.jpg" alt=""></div>
        <div><div class="name">ניר יפרח</div><div class="title">תכנון פיננסי אישי ומשפחתי</div></div>
      </div>
      <div>
        <div style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.45);text-align:center;margin-bottom:10px;letter-spacing:0.5px;">אם אתם מרוויחים:</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:10px;">
          <div style="text-align:center;">
            <div style="font-size:10px;font-weight:600;color:rgba(255,255,255,0.38);margin-bottom:2px;">בחודש</div>
            <div style="font-size:26px;font-weight:900;color:#fff;letter-spacing:-1px;">₪25,000</div>
          </div>
          <div style="font-size:20px;color:rgba(173,254,122,0.5);font-weight:900;padding-top:12px;">←</div>
          <div style="text-align:center;">
            <div style="font-size:10px;font-weight:600;color:rgba(255,255,255,0.38);margin-bottom:2px;">בשנה</div>
            <div style="font-size:26px;font-weight:900;color:#adfe7a;letter-spacing:-1px;">₪300,000</div>
          </div>
        </div>
        <div style="text-align:center;font-size:18px;color:rgba(173,254,122,0.45);margin-bottom:6px;">↓</div>
        <div style="text-align:center;margin-bottom:4px;">
          <div style="font-size:10px;font-weight:600;color:rgba(255,255,255,0.38);margin-bottom:3px;">בעשור</div>
          <div style="font-size:52px;font-weight:900;color:#adfe7a;letter-spacing:-2px;line-height:1.0;">₪3,000,000</div>
        </div>
        <svg viewBox="0 0 270 14" style="width:100%;height:14px;display:block;margin-bottom:14px;" preserveAspectRatio="none">
          <path d="M3,9 C50,4 110,12 160,7 C210,3 245,10 268,6" stroke="#e8372a" stroke-width="3.5" fill="none" stroke-linecap="round"/>
          <path d="M8,12 C60,9 125,13 178,10 C218,8 248,12 265,10" stroke="#e8372a" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5"/>
        </svg>
        <div style="font-size:18px;font-weight:900;color:#fff;line-height:1.25;text-align:center;margin-bottom:5px;">
          כמה מתוכם ישרתו את<br><span style="color:#adfe7a;">החלומות והמטרות שלכם?</span>
        </div>
        <div style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.45);text-align:center;">זה דורש תכנית.</div>
      </div>
      <button style="width:100%;background:#adfe7a;color:#102a22;font-family:'Heebo',sans-serif;font-size:15px;font-weight:900;padding:13px;border-radius:10px;border:none;cursor:pointer;text-align:center;">קבעו שיחת אפיון ←</button>
    </div>`,

  '04': `
    <div class="ad" style="background:#102a22;display:flex;flex-direction:column;justify-content:space-between;padding:26px 26px 24px;">
      <div class="profile-dark">
        <div class="pic"><img src="${BASE_URL}/NirBlack.jpg" alt=""></div>
        <div><div class="name">ניר יפרח</div><div class="title">תכנון פיננסי אישי ומשפחתי</div></div>
      </div>
      <div style="text-align:center;">
        <div style="font-size:40px;font-weight:900;color:#fff;line-height:1.05;letter-spacing:-1px;margin-bottom:18px;">
          רוצים<br>להתחיל<br>להשקיע?
        </div>
        <div style="font-size:22px;font-weight:700;color:rgba(255,255,255,0.85);line-height:1.3;margin-bottom:6px;">
          קודם תלמדו לנהל<br>את הכסף שלכם.
        </div>
        <svg viewBox="0 0 230 14" style="width:72%;height:14px;display:block;margin:0 auto;" preserveAspectRatio="none">
          <path d="M3,9 C40,4 95,12 145,7 C190,3 220,10 228,6" stroke="#e8372a" stroke-width="3.5" fill="none" stroke-linecap="round"/>
          <path d="M6,12 C50,9 108,13 162,10 C200,8 222,12 227,10" stroke="#e8372a" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.55"/>
        </svg>
      </div>
      <button style="width:100%;background:#adfe7a;color:#102a22;font-family:'Heebo',sans-serif;font-size:15px;font-weight:900;padding:14px;border-radius:10px;border:none;cursor:pointer;text-align:center;">קבעו שיחת אפיון ←</button>
    </div>`,

  '05': `
    <div class="ad" style="background:#f0ebe0;display:flex;flex-direction:column;justify-content:space-between;padding:26px 26px 24px;">
      <div class="profile-light">
        <div class="pic"><img src="${BASE_URL}/NirBlack.jpg" alt=""></div>
        <div><div class="name">ניר יפרח</div><div class="title">תכנון פיננסי אישי ומשפחתי</div></div>
      </div>
      <div style="text-align:center;">
        <div style="font-size:42px;font-weight:900;color:#102a22;line-height:1.05;letter-spacing:-1px;margin-bottom:16px;">
          לא חסר<br>לכם כסף.<br><span style="color:#adfe7a;background:#102a22;padding:2px 8px;border-radius:6px;">חסרה לכם<br>תכנית.</span>
        </div>
        <div style="font-size:14px;font-weight:600;color:rgba(16,42,34,0.55);line-height:1.6;">
          שיחת אפיון של 30 דקות.<br>יוצאים עם תמונה ברורה וכיוון לפעולה.
        </div>
      </div>
      <button style="width:100%;background:#102a22;color:#adfe7a;font-family:'Heebo',sans-serif;font-size:15px;font-weight:900;padding:14px;border-radius:10px;border:none;cursor:pointer;text-align:center;">קבעו שיחת אפיון ←</button>
    </div>`,

  '06': `
    <div class="ad" style="background:#f0ebe0;display:flex;flex-direction:column;justify-content:space-between;padding:26px 26px 24px;">
      <div class="profile-light">
        <div class="pic" style="border-color:rgba(16,42,34,0.35);">
          <img src="${BASE_URL}/NirBlack.jpg" alt="" style="width:100%;height:100%;object-fit:cover;object-position:center top;">
        </div>
        <div>
          <div style="font-size:14px;font-weight:900;color:#102a22;line-height:1.1;">ניר יפרח</div>
          <div style="font-size:10px;font-weight:600;color:rgba(16,42,34,0.5);">תכנון פיננסי אישי ומשפחתי</div>
        </div>
      </div>
      <div style="text-align:center;">
        <div style="font-size:32px;font-weight:900;color:#102a22;line-height:1.1;letter-spacing:-0.5px;margin-bottom:16px;">
          11 שאלות<br>פיננסיות אישיות
        </div>
        <div style="font-size:18px;font-weight:600;color:rgba(16,42,34,0.72);line-height:1.6;margin-bottom:14px;">
          שיגידו לכם בדיוק<br>איפה אתם עומדים<br>ומה צריך לשפר.
        </div>
        <div style="font-size:13px;font-weight:700;color:rgba(16,42,34,0.4);letter-spacing:0.5px;">
          3 דקות · ללא התחייבות
        </div>
      </div>
      <button style="width:100%;background:#102a22;color:#adfe7a;font-family:'Heebo',sans-serif;font-size:15px;font-weight:900;padding:14px;border-radius:10px;border:none;cursor:pointer;text-align:center;">לשאלון האישי לחצו ←</button>
    </div>`
};

// ── HTML WRAPPER ─────────────────────────────────────────────────────────────
// Body = outW × outH. Ad sits at 320×adH and is scaled up via transform.
function makeHTML(adId, outW, outH, adH) {
  const scale = outW / 320; // 1080/320 = 3.375
  return `<!DOCTYPE html>
<html lang="he">
<head>
  <meta charset="UTF-8">
  <style>
    ${SHARED_CSS}
    html, body {
      margin: 0; padding: 0;
      width: ${outW}px; height: ${outH}px;
      overflow: hidden; background: #000;
      direction: ltr;
    }
    .ad-scale-wrapper {
      position: absolute;
      left: 0; top: 0;
      width: 320px;
      height: ${adH}px;
      transform: scale(${scale});
      transform-origin: top left;
      direction: rtl;
    }
    .ad { width: 320px; height: ${adH}px; border-radius: 0; }
  </style>
</head>
<body>
  <div class="ad-scale-wrapper">
    ${AD_HTML[adId]}
  </div>
</body>
</html>`;
}

// ── SCREENSHOT ───────────────────────────────────────────────────────────────
function screenshot(url, output, w, h) {
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
// Story 9:16 → output 1080×1920, ad rendered at 320×568 then scale(3.375)
// Feed  1:1  → output 1080×1080, ad rendered at 320×320 then scale(3.375)

// Ensure output dirs exist
[STORY_DIR, FEED_DIR, HTML_DIR].forEach(d => fs.mkdirSync(d, { recursive: true }));

Object.keys(AD_HTML).forEach(id => {
  // Story 9:16
  const storyHtml = makeHTML(id, 1080, 1920, 568);
  const storyHtmlPath = path.join(HTML_DIR, `ad${id}-story.html`);
  fs.writeFileSync(storyHtmlPath, storyHtml);
  const storyPng = path.join(STORY_DIR, `ad${id}-story-1080x1920.png`);
  screenshot(`${BASE_URL}/export/html/ad${id}-story.html`, storyPng, 1080, 1920);
  console.log(`✓ Story ${id} → ${path.basename(storyPng)}`);

  // Feed 1:1
  const feedHtml = makeHTML(id, 1080, 1080, 320);
  const feedHtmlPath = path.join(HTML_DIR, `ad${id}-feed.html`);
  fs.writeFileSync(feedHtmlPath, feedHtml);
  const feedPng = path.join(FEED_DIR, `ad${id}-feed-1080x1080.png`);
  screenshot(`${BASE_URL}/export/html/ad${id}-feed.html`, feedPng, 1080, 1080);
  console.log(`✓ Feed  ${id} → ${path.basename(feedPng)}`);
});

console.log('\n✅ כל הקבצים נוצרו בהצלחה!');
console.log(`📁 סטורי: ${STORY_DIR}`);
console.log(`📁 פיד:   ${FEED_DIR}`);
