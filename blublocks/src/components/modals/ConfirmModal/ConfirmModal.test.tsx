// @flow

import { fireEvent, render, screen } from "tests"
import ConfirmModal from "./ConfirmModal"
import React from "react"

const EXPECTED_CALL_COUNT = 1

describe("ConfirmModal", () => {
  const defaultProps = {
    isDisabled: false,
    isLoading: false,
    message: "Are you sure?",
    onClose: jest.fn(),
    onConfirm: jest.fn()
  }

  it("renders correctly with the provided message", () => {
    render(<ConfirmModal {...defaultProps} />)
    expect(screen.getByText("Are you sure?")).toBeInTheDocument()
  })

  it('calls onClose when "Cancel" button is clicked', () => {
    render(<ConfirmModal {...defaultProps} />)
    fireEvent.click(screen.getByText("Cancel"))
    expect(defaultProps.onClose).toHaveBeenCalledTimes(EXPECTED_CALL_COUNT)
  })

  it('calls onConfirm when "Confirm" button is clicked', () => {
    render(<ConfirmModal {...defaultProps} />)
    fireEvent.click(screen.getByText("Confirm"))
    expect(defaultProps.onConfirm).toHaveBeenCalledTimes(EXPECTED_CALL_COUNT)
  })

  it('disables the "Confirm" button when isDisabled is true', () => {
    render(<ConfirmModal {...defaultProps} isDisabled />)
    expect(screen.getByText("Confirm")).toBeDisabled()
  })
})
