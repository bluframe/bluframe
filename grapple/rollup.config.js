import babel from "@rollup/plugin-babel"
import includePaths from "rollup-plugin-includepaths"

const input = {
  index: "src/index.js",
  useOnScreen: "src/useOnScreen.js",
  useTrimText: "src/useTrimText.js"
}

const plugins = [
  babel({
    babelHelpers: "runtime",
    exclude: "**/node_modules/**",
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          regenerator: false
        }
      ]
    ]
  }),
  includePaths({ paths: ["./src"] })
]

const external = [/@babel\/runtime/u, "react"]

const config = [
  {
    external,
    input,
    output: {
      dir: "build/cjs",
      exports: "named",
      format: "cjs"
    },
   plugins
  },
  {
   external,
   input,
   output: {
      dir: "build/esm",
      format: "esm"
    },
    plugins
  }
]

export default config
