// @flow
/* eslint-disable no-ternary */

import styled, { type StyledComponent } from "styled-components"
import type { Theme } from "@bluframe/blublocks"

export const Wrapper: StyledComponent<{||}, Theme, HTMLDivElement> = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input: StyledComponent<
  {||},
  Theme,
  HTMLInputElement
> = styled.input.attrs({ type: "text" })`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 4px;
  font-size: 16px;
  padding: 8px;
  width: 100%;
`

export const Label: StyledComponent<
  {||},
  Theme,
  HTMLLabelElement
> = styled.label`
  color: ${({ theme }) => theme.palette.text.main};
  font-size: 16px;
  margin-bottom: 4px;
`
