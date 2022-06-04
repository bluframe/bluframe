// @flow

import { type ComponentProps } from "."
import React from "react"
import { Wrapper } from "./styled"

const Button = ({
  buttonType = "button",
  className,
  isBold,
  isPadded,
  label,
  onClick
}: ComponentProps): React$Node => (
  <Wrapper
    className={className}
    isBold={isBold}
    isPadded={isPadded}
    onClick={onClick}
    type={buttonType}
  >
    {label}
  </Wrapper>
)

export default Button
