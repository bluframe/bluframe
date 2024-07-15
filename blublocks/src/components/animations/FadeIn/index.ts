import FadeIn from "./FadeIn"
import React from "react"

export interface Props {
  children: React.ReactNode
  fadeIn: "Left" | "Right" | "Up"
  isAnimated: boolean
}

export interface ComponentProps extends Props {}

export default FadeIn
