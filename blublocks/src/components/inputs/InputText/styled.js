// @flow
/* eslint-disable no-ternary */

import styled, { type StyledComponent } from "styled-components"
import type { Theme } from "@bluframe/blublocks"

export const Wrapper: StyledComponent<{||}, Theme, HTMLDivElement> = styled.div`
  display: grid;
  position: relative;
  row-gap: 4px;
  width: 100%;
`

export const Input: StyledComponent<
  {| +isFullBorder?: boolean |},
  Theme,
  HTMLInputElement
> = styled.input.attrs(({ defaultValue, value }) => ({
  $hasContent: defaultValue ?? value,
  placeholder: " "
}))`
  ${({ $error, isFullBorder, theme }) =>
    isFullBorder
      ? `border: 1px solid ${
          $error ? theme.palette.error.main : theme.colors.gray.light
        }`
      : `
  border: none;
border-bottom: 1px solid ${
          $error ? theme.palette.error.main : theme.colors.gray.light
        };
  `};
  border-radius: 4px;
  box-shadow: none;
  color: ${({ theme }) => theme.palette.text.main};
  font-size: 16px;
  height: ${({ isFullBorder }) => (isFullBorder ? "44px" : "50px")};
  margin: 0;
  padding: ${({ isFullBorder }) => (isFullBorder ? "8px 16px" : "16px 16px 0")};
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
  &:focus + label,
  ${({ $hasContent }) => $hasContent && "& + label"} {
    font-size: 12px;
    left: 16px;
    top: ${({ isFullBorder }) => (isFullBorder ? "-24px" : "0")};
  }
`

export const Label: StyledComponent<
  {| +isFullBorder?: boolean |},
  Theme,
  HTMLLabelElement
> = styled.label`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 16px;
  left: 16px;
  pointer-events: none;
  position: absolute;
  top: ${({ isFullBorder }) => (isFullBorder ? "8px" : "12px")};
  transition: all 200ms;
`

export const HelperText: StyledComponent<
  {||},
  Theme,
  HTMLDivElement
> = styled.div`
  color: ${({ theme }) => theme.palette.error.main};
  font-size: 1rpx;
`
