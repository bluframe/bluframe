// @flow
/* eslint-disable max-lines-per-function */

import { fireEvent, render } from "tests"
import type { ComponentProps } from "."
import InputText from "./InputText"
import React from "react"

jest.mock(".", () => ({}))

describe("InputText", () => {
  const props: ComponentProps = {
    inputId: "name-input",
    label: "Name",
    labelId: "name-label",
    name: "name",
    onBlur: jest.fn(),
    onChange: jest.fn()
  }

  it("renders with defaultValue", () => {
    const { getByLabelText } = render(
      <InputText {...props} defaultValue="John" />
    )
    const input = getByLabelText("Name")
    expect(input.value).toBe("John")
  })

  it("renders with value", () => {
    const { getByLabelText } = render(<InputText {...props} value="John" />)
    const input = getByLabelText("Name")
    expect(input.value).toBe("John")
  })

  it("triggers onBlur", () => {
    const { getByLabelText } = render(<InputText {...props} />)
    const input = getByLabelText("Name")

    fireEvent.blur(input)
    expect(props.onBlur).toHaveBeenCalled()
  })

  it("triggers onChange when input value changes", () => {
    const { getByLabelText } = render(<InputText {...props} />)
    const input = getByLabelText("Name")

    fireEvent.change(input, { target: { value: "John" } })
    expect(props.onChange).toHaveBeenCalled()
  })

  it("displays error state and helper text", () => {
    const helperText = "This field is required"

    const { getByLabelText, getByText } = render(
      <InputText {...props} error helperText={helperText} />
    )

    const input = getByLabelText("Name")
    // Check if the input element has the error styles applied
    expect(input).toHaveStyle("border-bottom: 1px solid #F44336")

    // Check if the helper text is displayed in the error color
    expect(getByText(helperText)).toHaveStyle("color: #F44336")
  })

  it("renders with required attribute", () => {
    const { getByLabelText } = render(<InputText {...props} required />)
    const input = getByLabelText("Name")
    expect(input.required).toBe(true)
  })

  it("renders with type 'number'", () => {
    const { getByLabelText } = render(<InputText {...props} type="number" />)
    const input = getByLabelText("Name")
    expect(input.type).toBe("number")
  })
})
