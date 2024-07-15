import { StorybookConfig } from "@storybook/nextjs"
import { resolve } from "path"

const config: StorybookConfig = {
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],

  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  webpackFinal: async (config: any) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      resolve(__dirname, "..", "src")
    ]

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "next/dist/shared/lib/router-context":
        "next/dist/shared/lib/router-context.shared-runtime"
    }

    return config
  },

  framework: {
    name: "@storybook/nextjs",
    options: {}
  },

  docs: {
    autodocs: true
  },

  staticDirs: ["../public"],

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
}

export default config
