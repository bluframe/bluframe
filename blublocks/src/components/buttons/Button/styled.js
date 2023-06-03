// @flow
/* eslint-disable no-ternary, no-nested-ternary */

import styled, { type StyledComponent } from "styled-components"
import Reset from "components/buttons/Reset"
import type { Theme } from "@bluframe/blublocks"
import colors from "styles/colors"
import getColorGrades from "helpers/getColorGrades"
import { rgba } from "polished"

type Props = {|
  +bold?: boolean,
  +disabled?: boolean,
  +iconOnly?: boolean,
  +noHoverHighlight?: boolean,
  +outlined?: boolean,
  +padded?: boolean,
  +raised?: boolean,
  +rounded?: boolean,
  +secondary?: boolean,
  +small?: boolean,
  +transparent?: boolean
|}

const BACKGROUND_ALPHA = 0.7
const BOX_SHADOW_ALPHA_ONE = 0.2
const BOX_SHADOW_ALPHA_TWO = 0.14
const BOX_SHADOW_ALPHA_THREE = 0.12

const getBackground = (props: {| ...Props, +theme: Theme |}) => {
  if (props.transparent) {
    return "transparent"
  }

  const colorGrades = getColorGrades(props)

  return props.outlined ? colorGrades.contrast : colorGrades.main
}

const getBorder = (props: {| ...Props, +theme: Theme |}) => {
  if (props.transparent) {
    return "1px solid transparent"
  }

  const colorGrades = getColorGrades(props)

  return `1px solid ${colorGrades.main}`
}

const getColor = (props: {| ...Props, +theme: Theme |}) => {
  const colorGrades = getColorGrades(props)

  return props.outlined || props.transparent
    ? colorGrades.main
    : colorGrades.contrast
}

export const Wrapper: StyledComponent<
  Props,
  Theme,
  StyledComponent<{||}, Theme, HTMLButtonElement>
> = styled(Reset)`
  align-items: center;
  background: ${getBackground};
  border: ${getBorder};
  border-radius: ${({ rounded }) => (rounded ? "50%" : "3px")};
  ${({ raised }) =>
    raised &&
    `box-shadow: 0px 3px 1px -2px ${rgba(
      colors.black,
      BOX_SHADOW_ALPHA_ONE
    )}, 0px 2px 2px 0px ${rgba(
      colors.black,
      BOX_SHADOW_ALPHA_TWO
    )}, 0px 1px 5px 0px ${rgba(colors.black, BOX_SHADOW_ALPHA_THREE)};`}
  color: ${getColor};
  column-gap: 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ small }) => (small ? "14px" : "16px")};
  font-weight: ${({ bold }) => (bold ? "700" : "300")};
  justify-content: center;
  line-height: 1.33;
  padding: ${({ padded, rounded, small, iconOnly }) =>
    small
      ? "6px 12px"
      : iconOnly || rounded
      ? "10px"
      : padded
      ? "15px 42px"
      : "10px 20px"};
  transition: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-property: background-color, color, opacity;
  width: ${({ expanded }) => (expanded ? "100%" : "auto")};

  &:hover {
    ${(props) =>
      !props.noHoverHighlight &&
      `background:
      ${
        props.disabled || props.transparent
          ? getBackground(props)
          : rgba(getBackground(props), BACKGROUND_ALPHA)
      };}`}

  & i,
  svg {
    color: ${getColor};
  }
`

export const Icon: StyledComponent<{||}, Theme, HTMLElement> = styled.span``

export const IconEnd: StyledComponent<{||}, Theme, HTMLElement> = styled.span``

export const IconStart: StyledComponent<
  {||},
  Theme,
  HTMLElement
> = styled.span``
