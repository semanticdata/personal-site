import { z } from "zod";
import { fromZodError } from "zod-validation-error";

// Validates front matter data
export default function () {
  return function (data) {
    const excludedFiles = ["/sitemap.xml.njk", "/src.11tydata.js", "/eleventy-plugin-feed-miguelpimentel-do-atom.njk"];

    if (excludedFiles.some((file) => data.page.inputPath.endsWith(file))) {
      return;
    }

    // Base schema for all content
    const baseSchema = z.object({
      draft: z.boolean().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      tags: z.array(z.string()).optional(),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      permalink: z.string().or(z.boolean()).optional(),
      layout: z.string().or(z.boolean()).optional(),
      eleventyExcludeFromCollections: z.boolean().optional(),
    });

    // Stricter schema for blog posts
    const postSchema = baseSchema.extend({
      title: z.string({
        required_error: "Title is required for blog posts.",
      }),
      date: z.date({
        required_error: "Date is required for blog posts.",
      }),
    });

    let schema = baseSchema;
    // `data.page.inputPath` contains the path to the source file
    if (
      data.page &&
      data.page.inputPath &&
      data.page.inputPath.includes("/blog/") &&
      data.page.inputPath.endsWith("/index.md")
    ) {
      schema = postSchema;
    }

    const result = schema.safeParse(data);

    if (result.error) {
      // Add the file path to the error for better debugging
      const validationError = fromZodError(result.error);
      validationError.message = `Zod validation failed for ${data.page.inputPath}:\n${validationError.message}`;
      throw validationError;
    }
  };
}
