// @flow

import { render, screen } from "tests"
import React from "react"
import useTrimText from "./useTrimText"

const TestComponent = ({ max }) => {
  const text = "This is a long text that needs to be trimmed."
  const trimmedText = useTrimText(text, max)

  return <div>{trimmedText}</div>
}

describe("useTrimText", () => {
  it("trims text to a maximum number of characters", () => {
    render(<TestComponent max={10} />)
    expect(screen.getByText("This is a ...")).toBeInTheDocument()
  })

  it("doesn't trim text if it's within the max length", () => {
    render(<TestComponent max={50} />)
    expect(
      screen.getByText("This is a long text that needs to be trimmed.")
    ).toBeInTheDocument()
  })
})
