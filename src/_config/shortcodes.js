export default function (metadata) {
  return function (eleventyConfig) {
    // A useful shortcode to output the current build date.
    // Usage: {% currentBuildDate %}
    eleventyConfig.addShortcode("currentBuildDate", () => {
      return new Date().toISOString();
    });

    // Universal Shortcode for 88x31 gifs
    // Usage: {% 88x31 'my-cool-button.gif', 'My Cool Button' %}
    eleventyConfig.addShortcode(
      "88x31",
      function (filename, alt = "88x31 gif button") {
        const src = `/assets/img/gifs/${filename}`;
        return `<img src="${src}" width="88px" height="31px" alt="${alt}" loading="lazy" decoding="async">`;
      }
    );

    // Image Shortcode
    // Usage: {% image artistImg, artistName, 'rounded-lg', '225px', 'eager' %}
    eleventyConfig.addShortcode(
      "image",
      async function (src, alt, css, sizes, loading) {
        let metadata = await Image(src, {
          widths: [75, 150, 300, 600],
          formats: ["webp"],
          urlPath: "/assets/img/cache/",
          outputDir: "./_site/assets/img/cache/",
        });

        let imageAttributes = {
          class: css,
          alt,
          sizes,
          loading: loading || "lazy",
          decoding: "async",
        };

        return Image.generateHTML(metadata, imageAttributes);
      }
    );

    // Umami Analytics Counter Shortcode
    // Usage: {% umamiCounter %}
    eleventyConfig.addShortcode("umamiCounter", () => {
      // The metadata object is available via closure
      const umamiId = metadata.analytics.umamiWebsiteId;
      const umamiUrl = metadata.analytics.umamiScriptUrl;

      return process.env.NODE_ENV === "production"
        ? `<script defer src="${umamiUrl}" data-website-id="${umamiId}"></script>`
        : "";
    });
  };
}
