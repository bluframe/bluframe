import Flip from "./Flip"
import React from "react"

export interface Props {
  children: React.ReactNode
  flip: "X" | "Y"
  isAnimated: boolean
}

export interface ComponentProps extends Props {}

export default Flip
