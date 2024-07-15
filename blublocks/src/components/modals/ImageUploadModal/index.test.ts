import { renderHook } from "@testing-library/react"
import { usePrepareComponent } from "."

describe("usePrepareComponent", () => {
  const defaultProps = {
    currentImageId: "ecb4f6c5-9d4f-4a5c-9d6a-1c1a4f5f0f5d",
    message: "Select an image to upload",
    onClose: jest.fn(),
    onSubmit: jest.fn()
  }

  it("returns expected props", () => {
    const hook = renderHook(() => usePrepareComponent(defaultProps))

    expect(hook.result.current).toEqual({
      currentImageId: "ecb4f6c5-9d4f-4a5c-9d6a-1c1a4f5f0f5d",
      imageDataUrl: null,
      isDisabled: false,
      isLoading: false,
      isUploadDisabled: true,
      message: "Select an image to upload",
      onClose: expect.any(Function),
      onDragOver: expect.any(Function),
      onFileDrop: expect.any(Function),
      onFileSelect: expect.any(Function),
      onSubmit: expect.any(Function)
    })
  })

  it("calls event.preventDefault when onDragOver is called", () => {
    const hook = renderHook(() => usePrepareComponent(defaultProps))
    const event = { preventDefault: jest.fn() }
    // @ts-ignore
    hook.result.current.onDragOver(event)
    expect(event.preventDefault).toHaveBeenCalled()
  })

  it("calls event.preventDefault when onFileDrop is called", () => {
    const hook = renderHook(() => usePrepareComponent(defaultProps))
    const event = { dataTransfer: { files: [] }, preventDefault: jest.fn() }
    // @ts-ignore
    hook.result.current.onFileDrop(event)
    expect(event.preventDefault).toHaveBeenCalled()
  })
})
