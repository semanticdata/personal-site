---
title: Component Tests
layout: layouts/alt.njk
description: Testing Every Layout CSS-only components
---

<style>
	{% include "node_modules/prismjs/themes/prism-tomorrow.css" %}
</style>
<style>
	{% include "src/assets/css/prism-diff.css" %}
</style>
<style>
	{% include "src/assets/css/markdown-it-callouts.css" %}
</style>

# Component Tests

Testing all 12 Every Layout CSS-only components with your surface-based color system.

---

## Stack (`<stack-l>`)

Vertical spacing between elements using the owl selector.

### Default (var(--s1))

<stack-l>
  <p>First paragraph with default spacing.</p>
  <p>Second paragraph - automatically spaced.</p>
  <p>Third maintains consistent rhythm.</p>
</stack-l>

### Tight (var(--s0))

<stack-l style="--stack-space: var(--s0)">
  <p>Tight 1</p>
  <p>Tight 2</p>
</stack-l>

### Spacious (var(--s2))

<stack-l style="--stack-space: var(--s2)">
  <p>Spacious 1</p>
  <p>Spacious 2</p>
</stack-l>

### Split Feature

<stack-l splitAfter="2" style="background: var(--surface-hover); padding: var(--s1);">
  <div><h4>Top 1</h4><p>Content at top</p></div>
  <div><h4>Top 2</h4><p>Also at top</p></div>
  <div><h4>Bottom</h4><p>Pushed to bottom</p></div>
</stack-l>

---

## Cluster (`<cluster-l>`)

Horizontal wrapping layouts with consistent spacing.

<stack-l style="--stack-space: var(--s1)">
  <cluster-l style="--cluster-gap: var(--s1)">
    <box-l>Item 1</box-l>
    <box-l>Item 2</box-l>
    <box-l>Item 3</box-l>
  </cluster-l>

  <cluster-l style="--cluster-gap: var(--s0)">
    <span>Tag 1</span>
    <span>Tag 2</span>
    <span>Tag 3</span>
  </cluster-l>

  <cluster-l style="--cluster-gap: var(--s1); --cluster-justify: center">
    <box-l>Center 1</box-l>
    <box-l>Center 2</box-l>
  </cluster-l>
</stack-l>

---

## Box (`<box-l>`)

⚠️ **For content emphasis only** - NOT for structural layout.

<stack-l style="--stack-space: var(--s1)">
  <box-l border>
    <p>Default callout box</p>
  </box-l>

  <box-l invert border>
    <p>Inverted for emphasis</p>
  </box-l>

  <box-l style="--box-padding: var(--s2)" border>
    <p>Larger padding</p>
  </box-l>
</stack-l>

---

## Icon (`<icon-l>`)

<stack-l style="--stack-space: var(--s1)">
  <p><icon-l><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></icon-l> No space</p>

  <p><icon-l space style="--icon-space: var(--s0)"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg></icon-l> With spacing</p>

  <p><icon-l space style="--icon-space: var(--s0)" label="Check icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></icon-l> Accessible</p>
</stack-l>

---

## Switcher (`<switcher-l>`)

Container-based switching between horizontal/vertical.

<stack-l style="--stack-space: var(--s1)">
  <switcher-l style="--switcher-threshold: 20rem; --switcher-gap: var(--s1)">
    <box-l>1</box-l>
    <box-l>2</box-l>
    <box-l>3</box-l>
  </switcher-l>

  <switcher-l style="--switcher-threshold: 25rem; --switcher-gap: var(--s0)">
    <box-l>A</box-l>
    <box-l>B</box-l>
    <box-l>C</box-l>
    <box-l>D</box-l>
  </switcher-l>
</stack-l>

---

## Grid (`<grid-l>`)

Auto-fitting responsive grid.

<stack-l style="--stack-space: var(--s1)">
  <grid-l>
    <box-l>Default</box-l>
    <box-l>Grid</box-l>
    <box-l>15rem</box-l>
  </grid-l>

  <grid-l style="--grid-min-column-width: 20rem">
    <box-l>Wide</box-l>
    <box-l>Columns</box-l>
  </grid-l>

  <grid-l style="--grid-min-column-width: 10rem">
    <box-l>Small</box-l>
    <box-l>Columns</box-l>
    <box-l>More</box-l>
  </grid-l>
</stack-l>

---

## Frame (`<frame-l>`)

Aspect ratio cropping.

