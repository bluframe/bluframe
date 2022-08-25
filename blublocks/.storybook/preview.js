// @flow

import "styles/foundation/css/foundation.css"
import "styles/bootstrap.css"
import "styles/font-awesome.min.css"
import React from "react"
import ThemeProvider from "styles/theme/Provider"
import theme from "styles/theme"

export const decorators = [
  (Story: any): any => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'lighter',
    values: [
      {
        name: 'dark',
        value: '#333333'
      },
      {
        name: 'light',
        value: '#F8F8F8'
      },
      {
        name: 'lighter',
        value: '#FBFBFB'
      }
    ]
  },
  layout: "centered"
}
