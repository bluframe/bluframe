// @flow

import type { ComponentProps } from "."
import React from "react"
import { Wrapper } from "./styled"

const Badge = ({
  className,
  color = "primary",
  label
}: ComponentProps): React$Node => (
  <Wrapper aria-label={`badge-${label}`} className={className} color={color}>
    {label}
  </Wrapper>
)

export default Badge
