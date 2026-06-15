# Devistic Agency Website

> **"Cooked to Perfection"** — A cutting-edge portfolio website for Devistic, a web development agency helping local businesses thrive online.

---

## 📁 Project Structure

```
devistic/
├── index.html              ← Home page
├── pages/
│   ├── about.html          ← About Us
│   ├── portfolio.html      ← Portfolio gallery
│   ├── pricing.html        ← Pricing packages + comparison table
│   ├── blog.html           ← Blog with filterable articles
│   └── contact.html        ← Contact form + info
├── css/
│   └── style.css           ← All styles, design system, animations
├── js/
│   └── main.js             ← Theme toggle, scroll fx, FAQ, counters
├── assets/
│   └── icons/
│       └── favicon.svg     ← Animated SVG favicon
└── README.md               ← This file
```

---

## 🎨 Design System

### Color Palette
| Token       | Value     | Usage                     |
|-------------|-----------|---------------------------|
| `--navy`    | `#0D3B66` | Primary brand, backgrounds|
| `--cream`   | `#FAF0CA` | Light bg, hero text       |
| `--yellow`  | `#F4D35E` | Accents, stats, highlights|
| `--orange`  | `#EE964B` | CTAs, icons, badges       |
| `--red`     | `#F95738` | Gradient endpoint, alerts |

### Typography
- **Headings / Display** → `Oswald` (Google Fonts)
- **Body Text** → `Noto Sans` (Google Fonts)
- **UI / Labels** → `Roboto Condensed` (Google Fonts)
- **Logo / Code** → `Courier New` (system monospace)

### Fonts Import
Already included in `style.css` via Google Fonts CDN.

---

## ✨ Features

### Design
- ✅ Light / Dark theme toggle (persists via `localStorage`)
- ✅ Animated gradient backgrounds (`bgShift` keyframe)
- ✅ Animated gradient text (`gradShift` keyframe)
- ✅ Blinking terminal cursor on logo
- ✅ Scroll-triggered reveal animations (fade, slide-left, slide-right, scale)
- ✅ Stagger delay utility classes (`.delay-1` → `.delay-5`)
- ✅ 3D tilt effect on cards (mousemove)
- ✅ Animated orbs in hero section
- ✅ Floating badge elements

### Functionality
- ✅ Sticky navbar with scroll shadow
- ✅ Mobile hamburger menu with animated bars
- ✅ Animated number counters (IntersectionObserver)
- ✅ Accordion FAQ with smooth open/close
- ✅ Portfolio filter by category
- ✅ Blog filter by category
- ✅ Contact form with success state
- ✅ Scroll-to-top button
- ✅ Typing animation (hero subtitle)
- ✅ Active nav link highlighting per page
- ✅ Keyboard accessible FAQ (Enter/Space)

### SEO
- ✅ Semantic HTML5 (`<nav>`, `<section>`, `<article>`, `<footer>`)
- ✅ Meta description + keywords on every page
- ✅ Open Graph tags on homepage
- ✅ Canonical URLs
- ✅ `aria-label` and `role` attributes throughout
- ✅ `lang="en"` on `<html>`
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Descriptive `alt`/`aria-label` on interactive elements

### Performance
- ✅ CSS custom properties (no JS needed for theming base)
- ✅ `IntersectionObserver` for scroll animations (no scroll listener overhead)
- ✅ Google Fonts loaded via single `@import`
- ✅ `passive: true` on scroll event listeners
- ✅ `prefers-reduced-motion` media query respected

---

## 🚀 Getting Started

### Option 1 — Open Locally
Just open `index.html` in any modern browser. No build step required.

### Option 2 — Live Server (VS Code)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**

### Option 3 — Deploy to GitHub Pages
1. Push the project to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Your site will be live at `https://yourusername.github.io/devistic/`

### Option 4 — Deploy to Netlify
1. Drag and drop the `devistic/` folder onto [netlify.com/drop](https://netlify.com/drop)
2. Get an instant live URL in seconds

---

## 🗺️ Pages Overview

| Page         | File                    | Key Sections                                         |
|--------------|-------------------------|------------------------------------------------------|
| Home         | `index.html`            | Hero, Stats, Services, Why Us, Testimonials, FAQ     |
| About Us     | `pages/about.html`      | Mission, Founder (Henry Benjamin), Values            |
| Portfolio    | `pages/portfolio.html`  | Filterable project gallery (9 projects)              |
| Pricing      | `pages/pricing.html`    | Website packages, Add-ons, Web Care, Comparison table|
| Blog         | `pages/blog.html`       | Featured post, filterable grid, Newsletter signup    |
| Contact      | `pages/contact.html`    | Contact form, Info cards, Map, Process steps         |

---

## 🛠 Customisation Guide

### Update Contact Details
Search `hello@devistic.agency` and `+1 (234) 567-890` across all files and replace with real details.

### Add Google Maps
In `contact.html`, replace the `.map-placeholder` div with:
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%" height="220" style="border:0;border-radius:10px;" 
  allowfullscreen loading="lazy">
</iframe>
```

### Add Real Portfolio Images
Replace emoji in `.portfolio-thumb` divs with:
```html
<img src="../assets/images/project-name.jpg" alt="Project Name preview" loading="lazy">
```

### Connect Contact Form
Replace the JS form handler in `main.js` with a real service like **Formspree**, **EmailJS**, or **Netlify Forms**:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Update Pricing
Edit the `$` amounts in `pricing.html` directly — all prices are plain HTML text.

---

## 📦 Dependencies

All loaded via CDN — no `npm install` needed:
- [Google Fonts](https://fonts.google.com/) — Noto Sans, Oswald, Roboto Condensed

That's it. Zero JavaScript frameworks. Zero build tools. Pure HTML + CSS + Vanilla JS.

---

## 👤 Author

**Devistic Agency** — Built by Henry Benjamin & Team  
📧 hello@devistic.agency

---

*© 2025 Devistic. All rights reserved.*