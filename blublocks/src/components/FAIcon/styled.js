// @flow

import styled, { type StyledComponent } from "styled-components"
import type { Theme } from "@bluframe/blublocks"

export const Icon: StyledComponent<
  { +fontSize: string },
  Theme,
  HTMLElement
> = styled.i`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ fontSize }) => fontSize};
`
