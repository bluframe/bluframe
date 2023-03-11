// @flow
/* eslint-disable no-ternary, no-nested-ternary */

import styled, { type StyledComponent } from "styled-components"
import Reset from "components/buttons/Reset"
import type { Theme } from "@bluframe/blublocks"
import getColorGrades from "helpers/getColorGrades"
import { rgba } from "polished"

type Props = {|
  +bold?: boolean,
  +disabled?: boolean,
  +noHoverHighlight?: boolean,
  +outlined?: boolean,
  +padded?: boolean,
  +secondary?: boolean,
  +small?: boolean
|}

const BACKGROUND_ALPHA = 0.7

const getBackground = (props: {| ...Props, +theme: Theme |}) => {
  const colorGrades = getColorGrades(props)

  return props.outlined ? colorGrades.contrast : colorGrades.main
}

const getBorder = (props: {| ...Props, +theme: Theme |}) => {
  const colorGrades = getColorGrades(props)

  return `1px solid ${colorGrades.main}`
}

const getColor = (props: {| ...Props, +theme: Theme |}) => {
  const colorGrades = getColorGrades(props)

  return props.outlined ? colorGrades.main : colorGrades.contrast
}

export const Wrapper: StyledComponent<
  Props,
  Theme,
  React$ComponentType<Props>
> = styled(Reset)`
  align-items: center;
  background: ${getBackground};
  border: ${getBorder};
  border-radius: 3px;
  color: ${getColor};
  column-gap: 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ small }) => (small ? "14px" : "16px")};
  font-weight: ${({ bold }) => (bold ? "700" : "300")};
  justify-content: center;
  line-height: 1.33;
  padding: ${({ padded, small }) =>
    small ? "6px 12px" : padded ? "15px 42px" : "10px 20px"};
  transition: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-property: background-color, color, opacity;
  width: ${({ expanded }) => (expanded ? "100%" : "auto")};

  &:hover {
    ${(props) =>
      !props.noHoverHighlight &&
      `background:
      ${
        props.disabled
          ? getBackground(props)
          : rgba(getBackground(props), BACKGROUND_ALPHA)
      };}`}

  & i,
  svg {
    color: ${getColor};
  }
`

export const IconEnd: StyledComponent<{||}, Theme, HTMLElement> = styled.span``

export const IconStart: StyledComponent<
  {||},
  Theme,
  HTMLElement
> = styled.span``
