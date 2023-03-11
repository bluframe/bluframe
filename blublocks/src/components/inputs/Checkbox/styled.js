// @flow
/* eslint-disable no-ternary */

import styled, { type StyledComponent } from "styled-components"
import type { Theme } from "@bluframe/blublocks"

export const Wrapper: StyledComponent<{||}, Theme, HTMLElement> = styled.div`
  align-items: center;
  column-gap: 8px;
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 1fr;
  height: 16px;
  width: 16px;
`

export const Input: StyledComponent<
  {||},
  Theme,
  HTMLElement
> = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox: StyledComponent<
  {| checked: boolean |},
  Theme,
  HTMLElement
> = styled.div`
  background: ${({ checked, theme }) =>
    checked ? theme.palette.primary.main : theme.palette.primary.contrast};
  border: ${({ checked, theme }) =>
    checked ? "none" : `1px solid ${theme.palette.primary.main}`};
  border-radius: 3px;
  display: inline-block;
  height: 16px;
  transition: all 150ms;
  width: 16px;
`

export const Icon: StyledComponent<{||}, Theme, any> = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const Polyline: StyledComponent<{||}, Theme, any> = styled.polyline``

export const Label: StyledComponent<
  {||},
  Theme,
  HTMLLabelElement
> = styled.label`
  color: ${({ theme }) => theme.palette.text.main};
  cursor: pointer;
  font-size: 16px;
`
