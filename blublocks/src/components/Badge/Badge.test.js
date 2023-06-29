// @flow

import Badge from "./Badge"
import React from "react"
import { render } from "tests"

jest.mock(".", () => ({}))

describe("Badge", () => {
  it("renders with default props", () => {
    const { container, getByText } = render(<Badge label="Apples" />)
    expect(getByText("Apples")).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders with secondary color", () => {
    const { container } = render(<Badge color="secondary" label="Apples" />)
    expect(container.firstChild).toHaveAttribute("color", "secondary")
    expect(container.firstChild).toMatchSnapshot()
  })

  it("has expected aria-label", () => {
    const { getByLabelText } = render(<Badge label="Apples" />)
    expect(getByLabelText("badge-Apples")).toBeInTheDocument()
  })
})
