/* eslint-disable no-ternary, max-lines-per-function, no-nested-ternary */

import { ComponentProps } from "."
import Loading from "components/Loading"
import { Wrapper } from "./styled"

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
}: ComponentProps) => (
  <Wrapper
    $bold={bold}
    $expanded={expanded}
    $hasIconEnd={Boolean(iconEnd)}
    $hasIconStart={Boolean(iconStart)}
    $iconOnly={iconOnly}
    $loading={loading}
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
    {iconOnly ? icon : null}
    {!iconOnly && iconStart ? iconStart : <span />}
    {iconOnly ? null : label}
    {!iconOnly && iconEnd ? iconEnd : <span />}
    {loading ? <Loading contrast={!outlined} /> : null}
  </Wrapper>
)

export default Button
