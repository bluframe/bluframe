// @flow
/* eslint-disable no-ternary */

import styled, { type StyledComponent } from "styled-components"
import type { Theme } from "@bluframe/blublocks"
import colors from "styles/colors"
import { rgba } from "polished"

const BACKDROP_ALPHA = 0.2

export const Wrapper: StyledComponent<
  {| +$isOpen: boolean |},
  Theme,
  HTMLDivElement
> = styled.div`
  background: ${rgba(colors.black, BACKDROP_ALPHA)};
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`

export const Container: StyledComponent<
  {||},
  Theme,
  HTMLDivElement
> = styled.div`
  background: ${({ theme }) => theme.palette.text.contrast};
  display: grid;
  margin: 15% auto;
  padding: 10px 10px 50px;
  row-gap: 10px;
  width: 80%;
`

export const Top: StyledComponent<{||}, Theme, HTMLDivElement> = styled.div`
  display: grid;
  justify-items: end;
`

export const Content: StyledComponent<{||}, Theme, HTMLDivElement> = styled.div`
  align-items: center;
  display: grid;
  justify-items: center;
`
