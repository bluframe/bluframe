/* eslint-disable max-lines-per-function */

import { fireEvent, render, screen } from "tests"
import { ComponentProps } from "."
import Toggle from "./Toggle"

describe("Toggle", () => {
  let props: ComponentProps

  beforeEach(() => {
    props = {
      checked: false,
      disabled: false,
      inputId: "toggle-id",
      label: "Toggle",
      labelId: "toggle-label",
      name: "toggle-name",
      onChange: jest.fn(),
      onKeyDown: jest.fn()
    }
  })

  it("renders", () => {
    render(<Toggle {...props} />)

    expect(screen.getByRole("switch", { name: "Toggle" })).toHaveAttribute(
      "aria-checked",
      "false"
    )
  })

  it("toggles the checked state when clicked", () => {
    render(<Toggle {...props} />)

    fireEvent.click(screen.getByRole("switch"))

    expect(props.onChange).toHaveBeenCalled()
  })

  it("does not trigger onChange when disabled", () => {
    const disabledProps = { ...props, disabled: true }

    render(<Toggle {...disabledProps} />)

    fireEvent.click(screen.getByRole("switch"))

    expect(props.onChange).not.toHaveBeenCalled()
  })

  it("renders with the correct checked state", () => {
    const checkedProps = { ...props, checked: true }

    render(<Toggle {...checkedProps} />)

    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true")
  })

  it("does not toggle when pressing other keys", () => {
    render(<Toggle {...props} />)

    fireEvent.keyDown(screen.getByRole("switch"), {
      code: "ArrowRight",
      key: "ArrowRight"
    })

    expect(props.onChange).not.toHaveBeenCalled()
  })
})