<stack-l style="--stack-space: var(--s1)">
  <frame-l style="--frame-ratio: 16/9">
    <img src="https://picsum.photos/800/450" alt="16:9">
  </frame-l>

  <frame-l style="--frame-ratio: 1/1">
    <img src="https://picsum.photos/500/500" alt="Square">
  </frame-l>

  <frame-l style="--frame-ratio: 4/3">
    <box-l>4:3 Content</box-l>
  </frame-l>
</stack-l>

---

## Cover (`<cover-l>`)

Vertical centering with optional top/bottom content.

<stack-l style="--stack-space: var(--s1)">
  <cover-l style="--cover-min-height: 20rem; --cover-padding: 0; background: var(--surface-hover);">
    <header><p>Header</p></header>
    <h2>Centered</h2>
    <footer><p>Footer</p></footer>
  </cover-l>

  <cover-l style="--cover-min-height: 15rem; --cover-padding: 0; background: var(--surface-subtle);">
    <h2>Just Centered</h2>
  </cover-l>
</stack-l>

---

## Reel (`<reel-l>`)

Horizontal scrolling container.

<stack-l style="--stack-space: var(--s1)">
  <reel-l style="--reel-height: 12rem; --reel-gap: var(--s0)">
    <img src="https://picsum.photos/200/150?random=1" alt="">
    <img src="https://picsum.photos/200/150?random=2" alt="">
    <img src="https://picsum.photos/200/150?random=3" alt="">
    <img src="https://picsum.photos/200/150?random=4" alt="">
  </reel-l>

  <reel-l style="--reel-height: auto; --reel-gap: var(--s1)">
    <box-l>Card 1</box-l>
    <box-l>Card 2</box-l>
    <box-l>Card 3</box-l>
    <box-l>Card 4</box-l>
  </reel-l>
</stack-l>

---

## Impostor (`<impostor-l>`)

Centered overlay content.

<div style="position: relative; background: var(--surface-hover); padding: var(--s2);">
  <p style="margin: 0;">Background content</p>
  <impostor-l contain style="--impostor-margin: var(--s1)">
    <box-l invert border>Overlay Content</box-l>
  </impostor-l>
</div>

---

## Composed Components

Real-world usage examples.

### Card with Image

<grid-l style="--grid-min-column-width: 15rem">
  <stack-l style="--stack-space: var(--s0)">
    <frame-l style="--frame-ratio: 16/9">
      <img src="https://picsum.photos/400/225?random=10" alt="">
    </frame-l>
    <h3>Card Title</h3>
    <p>Description with consistent spacing.</p>
    <cluster-l style="--cluster-gap: var(--s0)">
      <span>Tag 1</span>
      <span>Tag 2</span>
    </cluster-l>
  </stack-l>
</grid-l>

---

## Color System Tests

### Surface Hierarchy

<stack-l style="--stack-space: var(--s1)">
  <div style="background: var(--surface-base); padding: var(--s1);">
    <p>surface-base (default background)</p>
  </div>

  <div style="background: var(--surface-subtle); padding: var(--s1);">
    <p>surface-subtle (cards, panels)</p>
  </div>

  <div style="background: var(--surface-card); padding: var(--s1);">
    <p>surface-card (tables, headers)</p>
  </div>

  <div style="background: var(--surface-highlight); padding: var(--s1);">
    <p>surface-highlight (warnings, notices)</p>
  </div>
</stack-l>

### Interactive States

<cluster-l style="--cluster-gap: var(--s1)">
  <button style="padding: var(--s0) var(--s1); background: var(--surface-hover); border: 1px solid var(--border-strong);">Hover me</button>
  <button style="padding: var(--s0) var(--s1); background: var(--surface-active); border: 1px solid var(--border-strong);">Active</button>
  <button style="padding: var(--s0) var(--s1); background: var(--surface-base); border: 1px solid var(--border-strong);">Normal</button>
</cluster-l>

---

## Typography & Content

**Bold**, *italic*, and `inline code`. Type scale from `--step--2` to `--step-5`.

### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6

## Code

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("World"));
```

## Lists

- Item 1
- Item 2 with `code`
  - Nested item
- Item 3

1. First
2. Second
3. Third

## Blockquote

> A blockquote for highlighting important information. Maintains proper spacing and theme colors.

## Table

| Component | Status |
|-----------|--------|
| Stack | ✅ |
| Center | ✅ |
| Sidebar | ✅ |
| Box | ✅ |
| Icon | ✅ |
| Cluster | ✅ |
| Switcher | ✅ |
| Cover | ✅ |
| Grid | ✅ |
| Frame | ✅ |
| Reel | ✅ |
| Impostor | ✅ |

---

**Resize browser to see intrinsic responsiveness!** Theme switching (light/dark) tests the color system.
