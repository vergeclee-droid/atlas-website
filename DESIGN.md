---
name: Atlas Consulting
description: >-
  Corporate website for Atlas Consulting (輿圖顧問 · 亘帛資訊科技) — a
  bilingual IT consulting firm bridging China and global markets. Professional,
  trustworthy, cross-border.
version: alpha
colors:
  primary: "#1a3a5c"
  primary-light: "#2c6fbb"
  accent: "#4a9eff"
  accent-light: "#e8f0fe"
  bg: "#ffffff"
  bg-alt: "#f5f7fa"
  bg-dark: "#0f2538"
  text: "#2d3748"
  text-light: "#6b7a8d"
  text-white: "#ffffff"
  border: "#e2e8f0"
  error: "#dc2626"
  error-bg: "#fef2f2"
typography:
  heading-xl:
    fontFamily: Inter, Noto Sans SC, sans-serif
    fontSize: 3.2rem
    fontWeight: 800
    lineHeight: 1.25
  heading-lg:
    fontFamily: Inter, Noto Sans SC, sans-serif
    fontSize: 2.2rem
    fontWeight: 700
    lineHeight: 1.2
  heading-md:
    fontFamily: Inter, Noto Sans SC, sans-serif
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1.4
  heading-sm:
    fontFamily: Inter, Noto Sans SC, sans-serif
    fontSize: 1.1rem
    fontWeight: 700
    lineHeight: 1.4
  body-md:
    fontFamily: Noto Sans SC, Inter, sans-serif
    fontSize: 1.05rem
    fontWeight: 400
    lineHeight: 1.8
  body-sm:
    fontFamily: Noto Sans SC, Inter, sans-serif
    fontSize: 0.95rem
    fontWeight: 400
    lineHeight: 1.7
  label-sm:
    fontFamily: Inter, Noto Sans SC, sans-serif
    fontSize: 0.85rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.03em
    textTransform: uppercase
  label-xs:
    fontFamily: Inter, Noto Sans SC, sans-serif
    fontSize: 0.78rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.5px
  stat-num:
    fontFamily: Inter, sans-serif
    fontSize: 2rem
    fontWeight: 800
    lineHeight: 1
rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  full: 9999px
spacing:
  container-x: 24px
  section-y: 100px
  header-bottom: 60px
  card-padding: 32px
  grid-gap: 24px
components:
  card-service:
    backgroundColor: "{colors.bg-alt}"
    rounded: "{rounded.md}"
    padding: 40px
    textColor: "{colors.text}"
  card-service-hover:
    backgroundColor: "{colors.bg-alt}"
  card-service-ai:
    backgroundColor: linear-gradient(135deg, {colors.primary}, #1a2a5c, #2d1f6e)
    rounded: "{rounded.md}"
    padding: 48px
    textColor: "{colors.text-white}"
  card-case:
    backgroundColor: "{colors.bg-alt}"
    rounded: "{rounded.md}"
    padding: 32px
  card-partner:
    backgroundColor: "{colors.bg-alt}"
    rounded: "{rounded.sm}"
    padding: 24px
  card-stat:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.md}"
    padding: 28px
  card-contact-info:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.md}"
    padding: 28px
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text-white}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: 14px 32px
  button-primary-hover:
    backgroundColor: "{colors.primary-light}"
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.text-white}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: 14px 32px
  button-outline-hover:
    backgroundColor: rgba(74,158,255,0.1)
  nav-link:
    typography: "{typography.body-sm}"
  nav-cta:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text-white}"
    rounded: "{rounded.sm}"
    padding: 10px 24px
  nav-cta-hover:
    backgroundColor: "{colors.primary-light}"
  lang-btn:
    typography: "{typography.label-xs}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  lang-btn-active:
    textColor: "{colors.text-white}"
  form-input:
    backgroundColor: "{colors.bg-alt}"
    rounded: "{rounded.sm}"
    padding: 14px 16px
    typography: "{typography.body-md}"
  form-input-focus:
    backgroundColor: "{colors.bg}"
    borderColor: "{colors.accent}"
---

## Overview

Atlas Consulting's website communicates trust, cross-border capability, and technical authority. The design language is **professional corporate with warmth** — a deep navy foundation with a bright blue accent, generous white space, and subtle gradient treatments that signal technical sophistication without being flashy.

