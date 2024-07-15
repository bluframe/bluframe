import { fireEvent, render, screen } from "tests"
import ImageUploadModal from "./ImageUploadModal"
import React from "react"

const EXPECTED_CALL_COUNT = 1

describe("ImageUploadModal", () => {
  const defaultProps = {
    imageDataUrl: null,
    isLoading: false,
    isUploadDisabled: false,
    message: "Are you sure?",
    onClose: jest.fn(),
    onDragOver: jest.fn(),
    onFileDrop: jest.fn(),
    onFileSelect: jest.fn(),
    onSubmit: jest.fn()
  }

  it("renders correctly with the provided message", () => {
    render(<ImageUploadModal {...defaultProps} />)
    expect(screen.getByText("Are you sure?")).toBeInTheDocument()
  })

  it('calls onClose when "Cancel" button is clicked', () => {
    render(<ImageUploadModal {...defaultProps} />)
    fireEvent.click(screen.getByText("Cancel"))
    expect(defaultProps.onClose).toHaveBeenCalledTimes(EXPECTED_CALL_COUNT)
  })

  it('calls onImageUpload when "ImageUpload" button is clicked', () => {
    const { getByText } = render(<ImageUploadModal {...defaultProps} />)
    fireEvent.submit(getByText("Upload"))
    expect(defaultProps.onSubmit).toHaveBeenCalledTimes(EXPECTED_CALL_COUNT)
  })

  it('disables the "ImageUpload" button when isDisabled is true', () => {
    render(<ImageUploadModal {...defaultProps} isDisabled />)
    expect(screen.getByText("Upload")).toBeDisabled()
  })
})
