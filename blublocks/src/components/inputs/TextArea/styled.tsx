/* eslint-disable no-ternary, no-nested-ternary */

import { Theme } from "styles/theme"
import styled from "styled-components"

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  position: relative;
  ${({ $isExpanded }: { $isExpanded?: boolean }) =>
    $isExpanded ? "width: 100%;" : ""}
`

export const TextAreaInput = styled.textarea<{
  $error?: boolean
  $success?: boolean
}>`
  background: ${({ theme }: { theme: Theme }) => theme.palette.text.contrast};
  border: 0;
  border-bottom: 1px solid
    ${({
      $error,
      $success,
      theme
    }: {
      $error?: boolean
      $success?: boolean
      theme: Theme
    }) =>
      $error
        ? theme.palette.error.main
        : $success
        ? theme.palette.success.main
        : theme.colors.gray.light};
  border-radius: 4px;
  box-shadow: none;
  color: ${({ disabled, theme }: { disabled?: boolean; theme: Theme }) =>
    disabled ? theme.palette.text.light : theme.palette.text.main};
  padding: 34px 16px 0;
  resize: none;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  &:focus {
    border: 0;
    border-bottom: 1px solid
      ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
    box-shadow: none;
  }

  :not(:placeholder-shown) + label,
  &:focus + label {
    font-size: 14px;
    left: 16px;
    top: 6px;

    & svg {
      height: 12px;
      width: 12px;
    }
  }
`

export const Label = styled.label`
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.light};
  font-size: 16px;
  left: 16px;
  pointer-events: none;
  position: absolute;
  top: 6px;
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
