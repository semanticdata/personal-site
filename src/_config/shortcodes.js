export default function (eleventyConfig) {
  // A useful shortcode to output the current build date.
  eleventyConfig.addShortcode("currentBuildDate", () => {
    return new Date().toISOString();
  });

  // Universal Shortcode for 88x31 gifs
  eleventyConfig.addShortcode(
    "88x31",
    function (filename, alt = "88x31 gif button") {
      // Construct the full public path to the gif
      const src = `/assets/img/gifs/${filename}`;
      // Return the HTML <img> tag
      return `<img src="${src}" width="88px" height="31px" alt="${alt}" loading="lazy" decoding="async">`;
    },
  );
}
