// @flow
/* eslint-disable no-ternary */

import { IconEnd, IconStart, Wrapper } from "./styled"
import type { ComponentProps } from "."
import React from "react"

const Button = ({
  bold,
  buttonType = "button",
  className,
  disabled,
  expanded,
  iconEnd,
  iconStart,
  label,
  noHoverHighlight,
  onClick,
  outlined,
  padded,
  secondary
}: ComponentProps): React$Node => (
  <Wrapper
    bold={bold}
    className={className}
    disabled={disabled}
    expanded={expanded}
    noHoverHighlight={noHoverHighlight}
    onClick={onClick}
    outlined={outlined}
    padded={padded}
    secondary={secondary}
    type={buttonType}
  >
    {iconStart ? <IconStart>{iconStart}</IconStart> : null}
    {label}
    {iconEnd ? <IconEnd>{iconEnd}</IconEnd> : null}
  </Wrapper>
)

export default Button
