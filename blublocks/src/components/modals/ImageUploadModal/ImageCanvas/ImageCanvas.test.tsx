import ImageCanvas from "./ImageCanvas"
import React from "react"
import { render } from "tests"

describe("ImageCanvas", () => {
  it("renders correctly", () => {
    const ref = React.createRef<HTMLCanvasElement>()

    const { container } = render(<ImageCanvas canvasRef={ref} />)

    expect(container).toMatchSnapshot()
  })
})
