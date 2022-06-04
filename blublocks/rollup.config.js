import { babel } from "@rollup/plugin-babel"
import copy from "rollup-plugin-copy"
import image from "@rollup/plugin-image"
import includePaths from "rollup-plugin-includepaths"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import postcss from "rollup-plugin-postcss"

const input = {
  BluBlocksProvider: "src/styles/theme/Provider.js",
  Button: "src/components/buttons/Button/index.js",
  Content: "src/components/Content/index.js",
  index: "src/index.js"
}

const plugins = [
  babel({
    babelHelpers: "bundled",
    exclude: "**/node_modules/**"
  }),
  copy({
    targets: [
      {
        dest: "./build/css",
        rename: "blublocks.css",
        src: "./src/styles/foundation/css/foundation.css"
      }
    ]
  }),
  image(),
  includePaths({ paths: ["./src"] }),
  nodeResolve({ resolveOnly: ["strip-markdown"] }),
  postcss({ plugins: [] })
]

const onwarn = (warning, warn) => {
  if (warning.code === "CIRCULAR_DEPENDENCY") {
    return
  }

  warn(warning)
}

const config = [
  {
    input,
    onwarn,
    output: {
      dir: "build/cjs",
      exports: "named",
      format: "cjs"
    },
    plugins
  },
  {
    input,
    onwarn,
    output: {
      dir: "build/esm",
      format: "esm"
    },
    plugins
  }
]

export default config
