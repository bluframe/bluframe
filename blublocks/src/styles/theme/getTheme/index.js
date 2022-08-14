// @flow

import type { BaseTheme, Theme } from "@bluframe/blublocks"
import getColors from "./getColors"
import getPalette from "./getPalette"

const getTheme = (baseTheme: BaseTheme): Theme => {
  // Palette
  const palette = getPalette(baseTheme)

  // Colors
  const colors = getColors()

  return {
    ...baseTheme,
    colors,
    palette
  }
}

export default getTheme
