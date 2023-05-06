// @flow
/* eslint-disable no-ternary */

import { render, screen } from "tests"
import React from "react"
import useToggle from "./useToggle"

const TestComponent = () => {
  const [isToggled, toggle] = useToggle(false)

  return (
    <div>
      <p>{isToggled ? "Toggled" : "Not Toggled"}</p>
      <button onClick={toggle} type="button">
        {"Toggle"}
      </button>
    </div>
  )
}

describe("useToggle", () => {
  it("toggles a boolean value", () => {
    render(<TestComponent />)
    expect(screen.getByText("Not Toggled")).toBeInTheDocument()

    screen.getByText("Toggle").click()
    expect(screen.getByText("Toggled")).toBeInTheDocument()
  })
})
