import { render, screen } from "tests"
import Checkbox from "./Checkbox"
import { ComponentProps } from "."

describe("Checkbox", () => {
  const props: ComponentProps = {
    inputId: "apple",
    isChecked: true,
    label: "Apple",
    labelId: "apple-label",
    name: "Fruit",
    onChange: jest.fn(),
    value: "apple"
  }

  it("renders", () => {
    render(<Checkbox {...props} />)

    expect(screen.getByRole("checkbox", { name: "Apple" })).toBeInTheDocument()
  })
})
