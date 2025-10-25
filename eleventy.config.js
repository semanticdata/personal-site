import {
  IdAttributePlugin,
  InputPathToUrlTransformPlugin,
  HtmlBasePlugin,
} from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import fontAwesomePlugin from "@11ty/font-awesome";

import pluginFilters from "./src/_config/filters.js";
import pluginShortcodes from "./src/_config/shortcodes.js";
import markdownItObsidianCallouts from "markdown-it-obsidian-callouts";
import markdownItFootnote from "markdown-it-footnote";
import metadata from "./src/_data/metadata.js";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
  eleventyConfig.addPreprocessor("drafts", "*", (data) => {
    if (data.draft) {
      data.title = `${data.title} (draft)`;
    }
    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
      return false;
    }
  });

  eleventyConfig
    .addPassthroughCopy({
      "./public/": "/",
    })
    .addPassthroughCopy("src/feed/pretty-atom-feed.xsl")
    eleventyConfig.addPassthroughCopy("src/assets/css/", "/assets/css/");
    eleventyConfig.addPassthroughCopy("src/assets/js/", "/assets/js/");
    // .addPassthroughCopy("src/assets/", "/assets/");

  eleventyConfig.addWatchTarget("src/assets/css/**/*.css");
  eleventyConfig.addWatchTarget("src/**/*.{svg,webp,png,jpg,jpeg,gif}");
  // eleventyConfig.addWatchTarget("src/**/*.{md,njk,11ty.js}");

  eleventyConfig.addBundle("css", {
    toFileDirectory: "dist",
    bundleHtmlContentFromSelector: "style",
  });

  eleventyConfig.addBundle("js", {
    toFileDirectory: "dist",
    bundleHtmlContentFromSelector: "script",
  });

  eleventyConfig.addPlugin(pluginSyntaxHighlight, {
    preAttributes: { tabindex: 0 },
  });
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

  eleventyConfig.addPlugin(fontAwesomePlugin, {
    transform: true,
    shortcode: "icon",
  });

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed/feed.xml",
    stylesheet: "pretty-atom-feed.xsl",
    collection: {
      name: "posts",
      limit: 10,
    },
    metadata: {
      language: metadata.language,
      title: metadata.title,
      subtitle: metadata.description,
      base: metadata.url,
      author: {
        name: metadata.author.name,
      },
    },
  });

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["avif", "webp", "auto"],
    widths: ["auto"],
    failOnError: false,
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    },
    sharpOptions: {
      animated: true,
    },
    outputDir: "./_site/assets/img/",
    urlPath: "/assets/img/",
  });

  eleventyConfig.addPlugin(pluginFilters);
  eleventyConfig.addPlugin(IdAttributePlugin, {});
  eleventyConfig.addPlugin(pluginShortcodes);

  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItObsidianCallouts);
    mdLib.use(markdownItFootnote);
  });
}

export const config = {
  templateFormats: ["md", "njk", "html", "liquid", "11ty.js"],

  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",

  dir: {
    input: "src",
    includes: "_includes",
    data: "_data",
    output: "_site",
  },
};
