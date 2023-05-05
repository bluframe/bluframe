// @flow

import type { ComponentProps } from "."
import InputText from "./InputText"
import React from "react"
import { render } from "tests"

jest.mock(".", () => ({}))

describe("InputText", () => {
  const props: ComponentProps = {
    inputId: "name-input",
    label: "Name",
    name: "name",
    onChange: jest.fn(),
    value: ""
  }

  it("renders", () => {
    const { container } = render(<InputText {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
