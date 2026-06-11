# Spec: Virtual Office — Hero Product in AI & Innovation Section

## Objective

Add **Virtual Office AI Deployment** as a featured hero product under the **AI & Innovation** service on the Atlas Consulting website (www.atlasconsulting.cn), with direct link to `vo.atlasconsulting.cn`, a branded slogan, and a "Request Demo" call-to-action.

## Branding & Slogan

**Slogan (EN):** `Agents + Humans — The New Century of Office`
**Slogan (CN):** `人機協作，辦公新紀元`

## Files to Modify

All paths relative to `/home/chris1bb/atlas-site-refresh/`:

1. `index.html` — Homepage services grid (AI card)
2. `services/ai-innovation.html` — AI service detail page (new VO product section)
3. `assets/js/translations.js` — Global i18n keys (3 languages)
4. `assets/js/service-detail-i18n.js` — Service detail i18n keys (3 languages)
5. `assets/css/style.css` — Optional: add VO feature card styles within the AI page

## Acceptance Criteria

### Task 1: Homepage AI Card Update (`index.html`)

- [ ] Add 5th bullet to AI card's `sc-list`:
  - **zh-CN (default):** "Virtual Office AI 部署 — 人機協作，辦公新紀元"
  - **EN:** "Virtual Office AI — Agents + Humans, The New Century of Office"
- [ ] Bullet links to `https://vo.atlasconsulting.cn/`
- [ ] Add a "Request Demo" button (or "预约演示") inside the AI service card, linking to `../#contact` with pre-selected service type
- [ ] Wrap in `data-i18n` attributes for all 3 languages

### Task 2: AI Service Detail Page — VO Product Section (`services/ai-innovation.html`)

Add a dedicated section between project cases and the CTA:

- [ ] Section title: "Virtual Office AI Deployment" with slogan
- [ ] 4 feature cards in a 2x2 grid:
  1. **AI Meeting Minutes** — Intelligent meeting transcription and minutes
  2. **Multi-Agent Automation** — Autonomous workflow agents
  3. **Sales Pipeline** — End-to-end deal tracking
  4. **VO Hub** — Centralized office management
- [ ] Two CTA buttons side by side:
  - "造訪 Virtual Office →" → `https://vo.atlasconsulting.cn/` (external, new tab)
  - "预约演示" → `..` (back to homepage contact form or scroll to #contact)
- [ ] All text via `data-i18n` attributes (3 languages)
- [ ] Visual styling consistent with the purple gradient AI theme

### Task 3: i18n Global Translations (`assets/js/translations.js`)

Add to all 3 languages (zh-CN, zh-TW, en):

```
'svc.ai.l5': 'Virtual Office AI 部署 — 人機協作，辦公新紀元'
          / 'Virtual Office AI 部署 — 人機協作，辦公新紀元'
          / 'Virtual Office AI — Agents + Humans, The New Century of Office'
'demo.cta': '预约演示 / '預約演示' / 'Request Demo'
```

### Task 4: Service Detail i18n (`assets/js/service-detail-i18n.js`)

Add VO section translations for all 3 languages under the `ai` object:

- Section title, subtitle, hero blurb
- 4 feature card titles + descriptions
- CTA button texts

### Task 5: CSS (`assets/css/style.css`)

If needed, add styles for:
- `.vo-feature-grid` — 2x2 grid for VO features on the AI detail page
- `.vo-cta-bar` — dual CTA layout

## Commands

```
Dev (live preview): python3 -m http.server 8000 (serves from /home/chris1bb/atlas-site-refresh/)
Lint HTML: npx html-validate index.html services/ai-innovation.html
Lint JS: npx eslint assets/js/*.js
Git: cd /home/chris1bb/atlas-site-refresh && git add -A && git commit -m "feat: add Virtual Office hero product to AI section"
```

## Project Structure (relevant)

```
atlas-site-refresh/
├── index.html                    ← HOMEPAGE (services grid)
├── services/
│   ├── ai-innovation.html        ← AI SERVICE PAGE (add VO section)
│   ├── cloud.html
│   ├── infrastructure.html
│   ├── network-security.html
│   ├── microsoft-365.html
│   ├── hardware.html
│   └── professional.html
├── assets/
│   ├── css/
│   │   └── style.css             ← GLOBAL STYLES (add VO styles)
│   └── js/
│       ├── translations.js       ← GLOBAL i18n (add keys)
│       ├── service-detail-i18n.js ← SERVICE i18n (add VO keys)
│       └── main.js
└── .git/
```

## Code Style

- Existing patterns: CSS variables, `data-i18n` attributes, semantic HTML5, BEM-like class naming
- Purple gradient for AI: `--accent-gradient-ai: linear-gradient(135deg, #7c3aed, #a855f7)`
- Service cards use `.service-card`, `.sc-icon`, `.sc-list` classes
- Detail pages use `.sd-section`, `.sd-section-alt`, `.sd-cap-grid`, `.sd-projects-grid`
- All visible text MUST use `data-i18n` attributes — no hardcoded text outside the i18n objects

## Testing Strategy

After changes:
1. Syntax check all modified files
2. Open `index.html` in browser — verify AI card has new bullet + demo button
3. Open `services/ai-innovation.html` — verify VO section renders, both CTA links work
4. Toggle language (简/繁/EN) — verify all new keys display correctly

## Success Criteria

- VO appears in the homepage AI card as a featured bullet linked to `vo.atlasconsulting.cn`
- AI detail page has a full VO product section with 4 features + 2 CTAs
- All text is i18n-ready for all 3 languages
- No broken links, no syntax errors
- Git commit with changes staged and committed

## Boundaries

- **Always:** Use `data-i18n` attributes; follow existing CSS patterns; add translation keys in ALL 3 languages
- **Ask first:** Before changing styles outside the AI domain; before adding new JS libraries
- **Never:** Hardcode display text; break existing i18n keys; modify other service pages
