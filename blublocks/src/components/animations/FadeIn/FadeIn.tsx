import { ComponentProps } from "."
import React from "react"
import { Wrapper } from "./styled"

const FadeIn = ({ children, fadeIn, isAnimated }: ComponentProps) => (
  <Wrapper $fadeIn={fadeIn} $isAnimated={isAnimated}>
    {children}
  </Wrapper>
)

export default FadeIn
