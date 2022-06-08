// @flow

import Button from "./Button"
import { type ComponentProps } from "."
import React from "react"
import { render } from "tests"

jest.mock(".", () => ({}))
jest.mock("react-markdown", () => "ReactMarkdown")

describe("Button", () => {
  const props: ComponentProps = {
    label: "Button",
    onClick: jest.fn()
  } // eslint-disable-next-line init-declarations

  it("renders", () => {
    const { container } = render(<Button {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders bold", () => {
    const { container } = render(<Button {...props} bold />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders padded", () => {
    const { container } = render(<Button {...props} padded />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
