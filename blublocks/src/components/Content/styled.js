// @flow

import styled, { type StyledComponent } from "styled-components"
import type { Theme } from "@bluframe/blublocks"

export const Wrapper: StyledComponent<{}, Theme, HTMLElement> = styled.span`
  color: ${({ theme }) => theme.palette.text};
`
