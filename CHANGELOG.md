# Joshua Generation Church Website - Build Log

## Project Overview
Rebuilding [za.joshgen.org](https://za.joshgen.org) as a clean, modern static HTML/CSS/JS site. The original WordPress site has duplicate markup, exposed shortcodes, and a dated design. The new version keeps the same content and blue/white color scheme with modern layout, better UX, and cleaner code.

**Tech Stack:** Static HTML5, CSS3 (custom properties), Vanilla JS, Leaflet.js (maps), Google Fonts (Montserrat + Inter)

**Agency:** DOWN DOG MEDIA

**Live Site:** [https://josh-gen-website.vercel.app](https://josh-gen-website.vercel.app)

---

## File Structure
```
/josh-gen-website/
├── index.html              (Homepage)
├── who-we-are.html         (About page)
├── what-we-believe.html    (Core beliefs)
├── the-gospel.html         (Gospel presentation - 7 steps)
├── statement-of-faith.html (Doctrinal statement - 10 points)
├── new-believers.html      (Next steps for new believers)
├── locations.html          (Leaflet map + congregation list)
├── events.html             (Events with category filters)
├── sermons.html            (Sermon cards + Spotify/Apple links)
├── contact.html            (Contact form + map)
├── give.html               (Tabbed banking details)
├── css/
│   ├── style.css           (Variables, reset, typography, layout)
│   ├── components.css      (Buttons, cards, nav, footer, hero)
│   └── responsive.css      (Media queries: 1024px, 768px, 480px)
├── js/
│   ├── main.js             (Mobile menu, scroll, tabs)
│   ├── locations.js        (Leaflet map + 55 congregations)
│   └── events.js           (Category filter tags)
├── images/                 (Hero images, congregation photos)
└── CHANGELOG.md            (This file)
```

---

## Build Progress

### Phase 1: Foundation (Complete)
- [x] CSS foundation with custom properties (colors, typography, spacing)
- [x] BEM-like component architecture
- [x] Responsive breakpoints (1024px, 768px, 480px)
- [x] Shared components: nav (with dropdown), footer, hero, cards, buttons

### Phase 2: All 11 Pages Built (Complete)
- [x] Homepage - hero, What's New cards, Who We Are, Get Connected
- [x] Who We Are - mission, welcome, vision sections
- [x] What We Believe - salvation, baptism, Holy Spirit, Dying to Live
- [x] The Gospel - 7-step visual timeline with prayer CTA
- [x] Statement of Faith - 10 doctrinal points
- [x] New Believers - welcome + 6 next-step icon cards
- [x] Locations - Leaflet.js map + province-grouped list with search
- [x] Events - featured hero + 6 cards with category filters
- [x] Sermons - sermon cards with congregation dropdown filter
- [x] Contact - map + office info + contact form
- [x] Give - tabbed banking details (Tithing / Beyond the Tithe)

### Phase 3: Real Data Integration (Complete)
- [x] Footer social icons replaced with inline SVGs (Facebook, Instagram, YouTube)
- [x] Social links updated to real URLs across all 11 pages:
  - Facebook: https://www.facebook.com/JoshGenChurchGlobal
  - Instagram: https://www.instagram.com/joshgenchurch_global/
  - YouTube: https://www.youtube.com/@joshgenchurch
- [x] Homepage What's New cards linked to real URLs:
  - Sunday Sermons Spotify: https://open.spotify.com/show/7vssMR12QUgLkRDitGol4p
  - YouTube: https://www.youtube.com/@joshgenchurch/videos
  - Dying to Live Podcast: https://open.spotify.com/show/7mx9bkAzyKTFqzFArZumB7
- [x] Sermons page badges linked to real podcast URLs:
  - Spotify: https://open.spotify.com/show/7vssMR12QUgLkRDitGol4p
  - Apple Podcasts: https://podcasts.apple.com/za/podcast/sunday-sermons/id525327012
- [x] All 55 real congregations added to locations.js (scraped from za.joshgen.org/venues/)
  - Real addresses and Google Maps directions links
  - Grouped by province: Western Cape, Eastern Cape, Free State, Northern Cape, North West, Zimbabwe
  - Map markers deduplicated for multi-service locations

### Phase 4: Visual Improvements (Complete)
- [x] Downloaded real images from Josh Gen Instagram (@joshgenchurch_global) and website
- [x] Downloaded belief section images from live site (salvation, baptism, holy spirit, dying to live)
- [x] Downloaded hero images: wave with logo, pastor preaching, Mike Davies teaching, water/baptism
- [x] Downloaded congregation photo (Edgemead), who-we-are group photo, family camp banner
- [x] Replaced ALL gradient placeholder split images on What We Believe page with real photos
- [x] Replaced ALL gradient placeholder split images on Who We Are page with real photos
- [x] Updated hero backgrounds on all 11 pages with real images
- [x] Updated sermon cards with real Instagram sermon graphics (with speaker names, dates, titles)
- [x] Sermon cards now link to Spotify podcast page
- [x] Replaced ALL gradient date placeholder images on Events page with real photos
  - Easter Conference → family-camp.jpg
  - Night of Worship → church-5.jpg (group photo)
  - Youth Rally → church-7.jpg (testimony photo)
  - Community Outreach → edgemead.jpg (congregation)
  - Leaders Conference → hero-home.jpg (pastor preaching)
  - Worship Workshop → church-8.jpg (sermon promo)
- [x] Added favicon (Josh Gen logo) to all 11 pages
- [x] Homepage hero uses wave/logo image from live site

### Images Downloaded
```
images/
├── hero-main.jpg       (Wave with JG logo - homepage hero)
├── hero-home.jpg       (Pastor preaching - about/events hero)
├── hero-sermons.jpg    (Mike Davies teaching - sermons hero)
├── hero-water.jpg      (Wave close-up - gospel/believe/give hero)
├── salvation.jpg        (What We Believe - salvation section)
├── baptism.jpg          (What We Believe - baptism section)
├── holy-spirit.jpg      (What We Believe - holy spirit section)
├── dying-to-live.jpg    (What We Believe - dying to live section)
├── who-we-are.jpg       (Who We Are - welcome section)
├── edgemead.jpg         (Edgemead congregation - vision section)
├── the-gospel.jpg       (Gospel video thumbnail)
├── choose-church.jpg    (Choose a church graphic)
├── family-camp.jpg      (Family camp event banner)
├── church-1.jpg         (Sermon: Who Are You Looking At - Mike Davies)
├── church-2.jpg         (Sermon: God Will Provide - Andrew Selley)
├── church-3.jpg         (Sermon: Biblical Church Meeting - Andrew Selley)
├── church-4.jpg         (Sermon: Come Take Drink - Mike Davies)
├── church-5.jpg         (Family group photo)
├── church-6.jpg         (Sermon: Living Faithfully in Babylon - Mike Davies)
├── church-7.jpg         (Testimony/profile photo)
├── church-8.jpg         (Sermon promo)
├── logo.png             (JG logo white on transparent)
└── favicon.png          (JG favicon 192x192)
```

---

## Congregations (55 total)

### Western Cape (48)
Edgemead (08:30AM, 11AM, PM) | Sunningdale (08:30AM, 11AM, PM) | Durbanville (AM, PM, Central) | Pinehurst PM | Stellenbosch (Central, AM, PM) | Wellington (AM, PM) | Paarl | George (AM, PM) | Mossel Bay (AM, PM) | City Bowl AM | Woodstock | Sea Point | Wynberg | Muizenberg | Milnerton | Melkbosstrand | Khayelitsha | Dunoon | Somerset West | Gordon's Bay | Grabouw | Hermanus | Bredasdorp | Swellendam | Robertson | Montagu | Bonnievale PM | Worcester | De Doorns | Malmesbury | Langebaan | Yzerfontein | Hartenbos | Sonskyn Vallei | Still Bay | Oudtshoorn

### Eastern Cape (1)
Willowmore

### Free State (2)
Bloemfontein | Bethlehem

### Northern Cape (1)
Kimberley

### North West (1)
Potchefstroom

### Zimbabwe (2)
Harare Central | Tafara

---

## Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Navy | `#1a3a5c` | Nav, headings, dark sections |
| Accent Blue | `#2b7de9` | CTAs, links, highlights |
| White | `#ffffff` | Backgrounds, text on dark |
| Light Grey | `#f5f7fa` | Alternating section backgrounds |
| Dark Text | `#1a1a2e` | Body text |

## Typography
- **Headings:** Montserrat (600, 700, 800)
- **Body:** Inter (400, 500, 600)

## External Links
- Facebook: https://www.facebook.com/JoshGenChurchGlobal
- Instagram: https://www.instagram.com/joshgenchurch_global/
- YouTube: https://www.youtube.com/@joshgenchurch
- Sunday Sermons (Spotify): https://open.spotify.com/show/7vssMR12QUgLkRDitGol4p
- Sunday Sermons (Apple): https://podcasts.apple.com/za/podcast/sunday-sermons/id525327012
- Dying to Live Podcast: https://open.spotify.com/show/7mx9bkAzyKTFqzFArZumB7
- Dying to Live (Apple): https://podcasts.apple.com/za/podcast/dying-to-live-podcast/id1706977803
