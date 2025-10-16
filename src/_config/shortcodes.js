export default function (eleventyConfig) {
  // A useful shortcode to output the current build date.
  eleventyConfig.addShortcode("currentBuildDate", () => {
    return new Date().toISOString();
  });
}
