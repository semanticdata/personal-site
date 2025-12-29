---
title: Test Page
layout: layouts/alt.njk
description: A comprehensive test page showcasing various markdown features and styling
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

This page demonstrates various markdown elements and styling features available on this site. It serves as a comprehensive test to ensure all content types render correctly.

## Introduction

Welcome to this test page! Here you'll find examples of different markdown elements including typography, code blocks, lists, tables, and more. This helps verify that the styling and layout work as expected across different content types.

## Typography

### Headings

This page demonstrates all heading levels from H1 through H6 to ensure proper hierarchy and spacing.

#### Heading Level 4

##### Heading Level 5

###### Heading Level 6

### Text Formatting

You can use **bold text**, *italic text*, and ***bold italic*** text. There's also `inline code` for technical terms.

### Blockquotes

> This is a blockquote. It's useful for highlighting important information or quotes from other sources. Blockquotes can span multiple lines and maintain their formatting.
> 
> They can also contain multiple paragraphs and other markdown elements like **bold text** or `inline code`.

## Lists

### Unordered Lists

- First item
- Second item with [inline link](https://example.com)
- Third item with **bold text**
  - Nested item 1
  - Nested item 2 with `inline code`
    - Deep nested item
- Fourth item

### Ordered Lists

1. First step in a process
2. Second step with **emphasis**
3. Third step with:
   - Sub-step A
   - Sub-step B
4. Final step

## Code Examples

### Inline Code

You can use `variable_name`, `function()`, and `const` inline in your text.

### Code Blocks

```javascript
// JavaScript example
function greetUser(name) {
    const greeting = `Hello, ${name}!`;
    console.log(greeting);
    return greeting;
}

greetUser("World");
```

```css
/* CSS example */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.button {
    background-color: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
```

```python
# Python example
def fibonacci(n):
    """Generate Fibonacci sequence up to n."""
    sequence = [0, 1]
    while len(sequence) < n:
        sequence.append(sequence[-1] + sequence[-2])
    return sequence

print(fibonacci(10))
```

## Tables

### Basic Table

| Feature            | Status        | Priority |
| ------------------ | ------------- | -------- |
| Markdown rendering | ✅ Complete    | High     |
| CSS styling        | ✅ Complete    | High     |
| Responsive design  | 🔄 In Progress | Medium   |
| Dark mode          | ✅ Complete    | Medium   |

### Complex Table

| Language   | Paradigm            | Use Case                  | Difficulty   |
| ---------- | ------------------- | ------------------------- | ------------ |
| JavaScript | Multi-paradigm      | Web development           | Intermediate |
| Python     | Multi-paradigm      | Data science, AI          | Beginner     |
| Rust       | Systems programming | Performance-critical apps | Advanced     |
| Go         | Concurrent          | Backend services          | Intermediate |

## Media Elements

### Images

![Site Logo](/og.jpg)

*This is the site's main logo image.*

### Links

- [External link](https://github.com) - opens in new tab
- [Internal link](/) - goes to homepage
- [Email link](mailto:example@email.com)

## Horizontal Rules

Sections can be separated with horizontal rules:

---

## Advanced Features

### Definition Lists

Term 1
: Definition for the first term. This can be quite long and span multiple lines.

Term 2
: Definition for the second term.
: Additional definition for the same term.

### Footnotes

Here's some text with a footnote[^1] and another footnote[^2].

[^1]: This is the first footnote.
[^2]: This is the second footnote with more detail.

### Strikethrough

~~This text is struck through~~ to indicate it's no longer relevant.

## Obsidian Callouts

> [!info]
> This is an info callout.

> [!note]
> This is a note callout.
