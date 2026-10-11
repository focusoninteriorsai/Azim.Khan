# Azim Khan — Executive Portfolio

A multi-page personal-branding website for **Mr. Azim Khan, Chief Executive Officer of FocusOn Interiors**.

It is written in plain HTML5, CSS3 and vanilla JavaScript. Each page stands on its own:

- All of a page's CSS and JavaScript is inline in that file. There are no shared `.css` or `.js` files, no frameworks, no build step and no backend.
- Every page has its own full navigation, footer, SEO and Open Graph metadata, and an inline SVG favicon.

Status: **not deployed.**

---

## 1. Setup

There is nothing to install or build.

**Option A: open a file directly**

Double-click `index.html`, or open it with `file://` in any modern browser. All internal links are relative, so you can browse the whole site this way.

**Option B: serve it locally (recommended)**

```bash
cd Azim.Khan
python3 -m http.server 8000
# then open http://localhost:8000/
```

**Deploying later:** upload the folder as it is to any static host (GitHub Pages, Netlify, S3, cPanel). Then:

1. Make `og:image` / `twitter:image` absolute. They are currently relative (`assets/images/azim-khan-og.jpg`), and most social platforms need a full `https://` URL.
2. Add `<link rel="canonical">` tags. These are left out on purpose because no public URL has been confirmed yet.
3. Set `404.html` as the host's custom error page. It uses relative links, so it works best when served from the site root.

---

## 2. File structure

```
Azim.Khan/
├── index.html                          Home: intro loader, hero, expertise, projects, journey, testimonials, CTA
├── about.html                          Biography, career background, education, leadership approach, philosophy
├── experience.html                     Verified vertical career timeline
├── projects.html                       Filterable project cards with zoom hovers
├── project-lt-finance-mahape.html      Project detail + gallery/lightbox
├── project-luminous-haridwar.html      Project detail + gallery/lightbox
├── project-emversity-kochi.html        Project detail + gallery/lightbox
├── project-ericsson-ahmedabad.html     Project detail + gallery/lightbox
├── project-lt-finance-bengaluru.html   Project detail + gallery/lightbox
├── expertise.html                      Categorised capability cards (inline SVG icons, no percentages)
├── highlights.html                     Verified milestones and press coverage
├── contact.html                        Contact cards: phone, WhatsApp, email, LinkedIn, website, offices (no form)
├── 404.html                            Error page linking back to index.html
├── README.md
└── assets/images/                      Portraits, logo, OG image, touch icon, project photography (WebP, ~1.6 MB total)
```

The earlier `styles.css`, `script.js` and `journey.html` were removed. The journey content now lives in `experience.html` and in the journey preview on the home page.

---

## 3. Features

- **Intro loader (index.html only):** a full-screen dark intro reveals "Azim Khan" letter by letter, then exits with an opacity, blur and letter-spacing transition.
  - It plays in full on every first load and on refresh.
  - Navigating back to Home within the same tab session plays a shorter version.
  - Click, tap, Esc, Enter or Space skips it.
  - A JS timeout and a CSS-only fallback remove it even if a script fails.
  - With `prefers-reduced-motion` it shows a brief static frame instead of the animation.
  - It has no fake percentage counter and no spinner.
- **Navigation (all pages):**
  - Sticky header that changes style on scroll, and an active-page state.
  - Animated hamburger below 1120px. The menu traps focus, closes on Esc (focus returns to the button) and closes when a link is chosen.
  - Skip-link and visible focus rings.
- **Motion:** content fades in via IntersectionObserver. Everything is fully visible with JavaScript disabled or reduced motion enabled.
- **Projects:**
  - Category filters with a live count.
  - Detail pages have a keyboard-accessible lightbox (arrows, Esc, focus restore).
- **Contact:** copy-to-clipboard buttons with a toast message. There is **no contact form**, by design.
- **Images:** `loading="lazy"` and explicit dimensions on every image below the fold.
- **Responsive:** tested at 1440 / 1024 / 820 / 768 / 390 / 320px with no horizontal overflow.

### QA performed

Tested with headless Chromium on all 13 pages at 5 viewports:

- No console or page errors, no horizontal overflow, no broken internal links or images.
- Behaviour tests (28/28 pass) cover:
  - Loader: first load, refresh, skip, in-session short version, reduced motion, and the no-JS fallback.
  - Mobile menu: open/close, focus handling, Esc.
  - Project filters, lightbox, and copy buttons.

---

## 4. Research sources

### The 5 original reference URLs

| # | Source | URL |
|---|--------|-----|
| 1 | Azim Khan digital VCard | https://focusoninteriorsai.github.io/Azim.khan-VCard/ |
| 2 | FocusOn Interiors (official site) | https://focusoninteriors.com/ |
| 3 | FocusOn Interiors — About (project listing) | https://roushan62.github.io/FocusOn/about/ |
| 4 | Azim Khan on LinkedIn | https://in.linkedin.com/in/azim-khan-1424561a9 |
| 5 | Previous Azim Khan portfolio | https://roushan62.github.io/Azim-Khan/ |

