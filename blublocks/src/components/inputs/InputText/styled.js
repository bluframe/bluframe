// @flow
/* eslint-disable no-ternary */

import styled, { type StyledComponent } from "styled-components"
import type { Theme } from "@bluframe/blublocks"

export const Wrapper: StyledComponent<{||}, Theme, HTMLDivElement> = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`

export const Input: StyledComponent<
  {| +isFullBorder?: boolean |},
  Theme,
  HTMLInputElement
> = styled.input.attrs({ placeholder: " ", type: "text" })`
  ${({ isFullBorder, theme }) =>
    isFullBorder
      ? `border: 1px solid ${theme.colors.gray.light}`
      : `
  border: none;
border-bottom: 1px solid ${theme.colors.gray.light};
  `};
  border-radius: 4px;
  box-shadow: none;
  color: ${({ theme }) => theme.palette.text.main};
  font-size: 16px;
  height: 44px;
  margin: 0;
  padding: 8px 16px;
  width: 100%;

  &:focus {
    ${({ isFullBorder, theme }) =>
      isFullBorder
        ? `border: 1px solid ${theme.colors.gray.light}`
        : `
  border: none;
border-bottom: 1px solid ${theme.colors.gray.light};
  `};
    box-shadow: none;
  }

  :not(:placeholder-shown) + label,
  &:focus + label {
    font-size: 12px;
    left: 16px;
    top: -24px;
  }
`

export const Label: StyledComponent<
  {||},
  Theme,
  HTMLLabelElement
> = styled.label`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 16px;
  left: 16px;
  pointer-events: none;
  position: absolute;
  top: 8px;
  transition: all 200ms;
`
