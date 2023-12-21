// @flow

import { type ComponentProps } from "."
import React from "react"
import { Wrapper } from "./styled"

const FadeIn = ({
  children,
  fadeIn,
  isAnimated
}: ComponentProps): React$Node => (
  <Wrapper $fadeIn={fadeIn} $isAnimated={isAnimated}>
    {children}
  </Wrapper>
)

export default FadeIn
