// @flow

import "@testing-library/jest-dom"
import React from "react"
import ThemeProvider from "styles/theme/Provider"
import { render } from "@testing-library/react"
import theme from "styles/theme"

const AllTheProviders = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

const customRender = (ui: any, options: any): any =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
