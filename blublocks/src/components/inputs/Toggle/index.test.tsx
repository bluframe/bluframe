/* eslint-disable max-lines-per-function */

import Toggle, { Props } from "."
import { fireEvent, render, screen } from "tests"

describe("Toggle", () => {
  let props: Props

  beforeEach(() => {
    props = {
      checked: false,
      disabled: false,
      inputId: "toggle-id",
      name: "toggle-name",
      onChange: jest.fn()
    }
  })

  it("renders with the correct initial state", () => {
    render(<Toggle {...props} />)

    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "false")
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

  it("can be toggled using the keyboard (Space key)", () => {
    render(<Toggle {...props} />)

    fireEvent.keyDown(screen.getByRole("switch"), { code: "Space", key: " " })

    expect(props.onChange).toHaveBeenCalled()
  })

  it("can be toggled using the keyboard (Enter key)", () => {
    render(<Toggle {...props} />)

    fireEvent.keyDown(screen.getByRole("switch"), {
      code: "Enter",
      key: "Enter"
    })

    expect(props.onChange).toHaveBeenCalled()
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
