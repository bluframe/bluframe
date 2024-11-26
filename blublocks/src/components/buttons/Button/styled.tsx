/* eslint-disable no-ternary, no-nested-ternary */

import Reset from "components/buttons/Reset"
import { Theme } from "styles/theme"
import colors from "styles/colors"
import getColorGrades from "helpers/getColorGrades"
import { rgba } from "polished"
import styled from "styled-components"

type Props = {
  $bold?: boolean
  $expanded?: boolean
  $hasIconEnd: boolean
  $hasIconStart: boolean
  $iconOnly?: boolean
  $loading?: boolean
  $noHoverHighlight?: boolean
  $outlined?: boolean
  $padded?: boolean
  $raised?: boolean
  $rounded?: boolean
  $secondary?: boolean
  $small?: boolean
  $transparent?: boolean
  disabled?: boolean
}

const BACKGROUND_ALPHA = 0.7
const BOX_SHADOW_ALPHA_ONE = 0.2
const BOX_SHADOW_ALPHA_TWO = 0.14
const BOX_SHADOW_ALPHA_THREE = 0.12

const getBackground = (props: Props & { theme: Theme }) => {
  if (props.$transparent) {
    return "transparent"
  }

  const colorGrades = getColorGrades(props)

  return props.$outlined ? colorGrades.contrast : colorGrades.main
}

const getBorder = (props: Props & { theme: Theme }) => {
  if (props.$transparent) {
    return "1px solid transparent"
  }

  const colorGrades = getColorGrades(props)

  return `1px solid ${colorGrades.main}`
}

const getColor = (props: Props & { theme: Theme }) => {
  const colorGrades = getColorGrades(props)

  return props.$outlined || props.$transparent
    ? colorGrades.main
    : colorGrades.contrast
}

export const Wrapper = styled(Reset).attrs((props: Props) => ({
  "data-variant": props.$secondary
    ? "secondary"
    : props.$outlined
    ? "outlined"
    : props.$iconOnly
    ? "iconOnly"
    : undefined
}))`
  align-items: center;
  background: ${getBackground};
  border: ${getBorder};
  border-radius: ${({ $rounded }: { $rounded?: boolean }) =>
    $rounded ? "50%" : "3px"};
  ${({ $raised }: { $raised?: boolean }) =>
    $raised &&
    `box-shadow: 0px 3px 1px -2px ${rgba(
      colors.black,
      BOX_SHADOW_ALPHA_ONE
    )}, 0px 2px 2px 0px ${rgba(
      colors.black,
      BOX_SHADOW_ALPHA_TWO
    )}, 0px 1px 5px 0px ${rgba(colors.black, BOX_SHADOW_ALPHA_THREE)};`}
  color: ${getColor};
  column-gap: 10px;
  cursor: ${({ disabled }: { disabled?: boolean }) =>
    disabled ? "not-allowed" : "pointer"};
  display: grid;
  font-family: ${({ theme }: { theme: Theme }) => theme.font.family};
  font-size: ${({ $small }: { $small?: boolean }) =>
    $small ? "14px" : "16px"};
  font-weight: ${({ $bold }: { $bold?: boolean }) => ($bold ? "700" : "300")};
grid-template-columns: ${({ $hasIconEnd, $hasIconStart, $loading }: Props) =>
  $loading
    ? "auto auto auto auto"
    : $hasIconEnd || $hasIconStart
    ? "auto auto auto"
    : "auto"};
  justify-items: center;
  line-height: 1.33;
      padding: ${({ $padded, $rounded, $small, $iconOnly }: Props) =>
        $small
          ? "6px 12px"
          : $iconOnly || $rounded
          ? "10px"
          : $padded
          ? "15px 42px"
          : "10px 20px"};
  transition: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-property: background-color, color, opacity;
  width: ${({ $expanded }: { $expanded?: boolean }) =>
    $expanded ? "100%" : "auto"};

  &:hover {
  ${(props: any) =>
    !props.$noHoverHighlight &&
    `background:
      ${
        props.disabled || props.$transparent
          ? getBackground(props)
          : rgba(getBackground(props), BACKGROUND_ALPHA)
      };}`}

  & i,
  svg {
    color: ${getColor};
  }
`
