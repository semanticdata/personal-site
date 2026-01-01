---
title: Test Page
layout: layouts/alt.njk
description: Testing Every Layout components
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

# Test Page

A succinct test of the Every Layout CSS-only components.

## Typography

**Bold**, *italic*, and `inline code`. Headings levels 1-6 are properly styled with the type scale.

### Heading Level 4
##### Heading Level 5
###### Heading Level 6

## Stack Component

### Default Spacing

<stack-l>
  <p>First paragraph with default spacing.</p>
  <p>Second paragraph - automatically spaced.</p>
  <p>Third paragraph using <code>var(--s1)</code>.</p>
</stack-l>

### Tight Spacing

<stack-l space="var(--s0)">
  <p>Tight paragraph 1</p>
  <p>Tight paragraph 2</p>
</stack-l>

### Split Feature

<stack-l splitAfter="2">
  <div><h4>Top 1</h4><p>Content at top</p></div>
  <div><h4>Top 2</h4><p>Also at top</p></div>
  <div><h4>Bottom</h4><p>Pushed to bottom via <code>margin-block-end: auto</code></p></div>
</stack-l>

## Box Component

### Default Box

<box-l>
  <p>Default padding and border.</p>
</box-l>

### Variations

<stack-l space="var(--s1)">
  <box-l padding="var(--s2)">
    <p>Larger padding</p>
  </box-l>

  <box-l padding="var(--s0)" border-width="2px">
    <p>Tight padding, thicker border</p>
  </box-l>
</stack-l>

## Icon Component

<stack-l space="var(--s1)">
  <p><icon-l><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></icon-l> No space</p>

  <p><icon-l space="var(--s0)"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg></icon-l> With spacing</p>

  <p><icon-l space="0.5em" label="Check icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></icon-l> Accessible with label</p>
</stack-l>

## Code

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
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

> A blockquote for highlighting important information.

## Table

| Feature | Status |
|----------|--------|
| Stack | ✅ |
| Center | ✅ |
| Sidebar | ✅ |
| Box | ✅ |
| Icon | ✅ |
| Cluster | ✅ |
