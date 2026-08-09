---
name: Obsidian Logic
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#a4a2a2'
  on-tertiary-container: '#393939'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.7'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style

The design system is engineered for high-performance AI and data science professionals. The personality is precise, technical, and hyper-focused, stripping away decorative elements to prioritize the clarity of data and code. 

The style is **Technical Minimalism** with a **Developer-Centric** edge. It utilizes a deep-space backdrop to minimize cognitive load, allowing project screenshots and code blocks to act as the primary visual interest. Influence is drawn from modern IDEs and terminal environments: high-contrast text, razor-sharp borders, and functional density. The emotional response should be one of competence, reliability, and cutting-edge technical sophistication.

## Colors

The palette is optimized for OLED displays and low-light environments. 

- **Primary (Cyber Green):** Reserved exclusively for interactive states, progress indicators, and terminal-style "success" prompts. It represents the "Go" state of an algorithm.
- **Secondary/Tertiary (Obsidian & Charcoal):** These form the core architecture. The background is `#0a0a0a`, while containers and cards use `#121212` to create subtle depth.
- **Surface Accents:** Borders are consistently `#262626`, providing a structural skeleton without overwhelming the content.
- **Typography:** Primary text is `#ffffff`, secondary text is `#a3a3a3` (Neutral), and "dimmed" metadata uses `#525252`.

## Typography

This design system uses a dual-font approach to balance readability with a technical aesthetic.

- **Geist (Sans-Serif):** Used for all narrative and structural content. Headlines should use tighter letter-spacing to appear more impactful and "built."
- **JetBrains Mono (Monospace):** Used for all metadata, labels, tags, and code snippets. This font acts as a visual signal that the information is "data" rather than "story."

All "Technical Details" (e.g., timestamps, file sizes, repo stats) must be set in `mono-label` and converted to uppercase to evoke a terminal-style header.

## Layout & Spacing

The layout is built on a strict **4px baseline grid** to maintain mathematical alignment. 

- **Grid Model:** A 12-column fluid grid for desktop with a maximum width of 1200px. For data-heavy views, use a sidebar-main configuration (3 columns for navigation/meta, 9 columns for content).
- **Responsive Behavior:** 
    - **Desktop:** 24px gutters, 80px section gaps.
    - **Tablet:** 16px gutters, 60px section gaps.
    - **Mobile:** Single column flow, 16px horizontal margins.
- **Visual Rhythm:** Use generous vertical whitespace between sections (`section-gap`) to allow complex technical screenshots room to breathe.

## Elevation & Depth

This design system eschews shadows in favor of **Layered Outlines**. 

- **Level 0 (Background):** `#0a0a0a` - The base canvas.
- **Level 1 (Containers):** `#121212` background with a 1px solid border of `#262626`.
- **Level 2 (Interaction/Popovers):** `#1a1a1a` background with a 1px solid border of `#404040`.

Depth is achieved through "Tonal Stacking." When an element is hovered, the border color shifts to the Primary Accent or a lighter neutral, rather than increasing a shadow's spread. Code blocks and image previews should appear inset, achieved by using a slightly darker background than the container they sit within.

## Shapes

The shape language is **Soft-Industrial**. 

- **Standard Radius:** 4px (`0.25rem`). This provides enough softness to feel modern while maintaining the rigid feel of a professional tool.
- **Large Radius:** 8px (`0.5rem`) for primary project cards and large image containers.
- **Interaction Elements:** Buttons and input fields strictly follow the 4px radius. No "pill" shapes are allowed, as they conflict with the technical, structured aesthetic.

## Components

- **Buttons:** Primary buttons use a solid Cyber Green background with black text. Secondary buttons use a transparent background with a `#262626` border and white text. Hover states should trigger a 1px solid border glow in the Primary color.
- **Project Cards:** Feature a top-aligned screenshot with a `#262626` bottom border, followed by a title in `headline-md` and a row of `mono-label` tags.
- **Chips/Tags:** Monospace font, 12px, background `#1a1a1a`, 1px border `#262626`. No icons unless they are language logos (e.g., Python, Rust).
- **Code Blocks:** Syntax highlighting must use a high-contrast theme (e.g., Monokai or similar) with the container using a `#050505` background to look "sunken."
- **Input Fields:** Flat `#0a0a0a` background, `#262626` border. On focus, the border changes to the Primary color and a small `mono-label` appears above the field as a floating prompt.
- **Status Indicators:** Use a small 8px circle. Pulse animation is reserved for "Live" or "Active" AI models/processes.