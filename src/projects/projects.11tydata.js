export default {
  tags: ["projects"],
  layout: "layouts/project.webc",

  eleventyComputed: {
    iconLabel: (data) => {
      return data["iconLabel"] || null;
    },
    iconUrl: (data) => {
      return data["iconUrl"] || null;
    },
    repoLabel: (data) => {
      return data["repoLabel"] || null;
    },
  },
};
