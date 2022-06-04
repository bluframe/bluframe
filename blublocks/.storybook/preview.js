import "styles/foundation/css/foundation.css"
import "styles/bootstrap.css"
import "styles/font-awesome.min.css"
import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "styles/theme"

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered"
}
