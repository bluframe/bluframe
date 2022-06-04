const importResolver = require("enhanced-resolve").create.sync({
  conditionNames: ["import", "node", "default"],
  extensions: [".js", ".json", ".node", ".ts"],
  modules: ["node_modules", "src"]
})
const requireResolver = require("enhanced-resolve").create.sync({
  conditionNames: ["require", "node", "default"],
  extensions: [".js", ".json", ".node", ".ts"],
  modules: ["node_modules", "src"]
})

module.exports = (request, options) => {
  let resolver = requireResolver

  if (options.conditions?.includes("import")) {
    resolver = importResolver
  }

  return resolver(options.basedir, request)
}
