// svelte.config.js:
const sveltePreprocess = require("svelte-preprocess");

// using sourceMap as an example, but could be anything you need dynamically
function createPreprocessors() {
  return sveltePreprocess({
    defaults: {
      script: "typescript",
      style: "scss",
    },
    scss: {
      prependData: `@import 'src/styles/_shared';`,
    },
    postcss: {
      plugins: [require("autoprefixer")()],
    },
  });
}

module.exports = {
  preprocess: createPreprocessors(true),
  createPreprocessors,
};
