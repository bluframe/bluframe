import Checkbox from "./Checkbox"
import { ComponentProps } from "."
import React from "react"
import { render } from "tests"

describe("Checkbox", () => {
  const props: ComponentProps = {
    inputId: "apple-checkbox",
    isChecked: true,
    label: "Apple",
    name: "Fruit",
    onClick: jest.fn(),
    value: "apple"
  }

  it("renders", () => {
    const { container } = render(<Checkbox {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
