// @flow

import Loading from "./Loading"
import React from "react"
import { render } from "tests"

jest.mock(".", () => ({}))

describe("Loading", () => {
  it("renders", () => {
    const { container } = render(<Loading />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
