/* eslint-disable no-ternary, no-nested-ternary */

import styled, { css } from "styled-components"
import { Theme } from "styles/theme"

export const Wrapper = styled.div`
  display: grid;
  position: relative;
  row-gap: 4px;
  width: 100%;
`

const labelShrinkCss = css`
  font-size: 12px;
  left: 16px;
  top: ${({ isFullBorder }: { isFullBorder?: boolean }) =>
    isFullBorder ? "-24px" : "0"};
  transition: all 200ms;

  & svg {
    height: 12px;
    width: 12px;
  }
`

export const Input = styled.input.attrs({ placeholder: " " })<{
  $error?: boolean
  $hasContent: boolean
  $success?: boolean
  isFullBorder?: boolean
}>`
  ${({ $error, $success, isFullBorder, theme }) =>
    isFullBorder
      ? `border: 1px solid ${
          $error
            ? theme.palette.error.main
            : $success
            ? theme.palette.success.main
            : theme.colors.gray.light
        }`
      : `
  border: none;
border-bottom: 1px solid ${
          $error
            ? theme.palette.error.main
            : $success
            ? theme.palette.success.main
            : theme.colors.gray.light
        };
  `};
  border-radius: 4px;
  box-shadow: none;
  color: ${({ disabled, theme }: { disabled?: boolean; theme: Theme }) =>
    disabled ? theme.palette.text.light : theme.palette.text.main};
  font-size: 16px;
  height: ${({ isFullBorder }) => (isFullBorder ? "44px" : "50px")};
  margin: 0;
  padding: ${({ isFullBorder }) => (isFullBorder ? "8px 16px" : "16px 16px 0")};
  width: 100%;

  &:focus {
    ${({ isFullBorder, theme }) =>
      isFullBorder
        ? `border: 1px solid ${theme.palette.primary.main}`
        : `
  border: none;
border-bottom: 1px solid ${theme.palette.primary.main};
  `};
    box-shadow: none;
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    ${labelShrinkCss}
  }

  ${({ $hasContent }: { $hasContent: boolean }) =>
    $hasContent &&
    css`
      & + label {
        ${labelShrinkCss}
      }
    `}
`

export const Label = styled.label<{ isFullBorder?: boolean }>`
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.light};
  font-size: 16px;
  left: 16px;
  pointer-events: none;
  position: absolute;
  top: ${({ isFullBorder }: { isFullBorder?: boolean }) =>
    isFullBorder ? "8px" : "12px"};
  transition: all 200ms;
`

export const ErrorText = styled.div`
  color: ${({ theme }: { theme: Theme }) => theme.palette.error.main};
  font-size: 12px;
`

export const InfoText = styled.div`
  color: ${({ theme }: { theme: Theme }) => theme.palette.info.main};
  font-size: 12px;
`

export const SuccessText = styled.div`
  color: ${({ theme }: { theme: Theme }) => theme.palette.success.main};
  font-size: 12px;
`
