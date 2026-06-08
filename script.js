  /* ═══════════════════════════════════════════════════
   script.js
   • i18n (EN / FA) with RTL support
   • Sticky nav
   • Mobile nav toggle
   • Music Player
   • Story Parser (fetch + data.txt)
═══════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────
   TRANSLATIONS
   Add more keys here to translate any element that
   has a data-i18n="key" attribute in the HTML.
────────────────────────────────────────────────── */
const translations = {
  en: {
    nav_home:          'Home',
    nav_about:         'About',
    nav_music:         'Music',
    nav_stories:       'Writings',
    hero_bg:           'Lament',
    hero_eyebrow:      'Me',
    hero_bio:          'I write not to find a listener, nor to earn anyone\'s sympathy. I put pen to paper only in the hope of emptying myself of the relentless assault of these dark, suffocating thoughts — thoughts that gnaw at my existence like termites, piece by piece. I have been left adrift in this vast, cold, indifferent world, and the more I struggled within it, the more lost I became in the labyrinth of finding a reason — even a small purpose — to stay. Now that everything has lost its color and the weight of this meaninglessness has collapsed onto my chest, pouring out these words is the only way I might, for a moment, draw the poison of this absolute confusion from my ailing mind.',
    hero_cta_primary:  'Read',
    hero_cta_ghost:    'Learn More',
    scroll_hint:       'Scroll',
    photo_placeholder: 'Your Photo',
    about_title:       'About <em>Me</em>',
    about_p1:          'I was born in a city that no longer exists the way I remember it. I came to writing through the back door — through music, through loss, through a stubborn refusal to let certain moments dissolve into the ordinary fog of forgetting.',
    about_p2:          'Until I realized that what I truly wanted was to create new silences, not excavate the old ones.',
    about_p3:          '"Condemned to continue"',
    stat_stories:      'Published',
    stat_awards:       'Awards',
    stat_collections:  'Collections',
    tag_fiction:       'Lament',
    tag_essays:        'Pain',
    tag_translation:   'Suicide',
    tag_spoken:        'Death',
    player_eyebrow:    'Atmosphere & Mood',
    player_title:      '<em>Play</em>list',
    player_subtitle:   'The sounds that shape me.',
    stories_title:     'Short <em>Laments</em>',
    stories_subtitle:  'Dispatches from within. Updated whenever a new lament escapes.',
    stories_loading:   'Loading…',
    stories_error:     '⚠ Could not load stories. Make sure <code>data.txt</code> is in the same folder and you\'re running through a local server.',
    stories_empty:     'No entries found in data.txt yet.',
    story_label:       'Lament',
    read_on:           'Continue',
    read_more:         'Read more',
    collapse:          '— Close',
    footer_copy:       '© 2025 — All stories are true in the ways that matter.',
    footer_twitter:    'Twitter',
    footer_instagram:  'Instagram',
    footer_contact:    'Telegram',
  },

  fa: {
    nav_home:          'خانه',
    nav_about:         'درباره',
    nav_music:         'موسیقی',
    nav_stories:       'داستان‌ها',
    hero_bg:           'ناله',
    hero_eyebrow:      'من',
    hero_bio:          'می‌نویسم، نه برای آنکه گوشی برای شنیدن پیدا کنم یا کسی را به دلسوزی وادارم. قلم را روی کاغذ می‌کشم تنها به این امید که خودم را از هجومِ بی‌امانِ این افکارِ تاریک و خفه‌کننده خالی کنم؛ افکاری که مثل موریانه، ذره‌ذره‌ی وجودم را می‌جوند. من در این جهانِ بی‌کران، سرد و بی‌تفاوت رها شده‌ام و هرچه بیشتر در آن دست‌وپا زدم، بیشتر در هزارتویِ پیدا کردنِ یک دلیل یا حتی یک هدفِ کوچک برای ماندن، حیران و گم‌گشته‌تر شدم. حالا که همه‌چیز برایم رنگ باخته و پوچیِ این مسیر با تمام سنگینی‌اش روی سینه‌ام آوار شده است، بیرون ریختنِ این کلمات تنها راهی است که شاید بتوانم برای لحظه‌ای، زهرِ این سردرگمیِ مطلق را از ذهنِ بیمارم بیرون بکشم و اندکی از بارِ این بی‌معنایی کم کنم.  ',
    hero_cta_primary:  'مطالعه‌ات',
    hero_cta_ghost:    'بیشتر بدانید',
    scroll_hint:       'اسکرول',
    photo_placeholder: 'عکس شما',
    about_title:       'درباره <em>من</em>',
    about_p1:          'در شهری متولد شدم که دیگر آن‌طور که به یاد دارم وجود ندارد. از راه پشتی به نوشتن رسیدم — از طریق موسیقی، از طریق از دست دادن، از طریق امتناع لجوجانه از اینکه بگذارم لحظات خاصی در مه معمولی فراموشی محو شوند.',
    about_p2:          'تا اینکه دریافتم آنچه واقعاً می‌خواهم ایجاد سکوت‌های جدید است، نه کندن سکوت‌های قدیمی.',
    about_p3:          "'محکوم به ادامه'",
    stat_stories:      'داستان منتشرشده',
    stat_awards:       'جایزه',
    stat_collections:  'مجموعه',
    tag_fiction:       'ناله',
    tag_essays:        'درد',
    tag_translation:   'خودکشی',
    tag_spoken:        'مرگ',
    player_eyebrow:    'فضا و حال‌وهوا',
    player_title:      '<em>پلی</em>‌لیست',
    player_subtitle:   'صداهایی که من را شکل می‌دهند.',
    stories_title:     'ناله‌های <em>کوتاه</em>',
    stories_subtitle:  'پیام‌هایی از درون. هر بار که ناله جدیدی فرار می‌کند، به‌روز می‌شود.',
    stories_loading:   'داستان‌ها در حال بارگذاری…',
    stories_error:     '⚠ بارگذاری داستان‌ها ممکن نشد. مطمئن شوید <code>data.txt</code> در همان پوشه قرار دارد و از طریق یک سرور محلی اجرا می‌کنید.',
    stories_empty:     'هنوز هیچ داستانی در data.txt یافت نشد.',
    story_label:       'ناله',
    read_on:           'ادامه',
    read_more:         'بیشتر ببین',
    collapse:          '— بستن',
    footer_copy:       '© 1405 — همه داستان‌ها به شیوه‌ای که اهمیت دارد، واقعی‌اند.',
    footer_twitter:    'توییتر',
    footer_instagram:  'اینستاگرام',
    footer_contact:    'تلگرام',
  }
};

