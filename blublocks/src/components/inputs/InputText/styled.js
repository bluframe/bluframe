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
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 4px;
  font-size: 16px;
  padding: 12px 8px;
  width: 100%;

  &:focus + label {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 12px;
    top: 4px;
  }

  ${({ isFocused, value }) =>
    (isFocused || value) &&
    `
    & + label {
      font-size: 12px;
      top: 4px;
    }
  `}
`

export const Label: StyledComponent<
  {| +isFocused: boolean |},
  Theme,
  HTMLLabelElement
> = styled.label`
  color: ${({ theme }) => theme.palette.text.main};
  font-size: 16px;
  left: 8px;
  pointer-events: none;
  position: absolute;
  top: 12px;
  transition: all 200ms;
`
