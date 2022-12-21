module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget("./src/assets/sass/");
  eleventyConfig.addPassthroughCopy("./src/assets/css/");

    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };