/* eslint-disable max-lines-per-function */

import { fireEvent, render } from "tests"
import { ComponentProps } from "."
import InputText from "./InputText"

describe("InputText", () => {
  const props: ComponentProps = {
    hasContent: false,
    inputId: "name-input",
    label: "Name",
    labelId: "name-label",
    name: "name",
    onBlur: jest.fn(),
    onChange: jest.fn(),
    onInput: jest.fn()
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
