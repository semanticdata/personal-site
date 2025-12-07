---
title: "VS Code Regex: Conditional Find and Replace"
description: "Learn how to use advanced VS Code Regular Expressions (Regex) and Negative Lookahead for conditional search and replace. Fix Cumulative Layout Shift (CLS) on legacy Shopify themes by injecting missing width and height attributes only into images that need them."
date: 2025-12-07
tags:
  - VSCode
  - Regex
  - Tutorial
---

I recently hit a wall optimizing an older Shopify theme. To fix our CLS score, I needed to inject `width` and `height` attributes into thousands of specific image tags. The catch? I had to target _only_ the legacy placeholder images that hadn't been fixed yet, ignoring everything else.

I needed a surgical solution. I needed VS Code Regex. But like most developers, I only really "know" Regex for about 48 hours after I use it. The rest of the time, I have to re-learn it from scratch.

If you are currently in that "re-learning" phase and just want the code, I respect your time. Here's the TL;DR:

> [!NOTE] TL;DR:
> Find all `<img` tags containing the specific Liquid placeholder string (ignoring messy whitespace), but *exclude* those that already have `width="1024" height="1024"`.
>
> 1.  Enable **Regex Mode** (`.*` icon) in VS Code Search (`Ctrl+Shift+F`).
> 2.  **Find Pattern:**
> ```regex
> (<img(?![^>]*width="1024" height="1024"))([^>]*?\|\s*image_url:\s*width:\s*1024,\s*height:\s*1024\s*\}\}[^"]*")([^>]*?)(\/?>)
> ```
> 
> 3. **Replace Pattern:**
> ```regex
> $1$2 width="1024" height="1024"$3$4
> ```

## The Prerequisites

To pull this off without corrupting your HTML, we rely on two fundamental regex concepts.

### 1. Capture Groups and Backreferences

We use parentheses `()` to capture specific parts of the image tag. In our replacement, we use `$1`, `$2`, etc., to paste those pieces back exactly where they were. This ensures we don't accidentally delete your `alt` text or classes while injecting the new attributes.

### 2. Non-Greedy Matching

Standard regex is "greedy." If you search for `src=".*"`, it matches everything from the first quote to the last quote on the line. Adding a question mark (`.*?`) makes it "non-greedy," forcing it to stop at the _first_ closing quote. This is vital when parsing HTML.

## Solving the Exclusion Puzzle

The hardest part isn't finding the image tags. It's **excluding** the ones you've already fixed. We need to tell VS Code: "Find this image tag, but stop immediately if you see `width="1024" height="1024"` anywhere inside it."

This requires a **Negative Lookahead** `(?!…)`. This logic acts as a bouncer. It stands at the door of your search match, peeks inside, and if it sees the forbidden string, it excludes the whole match.

## Breaking Down The Pattern

Here is how the regex works, broken down by its Capture Groups.

```regex
(<img(?![^>]*width="1024" height="1024"))([^>]*?\|\s*image_url:\s*width:\s*1024,\s*height:\s*1024\s*\}\}[^"]*")([^>]*?)(\/?>)
```

> [!TIP] Why `\s*` instead of spaces?
> You'll notice the pattern uses `\s*` extensively. This token matches "zero or more whitespace characters" (including spaces, tabs, and newlines).
>
> Since legacy code often has inconsistent formatting—sometimes tight, sometimes loose—using `\s*` ensures we catch the tag regardless of how the previous developer hit the spacebar. Ask me how I know…

| Group    | Pattern Segment                 | What it does                                                                                                                                                                                         |
| :------- | :------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$1` | `(<img(?![…]))`                 | The Bouncer: Captures `<img` and checks the exclusion rule. It scans until the closing bracket `>` (`[^>]*`) to ensure the attributes aren't already there.                                      |
| `$2` | `([^>]*?\|\s*image_url…[^"]*")` | The Anchor: This looks for the Liquid placeholder. It captures the entire `src` attribute, including any trailing characters (like query strings) via `[^"]*`, so we can safely append after it. |
| `$3` | `([^>]*?)`                      | The Remainder: Captures any other attributes (like `alt` or `class`) that might appear later in the tag.                                                                                         |
| `$4` | `(\/?>)`                        | The Closer: Captures the closing `>` (or self-closing `/>`) so we can close the tag properly.                                                                                                    |

## The Result

We reconstruct the tag using the captured groups, injecting the new attributes exactly between the anchor (`$2`) and the remainder (`$3`).

**Replace Pattern:**

```regex
$1$2 width="1024" height="1024"$3$4
```

| Scenario      | Input Tag Example                                        | Outcome/Description                                                                   |
| :------------ | :------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| Needs Fixing  | `<img src="file.jpg \| image_url: … }}" alt="x">`        | MATCH: New attributes inserted properly.                                              |
| Messy Spaces  | `<img src="f.jpg \|image_url:width:1024…}}?v=1">`        | MATCH: The pattern handles inconsistent spacing and query parameters (\s* and [^"]*). |
| Already Fixed | `<img width="1024" height="1024" src="file.jpg \| ...">` | IGNORED: The negative lookahead prevents the match.                                   |

## Safety First

Regex is powerful, but it's also excellent at destroying codebases in milliseconds.

Before you hit "Replace All," **commit your changes to Git.** If you make a mistake with your pattern, a simple `git checkout .` is instant. If you don't have version control, you are stuck pressing `Ctrl+Z` on 50 different files.

> [!WARNING] Review Before You Commit
> Regex is precise but blind. It doesn't understand context.
>
> Don't just trust the "Replace All" button. Open your Source Control tab in VS Code and review the file diffs line-by-line. It is much easier to catch a stray matching character or a broken tag now than it is to revert a broken commit later.

Verify your matches, ensure your git status is clean, and _then_ let the regex do the heavy lifting.
