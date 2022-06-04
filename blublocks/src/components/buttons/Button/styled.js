// @flow
/* eslint-disable no-ternary, no-nested-ternary */

import styled, { type StyledComponent } from "styled-components"
import Reset from "components/buttons/Reset"
import { rgba } from "polished"

type Props = {|
  +isBold?: boolean,
  +isPadded?: boolean
|}

const BACKGROUND_ALPHA = 0.7

export const Wrapper: StyledComponent<
  Props,
  mixed,
  React$ComponentType<Props>
> = styled(Reset)`
  background: ${({ theme }) => theme.palette.primary.main};
  border-radius: 3px;
  color: ${({ theme }) => theme.palette.primary.contrast};
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family};
  font-size: 16px;
  font-weight: ${({ isBold }) => (isBold ? "700" : "300")};
  line-height: 1.33;
  padding: ${({ isPadded }) => (isPadded ? "15px 42px" : "10px 20px")};
  transition: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-property: background-color, color, opacity;

  &:hover {
    background: ${({ theme }) =>
      rgba(theme.palette.primary.main, BACKGROUND_ALPHA)};
  }
`
