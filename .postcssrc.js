const postcssPresetEnv = require('postcss-preset-env');
// const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('postcss-for'),
    postcssPresetEnv({
      stage: 2,
      features: {
        'custom-properties': true,
        'nesting-rules': true
      },
      autoprefixer: { grid: true }
    })
  ],
};
