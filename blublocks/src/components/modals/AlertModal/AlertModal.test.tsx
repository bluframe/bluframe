import { fireEvent, render, screen } from "tests"
import AlertModal from "./AlertModal"
import React from "react"

const EXPECTED_CALL_COUNT = 1

describe("AlertModal", () => {
  const defaultProps = {
    message: "You need more permissions to perform that action",
    onOkay: jest.fn()
  }

  it("renders correctly with the provided message", () => {
    render(<AlertModal {...defaultProps} />)
    expect(
      screen.getByText("You need more permissions to perform that action")
    ).toBeInTheDocument()
  })

  it('calls onOkay when "Okay" button is clicked', () => {
    render(<AlertModal {...defaultProps} />)
    fireEvent.click(screen.getByText("Okay"))
    expect(defaultProps.onOkay).toHaveBeenCalledTimes(EXPECTED_CALL_COUNT)
  })
})
