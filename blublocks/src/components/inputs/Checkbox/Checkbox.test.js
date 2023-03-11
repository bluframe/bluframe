// @flow

import Checkbox from "./Checkbox"
import type { ComponentProps } from "."
import React from "react"
import { render } from "tests"

jest.mock(".", () => ({}))

describe("Checkbox", () => {
  const props: ComponentProps = {
    inputId: "apple-checkbox",
    isChecked: true,
    label: "Apple",
    name: "Fruit",
    onChange: jest.fn(),
    value: "apple"
  }

  it("renders", () => {
    const { container } = render(<Checkbox {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
