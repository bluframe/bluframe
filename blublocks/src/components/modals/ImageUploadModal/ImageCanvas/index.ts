import { RefObject, useEffect, useRef } from "react"
import ImageCanvas from "./ImageCanvas"
import prepareComponent from "@bluframe/grapple/prepareComponent"

interface Props {
  imageDataUrl: string
}

export interface ComponentProps {
  canvasRef: RefObject<HTMLCanvasElement>
}

const X_COORDINATE = 0
const Y_COORDINATE = 0

export const usePrepareComponent = ({
  imageDataUrl
}: Props): ComponentProps => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    const imageObj = new Image()

    imageObj.onload = () => {
      canvas.width = imageObj.width
      canvas.height = imageObj.height
      context?.drawImage(
        imageObj,
        X_COORDINATE,
        Y_COORDINATE,
        imageObj.width,
        imageObj.height
      )
    }
    imageObj.src = imageDataUrl
  }, [imageDataUrl])

  return {
    canvasRef
  }
}

export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  ImageCanvas
)
