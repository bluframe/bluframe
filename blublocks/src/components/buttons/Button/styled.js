// @flow
/* eslint-disable no-ternary, no-nested-ternary */

import styled, { type StyledComponent } from "styled-components"
import Reset from "components/buttons/Reset"
import type { Theme } from "@bluframe/blublocks"
import { rgba } from "polished"

type Props = {|
  +bold?: boolean,
  +disabled?: boolean,
  +noHoverHighlight?: boolean,
  +outlined?: boolean,
  +padded?: boolean,
  +secondary?: boolean
|}

const BACKGROUND_ALPHA = 0.7

const getPalette = (props: {| ...Props, +theme: Theme |}) => {
  let palette = props.theme.palette.primary

  if (props.secondary) {
    palette = props.theme.palette.secondary
  }

  if (props.disabled) {
    palette = props.theme.palette.disabled
  }

  return palette
}

const getBackground = (props: {| ...Props, +theme: Theme |}) => {
  const palette = getPalette(props)

  return props.outlined ? palette.contrast : palette.main
}

const getBorder = (props: {| ...Props, +theme: Theme |}) => {
  const palette = getPalette(props)

  return `1px solid ${palette.main}`
}

const getColor = (props: {| ...Props, +theme: Theme |}) => {
  const palette = getPalette(props)

  return props.outlined ? palette.main : palette.contrast
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
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  font-family: ${({ theme }) => theme.font.family};
  font-size: 16px;
  font-weight: ${({ bold }) => (bold ? "700" : "300")};
  justify-content: center;
  line-height: 1.33;
  padding: ${({ padded }) => (padded ? "15px 42px" : "10px 20px")};
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
    color: ${({ outlined, theme }) =>
      outlined ? theme.palette.primary.main : theme.palette.primary.contrast};
  }
`

export const IconEnd: StyledComponent<{}, Theme, HTMLDivElement> = styled.div`
  margin-left: 10px;
`

export const IconStart: StyledComponent<{}, Theme, HTMLDivElement> = styled.div`
  margin-right: 10px;
`
