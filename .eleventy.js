const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget("./src/assets/sass/");
  eleventyConfig.addPassthroughCopy("./src/assets/css");
  eleventyConfig.addPassthroughCopy("./src/assets/js");
  eleventyConfig.addPassthroughCopy("./src/assets/img");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/static");
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public",
        includes: "includes",
      },
      markdownTemplateEngine: "njk",
    }
  };