// @flow

import { darken, lighten } from "polished"
import type { Colors } from "@bluframe/blublocks"
import colors from "styles/colors"

const LIGHT_DARK_ALPHA = 0.2

const getColors = (): Colors => ({
  gray: {
    contrast: colors.white,
    dark: darken(LIGHT_DARK_ALPHA, colors.gray),
    light: lighten(LIGHT_DARK_ALPHA, colors.gray),
    main: colors.gray
  }
})

export default getColors