### Press and supporting sources (checked)

| Date | Publication | URL |
|------|-------------|-----|
| 27 Jan 2026 | Realty+: *FocusOn Interiors names Azim Khan CEO to drive national expansion* | https://www.rprealtyplus.com/article/focuson-interiors-names-azim-khan-ceo-to-drive-national-expansion-123855.html |
| 23 Jan 2026 (upd. 27 Jan) | Architecture Update: *FocusOn Interiors appoints Azim Khan as CEO* | https://architectureupdate.in/focuson-interiors-appoints-azim-khan-as-ceo/ |
| 17 Dec 2025 | ANI: *FocusOn Interiors strengthens market position with the acquisition of Riya Enterprises* (company press release via VMPL) | https://aninews.in/news/business/focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises20251217124806/ |
| 17 Dec 2025 | The Tribune: same release | https://www.tribuneindia.com/news/business/focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises/ |
| — | FocusOn Interiors leadership team page | https://focusoninteriors.com/team/ |

Both quotes on the site are taken word for word from Realty+: Raja Khan's quote about Azim, and Azim's own quote on his appointment. The two client testimonials (L&T Finance and Ericsson) come from the previous portfolio (reference 5) and are attributed to the client organisation only.

---

## 5. Content flags and conflicts (please review)

Nothing on the site is invented. These items need confirming by Mr. Khan or the FocusOn team:

1. **LinkedIn (reference 4)** returned HTTP 403 to automated access, so I couldn't read it directly. Any LinkedIn-derived details come from the previous portfolio (reference 5).
2. **Education:**
   - A 2016–2020 four-year programme is mentioned, but no institution is named, so the site doesn't name one.
   - Manipal University Jaipur (enrolled October 2024, 2024–2027) comes from reference 5 only.
3. **Early-career dates:** the year he joined as Backend Operator (about 2017–18) and the dates of his Head of Operations role are approximate. The timeline marks them as such.
4. **CEO effective date:** Architecture Update says "effective 22 January 2025". This is clearly a typo for **2026**: the article was published in January 2026, after the December 2025 merger. The site uses January 2026.
5. **Emversity, Kochi area:** the FocusOn project listing (reference 3) gives **55,000 sq ft** and the previous portfolio gives **5,500 sq ft**. The site shows 55,000 sq ft. Please confirm.
6. **Company-wide statistics** (project counts, total square footage, team size) differ between sources, so none are shown.
7. **Offices:** the VCard lists the Delhi head office (C-19, Dilshad Colony). Reference 5 and ANI place the HQ in Gurugram/Gurgaon (UN-150, Sikanderpur). Both offices are shown and labelled.
8. **Direct contact details** (azim.khan@focusoninterior.in) appear only in reference 5. The direct mobile number **+91 96678 17267 is intentionally not published**. The contact page shows the company line, WhatsApp, company inbox, direct email, LinkedIn and website.
9. **Excluded as unverifiable:**
   - A LinkedIn quote attributed to Shanu Khan.
   - Claims about a BW green-wall feature, StartupTalky coverage and a Sanar Hospital project.
   - Any awards. No awards appear on the site because none could be verified.
10. **ANI / Tribune article** is a paid company press release (marked "advertorial" by ANI). The site labels it "company press release", not independent coverage.
11. **Client list:** the logos/names strip (Infosys, Ericsson, Max Life, etc.) shows organisations the **FocusOn team** has delivered for, per the VCard. They are not presented as personal engagements.

---

## 6. Image credits

- **Project photography** (L&T Finance Mahape and Bengaluru, Luminous Haridwar, Emversity Kochi, Ericsson Ahmedabad): © FocusOn Interiors, taken from the company's own published project material. No stock photography is used anywhere.
  - One source image (Luminous architecture view) was horizontally mirrored and has been corrected; the reversed signage was the giveaway.
- **Portraits:** © FocusOn Interiors / Azim Khan (VCard and previous portfolio). The press portrait is as published by Realty+.
- **FocusOn logo:** © FocusOn Interiors.
- **Icons:** hand-written inline SVG.

---

## 7. Editing notes

- Each page is self-contained, so **any change to shared elements (nav, footer, colours) must be made in every HTML file**.
- Design tokens are CSS custom properties at the top of each page's `<style>` block:
  `--bg #111111 · --bg-2 #191919 · --card #202020 · --red #E53935 · --red-hi #FF453A · --text #F5F5F5 · --muted #A5A5A5 · --border #333333`.
- Fonts use the system stack (SF Pro / Segoe UI / Inter-style fallbacks), so no web fonts are loaded.
