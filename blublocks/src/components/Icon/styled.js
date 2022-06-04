// @flow

import styled, { type StyledComponent } from "styled-components"
import type { Theme } from "@bluframe/blublocks"

export const Icon: StyledComponent<{}, Theme, HTMLElement> = styled.span`
  & svg {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`
