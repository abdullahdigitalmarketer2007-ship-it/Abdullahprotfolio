# Design System
## Abdullah — Digital Marketing Specialist

## 1. Creative direction
**Premium dark editorial portfolio.** The design should feel like a carefully art-directed personal brand: confident, spacious, precise, and contemporary. It should not resemble a generic AI portfolio template.

## 2. Brand attributes
- Professional
- Strategic
- Clear
- Modern
- Approachable
- Results-aware, without promising guaranteed outcomes

## 3. Color tokens
Use these as the initial palette; keep contrast accessible.

| Token | Hex | Usage |
|---|---|---|
| `color.bg` | `#101114` | Main page background |
| `color.surface` | `#191B20` | Cards and panels |
| `color.surface-alt` | `#22252B` | Hover/secondary surfaces |
| `color.text` | `#F4F2ED` | Main text |
| `color.muted` | `#A7A9B0` | Secondary text |
| `color.line` | `#343740` | Borders/dividers |
| `color.accent` | `#B8F36B` | Primary accent and key actions |
| `color.accent-ink` | `#151812` | Text on accent buttons |
| `color.link` | `#A9C7FF` | Text links |

Do not use every color at equal intensity. Accent green should be restrained and purposeful.

## 4. Typography
Suggested type pairing:
- English display/headings: `Manrope` or `Space Grotesk`
- English body: `Inter`
- Bangla: `Hind Siliguri` or `Noto Sans Bengali`

Use locally bundled fonts if available, otherwise use reliable web font loading with fallbacks. Avoid overly decorative type.

Suggested scale:
- Hero heading: clamp(2.8rem, 7vw, 6.5rem), tight line-height
- H1: 56–88 px desktop, 40–52 px mobile
- H2: 36–52 px desktop, 30–36 px mobile
- H3: 20–26 px
- Body: 16–18 px
- Small labels: 12–14 px

## 5. Layout and spacing
- Main content max width: 1200 px
- Wide hero max width: 1320 px
- Desktop side padding: 48–64 px
- Tablet side padding: 32 px
- Mobile side padding: 20–24 px
- Section vertical spacing: 96–128 px desktop; 64–80 px mobile
- Use a 12-column desktop grid where helpful.
- Keep text line length around 60–75 characters.

Spacing scale (8 px base):
`4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128`

## 6. Shape and depth
- Card radius: 16–22 px
- Buttons: 999 px pill or 10–12 px radius; use one consistent system
- Borders: subtle 1 px neutral lines
- Shadows: very restrained; prefer contrast and borders over heavy shadows
- Avoid excessive glassmorphism and glowing effects

## 7. Components
### Header
- Compact wordmark “ABDULLAH”
- Desktop horizontal navigation
- Language toggle
- Accent contact CTA
- Mobile menu with clear open/close state

### Buttons
- Primary: accent fill with dark text
- Secondary: transparent with border
- Text link: underline or arrow treatment
- Include hover, focus, active, and disabled states

### Service cards
- Use distinct typographic hierarchy and simple line icons.
- Keep descriptions concise.
- Avoid decorative icons that do not clarify meaning.

### Project cards
- Use varied but consistent image proportions.
- Display project category and concise summary.
- Label practice/demo work honestly.
- Do not show made-up metrics.

### Tags
- Neutral outline tags for skills and service labels.
- Avoid percentage-based skill meters.

### Contact block
- High-contrast final CTA.
- Show WhatsApp prominently.
- Include Facebook and LinkedIn links with correct destination handling.

## 8. Motion
- Subtle entrance transitions only where they support hierarchy.
- Hover transitions around 150–250 ms.
- Avoid scroll-jacking, excessive parallax, looping animations, or motion-heavy backgrounds.
- Respect `prefers-reduced-motion`.

## 9. Responsive behavior
### Mobile
- Single-column sections.
- Stack hero CTAs when needed.
- Keep navigation compact and accessible.
- Project cards become full-width.
- Prevent oversized headings from clipping.

### Tablet
- Use two-column service/project grids where space permits.
- Maintain generous gutters.

### Desktop
- Use editorial asymmetric layouts selectively.
- Keep hero text dominant and uncluttered.
- Use whitespace to establish hierarchy.

## 10. Accessibility
- Meet WCAG AA contrast where practical.
- Never use color alone to communicate meaning.
- Provide visible keyboard focus.
- Use semantic buttons and anchors.
- Add alt text for meaningful images; decorative images use empty alt.
- Ensure language toggle is announced accessibly.

## 11. Visual quality checklist
- Does the first screen communicate who Abdullah is?
- Is there a strong visual hierarchy?
- Does the site look custom rather than template-generated?
- Is accent color used sparingly?
- Are all sections aligned to a consistent grid?
- Does the mobile version feel intentionally designed?
- Are all visuals relevant and authentic?
