import { render, screen } from "tests"
import { ComponentProps } from "."
import Select from "./Select"

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
    render(<Select {...props} defaultValue="orange" displayValue="Orange" />)

    expect(screen.getByText("Orange")).toBeInTheDocument()
  })

  it("renders with value", () => {
    render(
      <Select {...props} displayValue="Apple" isControlled value="apple" />
    )

    expect(screen.getByText("Apple")).toBeInTheDocument()
  })
})
