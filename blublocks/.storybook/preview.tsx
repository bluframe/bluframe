import "styles/foundation/css/foundation.css"
import React from "react"
// @ts-ignore
import ThemeProvider from "styles/theme/Provider"
// @ts-ignore
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
    default: "lighter",
    values: [
      {
        name: "dark",
        value: "#333333"
      },
      {
        name: "light",
        value: "#F8F8F8"
      },
      {
        name: "lighter",
        value: "#FBFBFB"
      }
    ]
  },
  layout: "centered",
  viewport: {
    viewports: {
      desktop: {
        name: "Desktop",
        styles: {
          width: "1096px",
          height: "1096px"
        }
      },
      largeDesktop: {
        name: "Large Desktop",
        styles: {
          width: "1280px",
          height: "1096px"
        }
      },
      mobile: {
        name: "Mobile",
        styles: {
          width: "414px",
          height: "896px"
        }
      },
      tablet: {
        name: "Tablet",
        styles: {
          width: "834px",
          height: "1096px"
        }
      }
    }
  }
}