/* ──────────────────────────────────────────────────
   i18n ENGINE
────────────────────────────────────────────────── */
let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  /* Fade out */
  document.body.classList.add('lang-switching');

  setTimeout(() => {
    /* Update <html> lang + dir */
    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === 'fa' ? 'rtl' : 'ltr';

    /* Translate all data-i18n elements */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    /* Update active lang button */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    /* Re-render story cards with updated labels (if already loaded) */
    rerenderStoryLabels(lang);

    /* Persist choice */
    localStorage.setItem('lang', lang);
    currentLang = lang;

    /* Fade back in */
    document.body.classList.remove('lang-switching');
  }, 220);
}

/* ── Wire up language buttons ── */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.lang !== currentLang) {
      applyLanguage(btn.dataset.lang);
    }
  });
});

/* ──────────────────────────────────────────────────
   STICKY NAV
────────────────────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ──────────────────────────────────────────────────
   MOBILE NAV TOGGLE
────────────────────────────────────────────────── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ──────────────────────────────────────────────────
   MUSIC PLAYER
   ▸ Change 'src' to the path of your audio files.
────────────────────────────────────────────────── */
const tracks = [
  { title: 'New Born',           artist: 'Muse',       src: 'audio/NewBorn.mp3' },
  { title: 'Street Spirit (Fade Out)', artist: 'RADIOHEAD', src: 'audio/StreetSpirit.mp3' },
  { title: 'Gole Yakh',   artist: 'Kourosh', src: 'audio/GoleYakh.mp3' }
];

