// @flow

import "@testing-library/jest-dom"
import { render } from "@testing-library/react"

// We actually don't need it here but we use the same pattern
// on BluBlocks so we are keeping it for consistency
const customRender = (ui: any, options: any): any => render(ui, { ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
