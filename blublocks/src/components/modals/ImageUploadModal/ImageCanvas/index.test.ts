import { renderHook } from "@testing-library/react"
import { usePrepareComponent } from "."

describe("usePrepareComponent", () => {
  it("returns expected props", () => {
    const hook = renderHook(() =>
      usePrepareComponent({
        imageDataUrl: "imageDataUrl"
      })
    )

    expect(hook.result.current.canvasRef).toEqual({ current: null })
  })
})
