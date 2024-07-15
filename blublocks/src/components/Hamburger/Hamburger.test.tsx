import { fireEvent, render } from "tests"
import Hamburger from "./Hamburger"
import React from "react"

const ONE = 1

const props = {
  isMenuExpanded: false,
  menuId: "main-navigation",
  onClick: jest.fn()
}

describe("Hamburger", () => {
  it("renders", () => {
    const { container } = render(<Hamburger {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("handles click event", () => {
    const { getByRole } = render(<Hamburger {...props} />)
    const button = getByRole("menu")

    fireEvent.click(button)

    expect(props.onClick).toHaveBeenCalledTimes(ONE)
  })

  it("sets aria-expanded attribute correctly", () => {
    const { getByRole, rerender } = render(<Hamburger {...props} />)
    const button = getByRole("menu")

    expect(button).toHaveAttribute("aria-expanded", "false")

    rerender(<Hamburger {...props} isMenuExpanded />)
    expect(button).toHaveAttribute("aria-expanded", "true")
  })

  it("sets aria-controls attribute correctly", () => {
    const { getByRole } = render(<Hamburger {...props} />)
    const button = getByRole("menu")

    expect(button).toHaveAttribute("aria-controls", "main-navigation")
  })
})
