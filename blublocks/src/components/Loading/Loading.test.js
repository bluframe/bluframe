// @flow

import Loading from "./Loading"
import React from "react"
import { render } from "tests"

jest.mock(".", () => ({}))

describe("Loading", () => {
  it("renders with default props", () => {
    const { container } = render(<Loading />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders with custom size", () => {
    const { container } = render(<Loading size={32} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders with contrast color", () => {
    const { container } = render(<Loading contrast />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders with secondary color", () => {
    const { container } = render(<Loading secondary />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders in disabled state", () => {
    const { container } = render(<Loading disabled />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders with multiple custom props", () => {
    const { container } = render(
      <Loading contrast disabled secondary size={40} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
