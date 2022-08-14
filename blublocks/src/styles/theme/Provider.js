// @flow

import type { ProviderProps } from "@bluframe/blublocks"
import React from "react"
import { ThemeProvider } from "styled-components"
import getTheme from "./getTheme"

type Props = {|
  ...ProviderProps
|}

const Provider = ({ children, theme: baseTheme }: Props): React$Node => {
  const theme = getTheme(baseTheme)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Provider