const audio         = document.getElementById('audioElement');
const playBtn       = document.getElementById('playBtn');
const prevBtn       = document.getElementById('prevBtn');
const nextBtn       = document.getElementById('nextBtn');
const trackTitle    = document.getElementById('trackTitle');
const trackArtist   = document.getElementById('trackArtist');
const trackNumber   = document.getElementById('trackNumber');
const progressBar   = document.getElementById('progressBar');
const progressFill  = document.getElementById('progressFill');
const progressThumb = document.getElementById('progressThumb');
const currentTimeEl = document.getElementById('currentTime');
const durationEl    = document.getElementById('duration');
const trackListEl   = document.getElementById('trackList');
const visualizer    = document.getElementById('visualizer');
const iconPlay      = playBtn.querySelector('.icon-play');
const iconPause     = playBtn.querySelector('.icon-pause');

let currentTrack = 0;
let isPlaying    = false;

function formatTime(sec) {
  if (isNaN(sec) || sec < 0) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function pad(n) { return String(n).padStart(2, '0'); }

function loadTrack(index) {
  currentTrack = index;
  const t = tracks[index];
  audio.src = t.src;
  trackTitle.textContent  = t.title;
  trackArtist.textContent = t.artist;
  trackNumber.textContent = `${pad(index + 1)} / ${pad(tracks.length)}`;
  progressFill.style.width  = '0%';
  progressThumb.style.left  = '0%';
  currentTimeEl.textContent = '0:00';
  durationEl.textContent    = '0:00';
  document.querySelectorAll('.track-item').forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });
}

function setPlayState(playing) {
  isPlaying = playing;
  iconPlay.style.display  = playing ? 'none'  : 'block';
  iconPause.style.display = playing ? 'block' : 'none';
  visualizer.classList.toggle('playing', playing);
}

async function togglePlay() {
  if (!audio.src || audio.src === window.location.href) {
    setPlayState(!isPlaying); return;
  }
  if (isPlaying) {
    audio.pause(); setPlayState(false);
  } else {
    try { await audio.play(); setPlayState(true); }
    catch (e) { console.warn('Audio play failed:', e.message); setPlayState(true); }
  }
}

playBtn.addEventListener('click', togglePlay);

nextBtn.addEventListener('click', () => {
  loadTrack((currentTrack + 1) % tracks.length);
  if (isPlaying) audio.play().catch(() => {});
});

prevBtn.addEventListener('click', () => {
  if (audio.currentTime > 3) { audio.currentTime = 0; }
  else {
    loadTrack((currentTrack - 1 + tracks.length) % tracks.length);
    if (isPlaying) audio.play().catch(() => {});
  }
});

audio.addEventListener('ended', () => {
  loadTrack((currentTrack + 1) % tracks.length);
  audio.play().catch(() => {});
});

audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width  = `${pct}%`;
  progressThumb.style.left  = `${pct}%`;
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
  durationEl.textContent = formatTime(audio.duration);
});

progressBar.addEventListener('click', e => {
  const rect = progressBar.getBoundingClientRect();
  const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  if (audio.duration) audio.currentTime = pct * audio.duration;
});

function buildTrackList() {
  trackListEl.innerHTML = '';
  tracks.forEach((t, i) => {
    const item = document.createElement('div');
    item.className = `track-item${i === currentTrack ? ' active' : ''}`;
    item.innerHTML = `
      <span class="track-item-num">${pad(i + 1)}</span>
      <span class="track-item-name">${t.title}</span>
      <span class="track-item-dur">—</span>
    `;
    item.addEventListener('click', () => {
      loadTrack(i);
      audio.play().catch(() => setPlayState(true));
      setPlayState(true);
    });
    trackListEl.appendChild(item);
  });
}

