/* eslint-disable max-lines-per-function, max-statements */

import { fireEvent, render, screen } from "tests"
import Button from "./Button"
import { type ComponentProps } from "."
import Icon from "components/Icon"

describe("Button", () => {
  let props: ComponentProps

  beforeEach(() => {
    props = {
      label: "Button",
      onClick: jest.fn()
    }
  })

  it("renders", () => {
    render(<Button {...props} />)

    expect(screen.getByRole("button", { name: "Button" })).toBeInTheDocument()
  })

  it("renders disabled", () => {
    props.disabled = true

    render(<Button {...props} />)

    expect(screen.getByRole("button", { name: "Button" })).toBeDisabled()
  })

  it("renders with iconStart and iconEnd", () => {
    render(
      <Button
        {...props}
        iconEnd={<div>{"Icon End"}</div>}
        iconStart={<div>{"Icon Start"}</div>}
      />
    )

    expect(screen.getByText("Icon Start")).toBeInTheDocument()
    expect(screen.getByText("Icon End")).toBeInTheDocument()
  })

  it("triggers onClick event", () => {
    render(<Button {...props} />)

    fireEvent.click(screen.getByRole("button", { name: "Button" }))

    expect(props.onClick).toHaveBeenCalled()
  })

  it("does not trigger onClick event if disabled", () => {
    render(<Button {...props} disabled />)

    fireEvent.click(screen.getByRole("button", { name: "Button" }))

    expect(props.onClick).not.toHaveBeenCalled()
  })

  it("renders iconOnly button", () => {
    render(
      <Button
        {...props}
        icon={<Icon name="IoArrowBack" title="Arrow Back" />}
        iconOnly
      />
    )

    const svg = screen.getByTitle("Arrow Back").closest("svg")

    expect(svg).toHaveAttribute("fill", "currentColor")
    expect(svg).toHaveAttribute("height", "16px")
    expect(svg).toHaveAttribute("stroke", "currentColor")
    expect(svg).toHaveAttribute("width", "16px")
  })

  it("renders aria label", () => {
    render(<Button {...props} ariaLabel="Aria Label" />)

    expect(screen.getByLabelText("Aria Label")).toBeInTheDocument()
  })
})
