# Design Tokens

All tokens live in the `@theme` block of `src/app/globals.css` (Tailwind v4), so every token is available as a utility (`bg-canvas`, `text-muted`, `border-line`, `font-display`, …). Rebranding means editing that one block.

## Principles

- **One accent, used sparingly and always solid.** No gradients on text, buttons or badges.
- **Hierarchy comes from type, spacing and tinted section bands**, not from blur, glow shadows or animated effects.
- **Tinted surfaces with hairline borders.** Cards and panels use `rounded-lg`; `rounded-full` for badges, play buttons and the primary CTA.
- **Motion is limited to the voice wave**, and it respects `prefers-reduced-motion`.

## Typography

| Token          | Font   | Use                                     |
| -------------- | ------ | --------------------------------------- |
| `font-display` | Ledger | All headings (`h1`–`h6` by default)     |
| `font-sans`    | Inter  | Body, UI, meta                          |

Ledger ships one weight (400). Never put `font-bold` / `font-semibold` on headings, or the browser will fake-bold them.

`.eyebrow` is the small uppercase, letter-spaced label used above section headings and in meta lines.

## Backgrounds & neutrals

Sections alternate between tinted forest tones so the page has clear bands:
hero (`.hero-bg` glow) → Projekte (`canvas`) → Hörproben (`band`) → footer (`band` → `forest`).

| Token            | Value     | Use                                   |
| ---------------- | --------- | ------------------------------------- |
| `canvas`         | `#0f1714` | Page background                       |
| `band`           | `#132620` | Alternating section background        |
| `forest`         | `#173a2e` | Hero glow, footer                     |
| `surface`        | `#18241f` | Cards on `canvas`                     |
| `surface-raised` | `#1f2e28` | Panels on `band`, hover states        |
| `line`           | `#2a3b34` | Hairline borders and dividers         |
| `line-strong`    | `#3b5047` | Underlines, stronger dividers         |
| `fg`             | `#eeece6` | Primary text                          |
| `muted`          | `#a9b3ad` | Body copy, secondary text             |
| `subtle`         | `#7a8780` | Captions, credits, timestamps         |

## Brand

`brand-primary-50` … `brand-primary-950`: forest green. `brand-secondary-300/400/900`: the original teal, used only in the hero glow.

- `brand-primary-400`: accent text, eyebrows, primary links, filled buttons (with `text-canvas`)
- `brand-primary-300`: hover state for the above
- `brand-primary-700`: text selection

## Patterns

- **Primary button:** `bg-brand-primary-400 text-canvas hover:bg-brand-primary-300 rounded-full`
- **Primary link:** `text-brand-primary-400 hover:text-brand-primary-300`
- **Secondary link:** `text-muted hover:text-fg underline decoration-line-strong underline-offset-4`
- **Category badge:** `rounded-full bg-brand-primary-400 text-canvas text-xs font-semibold px-3 py-1`
- **Section header:** `<SectionHeading eyebrow="…" title="…">intro</SectionHeading>`
