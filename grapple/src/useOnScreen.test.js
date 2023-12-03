// @flow
/* eslint-disable no-ternary, id-length */

import { act, fireEvent, render } from "tests"
import React from "react"
import useOnScreen from "./useOnScreen"

const TestComponent = ({ onVisible }) => {
  const [isVisible, ref] = useOnScreen()

  React.useEffect(() => {
    if (isVisible) {
      onVisible()
    }
  }, [isVisible, onVisible])

  return <div ref={ref}>{"Element"}</div>
}

describe("useOnScreen", () => {
  it("detects when an element is on screen", () => {
    const handleVisible = jest.fn()

    act(() => {
      render(<TestComponent onVisible={handleVisible} />)
    })

    // Mock the element becoming visible on the screen
    fireEvent.scroll(window, { target: { scrollY: 100 } })

    expect(handleVisible).toHaveBeenCalled()
  })
})
