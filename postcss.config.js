// 随便写点样式，然后在谷歌控制台可以发现，会自动帮你添加 -webkit- 的前缀。

module.exports = {
  plugins: [require("autoprefixer")]
};

// --------------- //
// // 会自动安装 autoprefixer，不再需要配置 autoprefixer
// const postcssPresetEnv = require("postcss-preset-env");
// module.exports = {
//   plugins: [postcssPresetEnv(/* pluginOptions */)]
// };
