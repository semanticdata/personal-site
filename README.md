# [MiguelPimentel.do](https://miguelpimentel.do/)

Repository with the source code for my personal site built with the [Eleventy](https://www.11ty.dev/) static site generator.

> [!NOTE]
> Playing around with [omg.lol icons](https://source.tube/neatnik/omg.lol-icons).

## Features

- Using [Eleventy v3](https://github.com/11ty/eleventy/releases/tag/v3.0.0) with zero-JavaScript output.
- Local development live reload provided by [Eleventy Dev Server](https://www.11ty.dev/docs/dev-server/).
- Content-driven [navigation menu](https://www.11ty.dev/docs/plugins/navigation/)
- Fully automated [Image optimization](https://www.11ty.dev/docs/plugins/image/)
  - Zero-JavaScript output.
  - Support for modern image formats automatically (e.g. AVIF and WebP)
  - Processes images on-request during `--serve` for speedy local builds.
  - Prefers `<img>` markup if possible (single image format) but switches automatically to `<picture>` for multiple image formats.
  - Automated `<picture>` syntax markup with `srcset` and optional `sizes`
  - Includes `width`/`height` attributes to avoid [content layout shift](https://web.dev/cls/).
  - Includes `loading="lazy"` for native lazy loading without JavaScript.
  - Includes [`decoding="async"`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding)
  - Images can be co-located with blog post files.
- Per page CSS bundles [via `eleventy-plugin-bundle`](https://github.com/11ty/eleventy-plugin-bundle).
- Built-in [syntax highlighter](https://www.11ty.dev/docs/plugins/syntaxhighlight/) (zero-JavaScript output).
- Draft content: use `draft: true` to mark any template as a draft. Drafts are **only** included during `--serve`/`--watch` and are excluded from full builds. This is driven by the `addPreprocessor` configuration API in `eleventy.config.js`. Schema validator will show an error if non-boolean value is set in data cascade.
- Blog Posts
  - Automated next/previous links
  - Accessible deep links to headings
- Generated Pages
  - Home, Archive, and About pages.
  - [Atom feed included (with easy one-line swap to use RSS or JSON)](https://www.11ty.dev/docs/plugins/rss/)
  - `sitemap.xml`
  - Zero-maintenance tag pages ([View on the Demo](https://eleventy-base-blog.netlify.app/tags/))
  - Content not found (404) page

### Implementation Notes

If your site enforces a [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) (as public-facing sites should), you have a few choices (pick one):

1. In `base.njk`, remove `<style>{% getBundle "css" %}</style>` and uncomment `<link rel="stylesheet" href="{% getBundleFileUrl "css" %}">`
2. Configure the server with the CSP directive `style-src: 'unsafe-inline'` (less secure).

## Changes from Upstream

This project is based on [11ty/eleventy-base-blog](https://github.com/11ty/eleventy-base-blog). Here's a non-inclusive list of changes made on top:

- Refactored codebase into single `src` directory.
- Projects collection with icon support.
- Colophon, Uses, Contact, Now (redirect) pages.
- ESLint now covers CSS, JS, JSON, and Markdown files.
- VS Code extension recommendations.
- Favicons, site webmanifest.
- Fluid typography using `clamp()`.
- Bleed effects for images.
- 88x31 support via shortcode.
- Themed colors based on HSL values.
- Support for footnotes and Obsidian callouts.
- Social links in `<header>`.
- Styled `<table>` and `<blockquote>`.
- Refactored CSS styles to be more modular.

## Special Thanks

- [11ty](https://www.11ty.dev/)
- [ESLint](https://eslint.org/)
- [Utopia](https://utopia.fyi/)
- [Vercel](https://vercel.com/) - For hosting
- [Umami](https://umami.is/) - For analytics
