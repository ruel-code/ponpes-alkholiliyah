# PP. Al-Kholiliyah Website

Static HTML site for Pondok Pesantren Al-Kholiliyah Al-Mubarokah, Brani Kulon, Maron-Probolinggo.

## Architecture

- **No build tools, no npm, no bundlers** — pure vanilla HTML/CSS/JS.
- All pages: `index.html` (homepage) + 5 pages under `pages/`.
- **CDN dependencies** (loaded in each HTML `<head>`): Tailwind CSS, Swiper.js (index + galeri), Font Awesome, Leaflet.js (kontak only), Google Fonts (Lora, Poppins, Amiri).
- **Tailwind config is inline** (identical block repeated in every `.html` file). Colors: `primary`, `secondary`, `accent`, `accent-light`, `cream`. Fonts: `lora`, `poppins`.
- **JS** (loaded in order at bottom of `<body>`):
  - `js/navbar.js` — sticky nav with shadow, mobile toggle, close button, active link highlighting
  - `js/galeri.js` — Swiper carousel + gallery filter logic (uses `.active` class)
  - `js/peta.js` — Leaflet map on kontak page (coords: -7.8300, 113.1500)
  - `js/main.js` — IntersectionObserver scroll animations, accordion, contact form alert
- **CSS**: single `css/style.css` — all design tokens as CSS variables, reusable components (btn-primary, btn-accent, btn-outline, card, badge, ornament-bar, unit-bar, stats-bar), `reveal` fade-in animation, Islamic pattern background.

## Design System

```
Primary:    #0d3d1f  | Secondary: #1a5c30
Accent:     #c9a84c  | Accent-2:  #e8c97a
Background: #f9f5eb  | Surface:   #ffffff
Text:       #1a1a1a  | Border:    #e0d9c0
```

- **Heading**: Lora (serif), **Body**: Poppins, **Arabic**: Amiri
- Components: `.ornament-bar` (gold lines + ayat), `.unit-bar` (secondary bg, gold dots), `.stats-bar` (primary bg, gold numbers), `.badge` (primary bg, accent text), `.card` / `.card-hover`, `.btn-primary` / `.btn-accent` / `.btn-outline` / `.btn-outline-dark`, `.section-title-arabic` + `.section-title-latin` + `.section-title-line`, `.filter-btn`, `.pagination-btn`, `.hero-mini` (for inner pages).

## Development

No server required. Open any `.html` file directly in a browser, or use any static file server:

```
npx serve .
```

## Conventions

- All internal links use relative paths (e.g. `pages/berita.html`, `../css/style.css`).
- Site language: Indonesian (Bahasa Indonesia).
- All JS files use `DOMContentLoaded` listener and no module imports.
- Forms are client-side only (simulated alert on submit).
- All images are local files in `images/` directory (no remote placeholders).
- Navbar starts with `bg-primary` and gets `.scrolled` class (shadow) on scroll > 50px.
- Active nav link gets `.active` class (underline via `::after` pseudo-element in CSS).
- Mobile menu is a fixed fullscreen overlay with a close button.
