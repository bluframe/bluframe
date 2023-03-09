// @flow
/* eslint-disable no-ternary */

import styled, { type StyledComponent } from "styled-components"
import type { Theme } from "@bluframe/blublocks"

export const Wrapper: StyledComponent<{||}, Theme, HTMLDivElement> = styled.div`
  display: grid;
  row-gap: 8px;
`

export const Label: StyledComponent<
  {||},
  Theme,
  HTMLLabelElement
> = styled.label`
  color: ${({ theme }) => theme.palette.text.main};
  font-size: 16px;
`

export const Options: StyledComponent<{||}, Theme, HTMLDivElement> = styled.div`
  display: grid;
  row-gap: 4px;
`
