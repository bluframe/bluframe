import { type ComponentProps } from "."
import React from "react"
import { Wrapper } from "./styled"

const Flip = ({ children, flip, isAnimated }: ComponentProps) => (
  <Wrapper $flip={flip} $isAnimated={isAnimated}>
    {children}
  </Wrapper>
)

export default Flip
