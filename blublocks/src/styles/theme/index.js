// @flow

import type { Theme } from "@bluframe/blublocks"
import colors from "styles/colors"

const theme: Theme = {
  font: {
    family: "Roboto, sans-serif"
  },
  palette: {
    disabled: {
      contrast: colors.white,
      main: colors.alto
    },
    primary: {
      contrast: colors.white,
      main: colors.boulder
    },
    secondary: {
      contrast: colors.white,
      main: colors.dustyGray
    },
    text: colors.mineShaft
  }
}

export default theme
