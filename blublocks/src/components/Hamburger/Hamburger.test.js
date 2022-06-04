// @flow

import Hamburger from "./Hamburger.js"
import React from "react"
import { render } from "tests"

const props = {
  onClick: jest.fn()
}

describe("Hamburger", () => {
  it("renders", () => {
    const { container } = render(<Hamburger {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