loadTrack(0);
buildTrackList();

/* ──────────────────────────────────────────────────
   STORY PARSER
────────────────────────────────────────────────── */
let loadedStories = [];   // cache so we can relabel on lang switch

function parseStories(raw) {
  const blocks = raw.split('===STORY===').map(b => b.trim()).filter(b => b.length > 0);
  return blocks.map((block, index) => {
    const titleMatch = block.match(/^Title:\s*(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : `Untitled Story ${index + 1}`;

    const dateMatch = block.match(/^Date:\s*(.+)$/m);
    const date = dateMatch ? dateMatch[1].trim() : 'Undated';

    const contentMatch = block.match(/^Content:\s*([\s\S]+)$/m);
    let paragraphs = [];
    if (contentMatch) {
      paragraphs = contentMatch[1].trim()
        .split(/\n\s*\n/)
        .map(p => p.replace(/\n/g, ' ').trim())
        .filter(p => p.length > 0);
    }
    return { title, date, paragraphs };
  });
}

function makeExcerpt(paragraphs) {
  if (!paragraphs.length) return '';
  const text = paragraphs[0];
  if (text.length <= 160) return text;
  return text.slice(0, 157).replace(/\s+\S*$/, '') + '…';
}

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderStories(stories) {
  loadedStories = stories;
  const grid    = document.getElementById('storiesGrid');
  const loading = document.getElementById('storiesLoading');
  if (loading) loading.remove();

  const t = translations[currentLang];

  if (!stories.length) {
    grid.innerHTML = `<p style="color:var(--text-dim);font-style:italic;padding:3rem;grid-column:1/-1;text-align:center;">${t.stories_empty}</p>`;
    return;
  }

  grid.innerHTML = '';
  stories.forEach((story, i) => {
    const card = document.createElement('article');
    card.className = 'story-card';
    card.style.animationDelay = `${i * 0.1}s`;

    const excerpt   = makeExcerpt(story.paragraphs);
    const fullParas = story.paragraphs.map(p => `<p>${p}</p>`).join('\n');
    const labelText = i === 0 ? t.read_on : t.read_more;

    card.innerHTML = `
      <span class="story-card-number">${t.story_label} ${String(i + 1).padStart(2, '0')}</span>
      <h3 class="story-card-title">${escapeHTML(story.title)}</h3>
      <p class="story-card-date">${escapeHTML(story.date)}</p>
      <p class="story-card-excerpt">${escapeHTML(excerpt)}</p>
      <div class="story-card-full">${fullParas}</div>
      <span class="story-card-read-more">${labelText}</span>
    `;

    card.addEventListener('click', () => {
      const isExpanded = card.classList.toggle('expanded');
      const t2 = translations[currentLang];
      card.querySelector('.story-card-read-more').textContent =
        isExpanded ? t2.collapse : t2.read_more;
    });

    grid.appendChild(card);
  });
}

/* Called by applyLanguage() to update story labels without re-fetching */
function rerenderStoryLabels(lang) {
  if (!loadedStories.length) return;
  renderStories(loadedStories);
}

async function loadStories() {
  try {
    const response = await fetch('data.txt');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const text = await response.text();
    if (!text.trim()) throw new Error('data.txt is empty');
    renderStories(parseStories(text));
  } catch (err) {
    console.error('Story loading failed:', err);
    const loading = document.getElementById('storiesLoading');
    if (loading) loading.remove();
    document.getElementById('storiesError').style.display = 'block';
  }
}

/* ──────────────────────────────────────────────────
   BOOT
────────────────────────────────────────────────── */
applyLanguage(currentLang);   // apply saved/default language first
loadStories();                // then fetch stories
