module.exports = (api) => {
  api.cache(true)

  const plugins = [
    [
      "module-resolver",
      {
        root: ["./src"]
      }
    ]
  ]

  const presets = [
    [
      "@babel/preset-env",
      {
        shippedProposals: true,
        targets: { node: "current" }
      }
    ],
    "@babel/preset-react",
    "@babel/preset-flow"
  ]

  return { plugins, presets }
}
