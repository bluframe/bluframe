// @flow

import type { ComponentProps } from "."
import React from "react"
import Select from "./Select"
import { render } from "tests"

jest.mock(".", () => ({}))

describe("Select", () => {
  const props: ComponentProps = {
    displayValue: "",
    isControlled: false,
    isLabelShrunk: false,
    isOpen: false,
    label: "",
    name: "fruit",
    onChange: jest.fn(),
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
    wrapperRef: {
      current: null
    }
  }

  it("renders with defaultValue", () => {
    const { getByText } = render(
      <Select {...props} defaultValue="orange" displayValue="Orange" />
    )
    const displayValue = getByText("Orange")
    expect(displayValue).toBeInTheDocument()
  })

  it("renders with value", () => {
    const { getByText } = render(
      <Select {...props} displayValue="Apple" isControlled value="apple" />
    )
    const displayValue = getByText("Apple")
    expect(displayValue).toBeInTheDocument()
  })
})
