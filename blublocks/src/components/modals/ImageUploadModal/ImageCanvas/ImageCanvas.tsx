import { Canvas } from "./styled"
import { ComponentProps } from "."
import React from "react"

const ImageCanvas = ({ canvasRef }: ComponentProps) => (
  <Canvas ref={canvasRef} />
)

export default ImageCanvas
