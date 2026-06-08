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
    nav_stories:       'Stories',
    hero_bg:           'STORIES',
    hero_eyebrow:      'Writer & Storyteller',
    hero_bio:          'I write at the intersection of memory and invention — stories that live in the dark corners of ordinary rooms, in the silence between spoken sentences. My work has been called <em>"quietly devastating"</em> and I consider that the highest of compliments.',
    hero_cta_primary:  'Read My Stories',
    hero_cta_ghost:    'Learn More',
    scroll_hint:       'Scroll',
    photo_placeholder: 'Your Photo',
    about_title:       'About <em>Me</em>',
    about_p1:          'Born in a city that no longer exists in the way I remember it, I came to writing through the back door — through music, through loss, through a stubborn refusal to let certain moments dissolve into the ordinary fog of forgetting.',
    about_p2:          'I studied literature at the University of Edinburgh and spent three years translating obscure 19th-century correspondence before realising that what I truly wanted was to generate new silences, not excavate old ones.',
    about_p3:          'My short fiction has appeared in <em>Granta</em>, <em>The Paris Review</em>, and various anthologies. When I am not writing, I am walking slowly through places where something important once happened.',
    stat_stories:      'Stories Published',
    stat_awards:       'Awards',
    stat_collections:  'Collections',
    tag_fiction:       'Short Fiction',
    tag_essays:        'Literary Essays',
    tag_translation:   'Translation',
    tag_spoken:        'Spoken Word',
    player_eyebrow:    'Ambience & Atmosphere',
    player_title:      'Writing <em>Playlist</em>',
    player_subtitle:   'The sounds that shape the sentences.',
    stories_title:     'Short <em>Stories</em>',
    stories_subtitle:  'Dispatches from the interior. Updated whenever a new one escapes.',
    stories_loading:   'Gathering stories…',
    stories_error:     '⚠ Could not load stories. Make sure <code>data.txt</code> is in the same folder and you\'re running this through a local server (e.g. <code>npx serve .</code> or VS Code Live Server).',
    stories_empty:     'No stories found in data.txt yet.',
    story_label:       'Story',
    read_on:           'Read on',
    read_more:         'Read more',
    collapse:          '— Collapse',
    footer_copy:       '© 2025 — All stories are true in the ways that matter.',
    footer_twitter:    'Twitter',
    footer_instagram:  'Instagram',
    footer_contact:    'Contact',
  },

  fa: {
    nav_home:          'خانه',
    nav_about:         'درباره',
    nav_music:         'موسیقی',
    nav_stories:       'داستان‌ها',
    hero_bg:           'داستان‌ها',
    hero_eyebrow:      'نویسنده و داستان‌سرا',
    hero_bio:          'در تقاطع حافظه و تخیل می‌نویسم — داستان‌هایی که در گوشه‌های تاریک اتاق‌های معمولی زندگی می‌کنند، در سکوت میان جملاتی که گفته می‌شوند. درباره کارم گفته‌اند <em>«آرام ویرانگر است»</em> و من این را بالاترین تعریف می‌دانم.',
    hero_cta_primary:  'خواندن داستان‌ها',
    hero_cta_ghost:    'بیشتر بدانید',
    scroll_hint:       'اسکرول',
    photo_placeholder: 'عکس شما',
    about_title:       'درباره <em>من</em>',
    about_p1:          'در شهری متولد شدم که دیگر آن‌طور که به یاد دارم وجود ندارد. از راه پشتی به نوشتن رسیدم — از طریق موسیقی، از طریق از دست دادن، از طریق امتناع لجوجانه از اینکه بگذارم لحظات خاصی در مه معمولی فراموشی محو شوند.',
    about_p2:          'ادبیات را در دانشگاه ادینبورا خواندم و سه سال صرف ترجمه مکاتبات مبهم قرن نوزدهمی کردم، تا اینکه دریافتم آنچه واقعاً می‌خواهم ایجاد سکوت‌های جدید است، نه کندن سکوت‌های قدیمی.',
    about_p3:          'داستان‌های کوتاه من در <em>گرانتا</em>، <em>پاریس ریویو</em> و مجموعه‌های مختلفی منتشر شده است. وقتی نمی‌نویسم، در جاهایی آرام قدم می‌زنم که زمانی چیز مهمی در آن‌ها اتفاق افتاده است.',
    stat_stories:      'داستان منتشرشده',
    stat_awards:       'جایزه',
    stat_collections:  'مجموعه',
    tag_fiction:       'داستان کوتاه',
    tag_essays:        'مقاله ادبی',
    tag_translation:   'ترجمه',
    tag_spoken:        'کلام گفتاری',
    player_eyebrow:    'فضا و حال‌وهوا',
    player_title:      '<em>پلی‌لیست</em> نوشتن',
    player_subtitle:   'صداهایی که جمله‌ها را شکل می‌دهند.',
    stories_title:     'داستان‌های <em>کوتاه</em>',
    stories_subtitle:  'پیام‌هایی از درون. هر بار که داستان جدیدی فرار می‌کند، به‌روز می‌شود.',
    stories_loading:   'داستان‌ها در حال بارگذاری…',
    stories_error:     '⚠ بارگذاری داستان‌ها ممکن نشد. مطمئن شوید <code>data.txt</code> در همان پوشه قرار دارد و از طریق یک سرور محلی اجرا می‌کنید.',
    stories_empty:     'هنوز هیچ داستانی در data.txt یافت نشد.',
    story_label:       'داستان',
    read_on:           'ادامه',
    read_more:         'بیشتر بخوانید',
    collapse:          '— بستن',
    footer_copy:       '© ۱۴۰۴ — همه داستان‌ها به شیوه‌ای که اهمیت دارد، واقعی‌اند.',
    footer_twitter:    'توییتر',
    footer_instagram:  'اینستاگرام',
    footer_contact:    'تماس',
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
  { title: 'Midnight Correspondence', artist: 'For late-night drafting sessions', src: 'audio/track1.mp3' },
  { title: 'The Long Room',           artist: 'Silence with a slight echo',       src: 'audio/track2.mp3' },
  { title: 'November Margin Notes',   artist: 'Written in the margins of autumn', src: 'audio/track3.mp3' }
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
