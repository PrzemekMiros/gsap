module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget("./src/assets/sass/");
  eleventyConfig.addPassthroughCopy("./src/assets/css");
  eleventyConfig.addPassthroughCopy("./src/assets/js");
  eleventyConfig.addPassthroughCopy("./src/assets/img");

    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };