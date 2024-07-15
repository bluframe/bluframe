import colors from "styles/colors"

export interface BaseColorGrades {
  contrast: string
  dark?: string
  light?: string
  main: string
}

export interface ColorGrades {
  contrast: string
  dark: string
  light: string
  main: string
}

export interface BasePalette {
  disabled: BaseColorGrades
  error: BaseColorGrades
  info: BaseColorGrades
  primary: BaseColorGrades
  secondary: BaseColorGrades
  subtitle: BaseColorGrades
  success: BaseColorGrades
  text: BaseColorGrades
}

export interface Palette {
  disabled: ColorGrades
  error: ColorGrades
  info: ColorGrades
  primary: ColorGrades
  secondary: ColorGrades
  subtitle: ColorGrades
  success: ColorGrades
  text: ColorGrades
}

export interface BaseTheme {
  font: {
    family: string
  }
  palette: BasePalette
}

export interface ThemeColors {
  gray: ColorGrades
}

export interface Theme extends BaseTheme {
  colors: ThemeColors
  palette: Palette
}

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
    info: {
      contrast: colors.white,
      main: colors.dustyGray
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
    success: {
      contrast: colors.white,
      main: colors.greenYellow
    },
    text: {
      contrast: colors.white,
      main: colors.mineShaft
    }
  }
}

export default baseTheme
