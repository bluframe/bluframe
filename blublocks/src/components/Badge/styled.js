// @flow

import type { Palette, Theme } from "@bluframe/blublocks"
import styled, { type StyledComponent } from "styled-components"

export const Wrapper: StyledComponent<
  {| +color: $Keys<Palette> |},
  Theme,
  HTMLElement
> = styled.span`
  align-items: center;
  background-color: ${({ theme, color }): string => theme.palette[color].main};
  border-radius: 10px;
  color: ${({ theme, color }): string => theme.palette[color].contrast};
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  justify-content: center;
  line-height: 1;
  padding: 4px 8px;
`
