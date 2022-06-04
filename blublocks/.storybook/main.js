const path = require("path")

module.exports = {
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  features: {
    babelModeV7: true,
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "..", "src")
    ]

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@bluframe/bluterrine": path.join(
        __dirname,
        "..",
        "..",
        "bluterrine",
        "build",
        "esm"
      )
    }

    // Resolves a babel-loader problem in remote deployment
    config.module.rules.push({
      test: /\.js$/,
      use: [
        {
          loader: require.resolve('babel-loader')
        },
      ],
      exclude: /node_modules/
    });

    return config
  }
}
