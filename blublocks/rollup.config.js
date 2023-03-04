import { babel } from "@rollup/plugin-babel"
import copy from "rollup-plugin-copy"
import image from "@rollup/plugin-image"
import includePaths from "rollup-plugin-includepaths"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import postcss from "rollup-plugin-postcss"

const input = {
  Animations: "src/components/animations/index.js",
  BluBlocksProvider: "src/styles/theme/Provider.js",
  Button: "src/components/buttons/Button/index.js",
  Content: "src/components/Content/index.js",
  FAIcon: "src/components/FAIcon/index.js",
  Hamburger: "src/components/Hamburger/index.js",
  Icon: "src/components/Icon/index.js",
  Loading: "src/components/Loading/index.js",
  ResetButton: "src/components/buttons/Reset.js",
  Select: "src/components/inputs/Select/index.js",
  "Typography/H1": "src/components/Typography/H1.js",
  "Typography/H2": "src/components/Typography/H2.js",
  "Typography/H3": "src/components/Typography/H3.js",
  "Typography/H4": "src/components/Typography/H4.js",
  "Typography/H5": "src/components/Typography/H5.js",
  "Typography/H6": "src/components/Typography/H6.js",
  "Typography/Paragraph": "src/components/Typography/Paragraph.js",
  "Typography/SubtitleH1": "src/components/Typography/SubtitleH1.js",
  "Typography/SubtitleH2": "src/components/Typography/SubtitleH2.js",
  "Typography/SubtitleH3": "src/components/Typography/SubtitleH3.js",
  index: "src/index.js",
  mediaQueries: "src/styles/mediaQueries"
}

const plugins = [
  babel({
    babelHelpers: "bundled",
    exclude: "**/node_modules/**"
  }),
  copy({
    targets: [
      {
        dest: "./lib/css",
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
      dir: "lib/cjs",
      exports: "named",
      format: "cjs"
    },
    plugins
  },
  {
    input,
    onwarn,
    output: {
      dir: "lib/esm",
      format: "esm"
    },
    plugins
  }
]

export default config