The site serves two primary audiences simultaneously: Chinese enterprises expanding overseas and international companies entering China. The bilingual interface (简体中文 / 繁體中文 / English) is not a feature bolted on — it is a structural concern that shapes layout, typography, and content strategy at every level.

## Brand & Style

The brand personality is **trusted advisor**. The visual tone is serious but not cold, premium but not luxury. Inspiration comes from professional services firms (Deloitte, McKinsey) and tech infrastructure brands (Microsoft Azure, AWS).

The primary communication mode is **clear, confident, and concise**. The hero delivers the value proposition in one glance. Service cards are dense enough to be useful but spacious enough to scan. Every section has a clear rhetorical purpose — there is no decorative content, no stock photography, no abstract illustration.

## Colors

The palette is anchored in a deep navy that carries institutional weight, brightened by a blue accent that signals modern cloud-era capability.

- **Primary (#1a3a5c):** Deep navy. Used for headings, brand elements, top/bottom chrome. Conveys stability and depth.
- **Primary-light (#2c6fbb):** Medium blue. Hover states, secondary emphasis, inline code accents.
- **Accent (#4a9eff):** Bright electric blue. The interaction driver — buttons, links, active indicators, gradient centrepoints.
- **Accent-light (#e8f0fe):** Subtle tinted background for section tags, icon containers, hover dim areas.
- **Background (#ffffff):** Pure white page canvas.
- **Background-alt (#f5f7fa):** Cool off-white for alternating sections (About, Contact).
- **Background-dark (#0f2538):** Deep navy-black for footer and overlay areas.
- **Text (#2d3748):** Dark charcoal-grey body copy — softer than pure black for long reading comfort.
- **Text-light (#6b7a8d):** Muted for secondary info, metadata, descriptive text.
- **Border (#e2e8f0):** Thin cool grey for card outlines and form boundaries.

### Gradient system

Atlas uses subtle gradient accents — not as backgrounds but as signalling devices:

- **Accent gradient** (`#4a9eff → #2c6fbb`): Standard button and icon treatment.
- **AI gradient** (`#7c3aed → #a855f7`): Purple shift for AI & Innovation section only.
- **M365 gradient** (`#0078d4 → #50e6ff`): Teal shift for Microsoft 365 section only.

Gradients are always `135deg` diagonal. When applied to text (hero highlight), use `background-clip: text` with transparent fill.

## Typography

Chinese text (Noto Sans SC) is the default body face, with Inter specified for numbers, statistics, and English UI labels. Both fonts are weighted identically for seamless script switching.

- **Heading-xl (Hero):** The only place 800 weight is used. The English headline is large (`3.2rem`), multi-line, with a gradient accent on the key word. Chinese text at `2.4rem` in the same family.
- **Heading-lg (Section titles):** `2.2rem`, 700 weight, primary colour. Always centred above a section.
- **Heading-md (Card titles):** `1.25rem`, 700 weight, primary colour. Title of each service and case card.
- **Body-md (Core reading):** `1.05rem`, 1.8 line-height — generous leading for mixed CJK/Latin paragraphs.
- **Body-sm (Card descriptions):** `0.95rem`, 1.7 line-height.
- **Section-tag:** `0.85rem`, 600 weight, uppercase, accent-light background. Overline labels above section headers.
- **Label-xs (Language buttons, badges):** Smallest visible text.

English cards use `word-break: break-word; overflow-wrap: break-word` to handle long technical terms without overflow.

## Layout

The layout follows a **centred single-column** page with fixed-width sections.

- **Container:** `max-width: 1200px`, horizontal padding `24px`.
- **Section padding:** `100px` vertical — generous breathing room.
- **Section header:** `60px` bottom margin, centred alignment.
- **Service grid:** 3-column responsive grid. The first card (Cloud) spans 2 columns. The last card (AI Innovation) spans full width with a special gradient treatment.
- **Partner grid:** 6-column logo wall.
- **Contact:** 2-column split (info cards : form).

### Responsive behaviour

- **Desktop (>1024px):** Full grid. Nav is transparent on hero, gains white background on scroll.
- **Tablet (768-1024px):** Service grid collapses to 2 columns. Partner grid to 3 columns.
- **Mobile (<768px):** Single column. Services become stacked cards. Nav becomes hamburger with overlay. Bottom padding added for touch targets.

## Elevation & Depth

Depth is moderate — enough to establish a clear visual hierarchy, not enough to mimic material design.

- **Cards (service, case, stat):** `0 4px 24px rgba(26,58,92,0.08)` — a slight navy-tinted shadow.
- **Card hover:** `0 8px 40px rgba(26,58,92,0.14)` — a noticeable lift of `-4px` to `-6px` translateY.
- **Scrolled navbar:** `0 1px 8px rgba(0,0,0,0.06)` with `backdrop-filter: blur(12px)`.
- **Form input focus:** `0 0 0 3px rgba(74,158,255,0.15)` — blue glow.

No glassmorphism (except navbar blur on scroll), no heavy shadows, no extreme elevation.

## Shapes

- **Cards (service, solution, case, stat):** 12px rounded corners.
- **Buttons and partner logos:** 8px rounded corners.
- **Icon containers (sc-icon, sol-icon):** 14-16px — tighter than cards, distinct from buttons.
- **Section tags, hero badge:** 20px pill shape.

## Animations

Subtle and sparse. The only animation use is a **fade-in-up** sequence on hero elements (badge → h1 → p → buttons), staggered by `0.1s` each.

- Duration: `0.8s ease`.
- Card hover: `0.3s cubic-bezier(0.4, 0, 0.2, 1)`.
- No scroll-triggered animations, no parallax, no reveals.
- Loading spinner: `0.6s linear infinite` — only during form submission.
- Respect `prefers-reduced-motion`.

## Components

### Navigation
Fixed top navbar with two visual states:
- **Default (top of page):** Fully transparent background. Logo is white. Nav links and language switcher are white.
- **Scrolled:** White background with `backdrop-filter: blur(12px)`. Logo switches to blue variant. Links become dark text. A thin bottom shadow appears.

The nav has a **CTA button** (`nav-cta`) — "联系我们" — that is visually distinct from text links.

### Hero
Full-viewport section with a gradient background (deep navy radial pattern). Content is centred vertically. Contains:
- Badge label ("Your IT Bridge to China")
- Main heading (`3.2rem`, 800 weight) with a gradient-accent highlight word
- Tagline in accent blue
- Description paragraph
- Two buttons (primary + outline)
- Bottom wave SVG separator

### Service Cards
Each of the 7 services is represented by a card with:
- 56px icon container (coloured gradient per service type)
- Title (heading-md)
- Description
- Feature list (› prefixed items)
- Hover: lifts `-6px`, shadow deepens, border vanishes

Special variants:
- **Cloud (card 1):** Spans 2 columns, horizontal layout with larger icon.
- **AI Innovation (card 7):** Full-width, dark gradient background, purple accent, white text.

### Partner Logo Wall
6-column grid of partner logos. Each logo has:
- Light background container with thin border
- Logo image at 70% opacity; hover lifts to 100%
- Hover: accent border, subtle shadow, `-3px` lift
- `partner-logo.featured` variant for key partners (accent highlight border)

### Contact Form
Standard contact form with:
- Floating labels in 600 weight
- Input fields with `bg-alt` background, `1px border` border
- Focus: accent border + blue glow shadow
- Error state: red border + `#fef2f2` background
- Submit button with loading spinner state

### Footer
Dark navy background with a 3px gradient top border. 4-column grid (brand → services → solutions → contact). Bottom bar with copyright text.

### Service Detail Pages
Each of the 7 service categories (cloud, infrastructure, professional, microsoft-365, hardware, network-security, ai-innovation) has a detail page under `/services/`. These pages follow the same visual language with expanded content, deeper feature lists, and case study callouts.

## Do's and Don'ts

- **Do** always provide all three language versions (zh-CN, zh-TW, EN) for every content block.
- **Do** use the accent gradient for primary buttons and service icon backgrounds only — not for decorative elements.
- **Do** use `word-break: break-word` on English service card text. Technical terms like "Microsoft 365" can overflow otherwise.
- **Don't** use stock photography, abstract illustrations, or decorative hero images. Atlas is an engineering services firm — content is information, not imagery.
- **Don't** use heavy shadows on the hero. The gradient background + wave is already a strong visual statement.
- **Don't** animate on page load after the hero sequence. No scroll-triggered reveals, no parallax.
- **Don't** use purple outside the AI & Innovation section. Purple is reserved for AI-specific signalling.
- **Don't** round the hero wave or footer — they should bleed edge-to-edge.
- **Don't** mix the two language fonts in the same line of text unless unavoidable (e.g., "Microsoft Azure Expert 团队").
- **Do** let the hero wave SVG sit at the bottom of the hero section, filling 100% width with `line-height: 0`.
