// @flow
/* eslint-disable no-ternary, max-lines-per-function, no-nested-ternary */

import { Icon, IconEnd, IconStart, Wrapper } from "./styled"
import type { ComponentProps } from "."
import Loading from "components/Loading"
import React from "react"

const Button = ({
  ariaLabel,
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
  raised,
  rounded,
  secondary,
  small,
  transparent,
  type = "button"
}: ComponentProps): React$Node => (
  <Wrapper
    $bold={bold}
    $expanded={expanded}
    $iconOnly={iconOnly}
    $noHoverHighlight={noHoverHighlight}
    $outlined={outlined}
    $padded={padded}
    $raised={raised}
    $rounded={rounded}
    $secondary={secondary}
    $small={small}
    $transparent={transparent}
    aria-disabled={disabled ? "true" : "false"}
    aria-label={ariaLabel ? ariaLabel : iconOnly ? label : undefined}
    className={className}
    disabled={disabled}
    onClick={onClick}
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
