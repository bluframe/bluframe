// @flow
/* eslint-disable no-ternary */

import { IconEnd, IconStart, Wrapper } from "./styled"
import type { ComponentProps } from "."
import Loading from "components/Loading"
import React from "react"

const Button = ({
  bold,
  className,
  disabled,
  expanded,
  iconEnd,
  iconStart,
  label,
  loading,
  noHoverHighlight,
  onClick,
  outlined,
  padded,
  secondary,
  small,
  type = "button"
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
    small={small}
    type={type}
  >
    {iconStart ? <IconStart>{iconStart}</IconStart> : null}
    {label}
    {iconEnd ? <IconEnd>{iconEnd}</IconEnd> : null}
    {loading ? (
      <IconEnd>
        <Loading contrast={!outlined} />
      </IconEnd>
    ) : null}
  </Wrapper>
)

export default Button
