// @flow
/* eslint-disable react/jsx-no-bind */

import React, { useState } from "react"
import { render, screen } from "tests"
import usePrevious from "./usePrevious"

const ONE = 1
const ZERO = 0

const TestComponent = () => {
  const [count, setCount] = useState(ZERO)
  const prevCount = usePrevious(count)

  return (
    <div>
      <p>
        {"Current count: "}
        {count}
      </p>
      <p>
        {"Previous count: "}
        {prevCount}
      </p>
      <button onClick={() => setCount(count + ONE)} type="button">
        {"Increment"}
      </button>
    </div>
  )
}

describe("usePrevious", () => {
  it("stores the previous state value", () => {
    render(<TestComponent />)
    expect(screen.getByText("Current count: 0")).toBeInTheDocument()
    expect(screen.getByText("Previous count:")).toBeInTheDocument()

    screen.getByText("Increment").click()
    expect(screen.getByText("Current count: 1")).toBeInTheDocument()
    expect(screen.getByText("Previous count: 0")).toBeInTheDocument()
  })
})
