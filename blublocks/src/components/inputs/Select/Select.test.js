// @flow

import type { ComponentProps } from "."
import React from "react"
import Select from "./Select"
import { render } from "tests"

jest.mock(".", () => ({}))

describe("Select", () => {
  const props: ComponentProps = {
    displayValue: "",
    isLabelShrunk: false,
    isOpen: false,
    label: "",
    name: "fruit",
    onSelect: jest.fn(),
    onToggleIsOpen: jest.fn(),
    options: [
      {
        label: "Apple",
        value: "apple"
      },
      {
        label: "Orange",
        value: "orange"
      }
    ],
    selected: null
  }

  it("renders", () => {
    const { container } = render(<Select {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
