module.exports = (api) => {
  const plugins = ["babel-plugin-styled-components"]

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/preset-react",
    "@babel/preset-flow"
  ]

  api.cache(true)

  return { plugins, presets }
}
