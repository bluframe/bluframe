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
  {| +isFocused: boolean |},
  Theme,
  HTMLInputElement
> = styled.input.attrs({ type: "text" })`
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 4px;
  box-shadow: none;
  color: ${({ theme }) => theme.palette.text.main};
  font-size: 16px;
  padding: 8px 16px;
  width: 100%;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    box-shadow: none;
  }

  &:focus + label {
    color: ${({ theme }) => theme.palette.text.light};
    font-size: 12px;
    left: 16px;
    top: -24px;
  }

  ${({ isFocused, value }) =>
    (isFocused || value) &&
    `
    & + label {
      font-size: 12px;
      left: 16px;
      top: -24px;
    }
  `}
`

export const Label: StyledComponent<
  {| +isFocused: boolean |},
  Theme,
  HTMLLabelElement
> = styled.label`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 16px;
  left: 16px;
  pointer-events: none;
  position: absolute;
  top: 6px;
  transition: all 200ms;
`
