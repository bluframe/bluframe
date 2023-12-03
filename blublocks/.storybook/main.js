import { dirname, join } from "path";
const path = require("path")

module.exports = {
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-essentials")
  ],

  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  features: {
    babelModeV7: true
  },

  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "..", "src")
    ]

    // Resolves a babel-loader problem in remote deployment
    config.module.rules.push({
      test: /\.js$/,
      use: [
        {
          loader: require.resolve("babel-loader")
        }
      ],
      exclude: /node_modules/
    })

    return config
  },

  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {}
  },

  docs: {
    autodocs: true
  }
}

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
