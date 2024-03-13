// @flow
/* eslint-disable max-lines-per-function */

import { fireEvent, render } from "tests"
import type { ComponentProps } from "."
import React from "react"
import TextArea from "./TextArea"

jest.mock(".", () => ({}))

describe("TextArea", () => {
  const props: ComponentProps = {
    inputId: "description-input",
    label: "Description",
    labelId: "description-label",
    name: "description",
    onBlur: jest.fn(),
    onChange: jest.fn()
  }

  it("renders with defaultValue", () => {
    const { getByLabelText } = render(
      <TextArea {...props} defaultValue="Enter your description here" />
    )
    const textarea = getByLabelText("Description")
    expect(textarea.value).toBe("Enter your description here")
  })

  it("renders with value", () => {
    const { getByLabelText } = render(
      <TextArea {...props} value="Static value" />
    )
    const textarea = getByLabelText("Description")
    expect(textarea.value).toBe("Static value")
  })

  it("triggers onBlur", () => {
    const { getByLabelText } = render(<TextArea {...props} />)
    const textarea = getByLabelText("Description")

    fireEvent.blur(textarea)
    expect(props.onBlur).toHaveBeenCalled()
  })

  it("triggers onChange when textarea value changes", () => {
    const { getByLabelText } = render(<TextArea {...props} />)
    const textarea = getByLabelText("Description")

    fireEvent.change(textarea, { target: { value: "New description" } })
    expect(props.onChange).toHaveBeenCalled()
  })

  it("renders with required attribute", () => {
    const { getByLabelText } = render(<TextArea {...props} required />)
    const textarea = getByLabelText("Description")
    expect(textarea.required).toBe(true)
  })

  it("renders with specified rows and columns", () => {
    const rows = 5
    const cols = 40
    const { getByLabelText } = render(
      <TextArea {...props} cols={cols} rows={rows} />
    )
    const textarea = getByLabelText("Description")
    expect(textarea.rows).toBe(rows)
    expect(textarea.cols).toBe(cols)
  })
})
