// @flow

import type { ComponentProps } from "."
import InputText from "./InputText"
import React from "react"
import { render } from "tests"

jest.mock(".", () => ({}))

describe("InputText", () => {
  const props: ComponentProps = {
    inputId: "name-input",
    isFocused: false,
    label: "Name",
    labelId: "name-label",
    name: "name",
    onBlur: jest.fn(),
    onChange: jest.fn(),
    onFocus: jest.fn(),
    value: ""
  }

  it("renders", () => {
    const { container } = render(<InputText {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
