// @flow
/* eslint-disable no-ternary */

import styled, { type StyledComponent } from "styled-components"
import type { Theme } from "@bluframe/blublocks"

export const Wrapper: StyledComponent<{||}, Theme, HTMLDivElement> = styled.div`
  align-items: center;
  column-gap: 8px;
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 1fr;
`

export const Circle: StyledComponent<
  {| +checked: boolean |},
  Theme,
  HTMLDivElement
> = styled.div`
  border-color: ${({ theme }) => theme.palette.primary.main};
  border-style: solid;
  border-width: ${({ checked }) => (checked ? "2px" : "1px")};
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  position: relative;
  width: 20px;

  &::after {
    background: ${({ checked, theme }) =>
      checked ? theme.palette.primary.main : "transparent"};
    border-radius: 50%;
    content: "";
    height: 12px;
    left: 2px;
    position: absolute;
    top: 2px;
    width: 12px;
  }
`

export const Input: StyledComponent<
  {||},
  Theme,
  HTMLInputElement
> = styled.input.attrs({ type: "radio" })`
  opacity: 0;
  position: absolute;
`

export const Label: StyledComponent<
  {||},
  Theme,
  HTMLLabelElement
> = styled.label`
  color: ${({ theme }) => theme.palette.text.main};
  font-size: 16px;
`
