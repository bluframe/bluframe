// @flow

import type { BaseTheme } from "@bluframe/blublocks"
import colors from "styles/colors"

const baseTheme: BaseTheme = {
  font: {
    family: "Roboto, sans-serif"
  },
  palette: {
    disabled: {
      contrast: colors.white,
      main: colors.alto
    },
    error: {
      contrast: colors.white,
      main: colors.pomegranate
    },
    primary: {
      contrast: colors.white,
      main: colors.boulder
    },
    secondary: {
      contrast: colors.white,
      main: colors.dustyGray
    },
    subtitle: {
      contrast: colors.white,
      main: colors.dustyGray
    },
    text: {
      contrast: colors.white,
      main: colors.mineShaft
    }
  }
}

export default baseTheme
