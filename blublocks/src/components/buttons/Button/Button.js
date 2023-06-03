// @flow
/* eslint-disable no-ternary */

import { Icon, IconEnd, IconStart, Wrapper } from "./styled"
import type { ComponentProps } from "."
import Loading from "components/Loading"
import React from "react"

const Button = ({
  bold,
  className,
  disabled,
  expanded,
  iconOnly,
  icon,
  iconEnd,
  iconStart,
  label,
  loading,
  noHoverHighlight,
  onClick,
  outlined,
  padded,
  rounded,
  secondary,
  small,
  transparent,
  type = "button"
}: ComponentProps): React$Node => (
  <Wrapper
    aria-disabled={disabled ? "true" : "false"}
    aria-label={iconOnly ? label : undefined}
    bold={bold}
    className={className}
    disabled={disabled}
    expanded={expanded}
    iconOnly={iconOnly}
    noHoverHighlight={noHoverHighlight}
    onClick={onClick}
    outlined={outlined}
    padded={padded}
    rounded={rounded}
    secondary={secondary}
    small={small}
    transparent={transparent}
    type={type}
  >
    {iconOnly ? <Icon>{icon}</Icon> : null}
    {!iconOnly && iconStart ? <IconStart>{iconStart}</IconStart> : null}
    {iconOnly ? null : label}
    {!iconOnly && iconEnd ? <IconEnd>{iconEnd}</IconEnd> : null}
    {loading ? (
      <IconEnd>
        <Loading contrast={!outlined} />
      </IconEnd>
    ) : null}
  </Wrapper>
)

export default Button
