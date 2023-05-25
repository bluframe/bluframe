// @flow

import type { BaseColorGrades, BaseTheme, Palette } from "@bluframe/blublocks"
import { darken, lighten } from "polished"

const LIGHT_DARK_ALPHA = 0.5

const getDark = (baseColorGrades: BaseColorGrades): string =>
  baseColorGrades.dark || darken(LIGHT_DARK_ALPHA, baseColorGrades.main)

const getLight = (baseColorGrades: BaseColorGrades): string =>
  baseColorGrades.light || lighten(LIGHT_DARK_ALPHA, baseColorGrades.main)

const getPalette = (theme: BaseTheme): Palette => {
  const { palette: basePalette } = theme

  const palette = {
    disabled: {
      ...basePalette.disabled,
      dark: getDark(basePalette.disabled),
      light: getLight(basePalette.disabled)
    },
    error: {
      ...basePalette.error,
      dark: getDark(basePalette.error),
      light: getLight(basePalette.error)
    },
    primary: {
      ...basePalette.primary,
      dark: getDark(basePalette.primary),
      light: getLight(basePalette.primary)
    },
    secondary: {
      ...basePalette.secondary,
      dark: getDark(basePalette.secondary),
      light: getLight(basePalette.secondary)
    },
    subtitle: {
      ...basePalette.subtitle,
      dark: getDark(basePalette.subtitle),
      light: getLight(basePalette.subtitle)
    },
    text: {
      ...basePalette.text,
      dark: getDark(basePalette.text),
      light: getLight(basePalette.text)
    }
  }

  return palette
}

export default getPalette
