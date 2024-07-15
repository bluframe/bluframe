import { BaseTheme } from "styles/theme"
import React from "react"
import { ThemeProvider } from "styled-components"
import getTheme from "./getTheme"

interface Props {
  children: React.ReactNode
  theme: BaseTheme
}

const Provider = ({ children, theme: baseTheme }: Props) => {
  const theme = getTheme(baseTheme)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Provider
