// @flow

import type { ProviderProps } from "@bluframe/blublocks"
import React from "react"
import { ThemeProvider } from "styled-components"

type Props = {|
  ...ProviderProps
|}

const Provider = ({ children, theme }: Props): React$Node => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Provider
