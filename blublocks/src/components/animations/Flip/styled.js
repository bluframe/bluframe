// @flow
/* eslint-disable no-ternary */

import styled, { type StyledComponent } from "styled-components"
import type { Theme } from "@bluframe/blublocks"
import flipX from "components/animations/Flip/flipX"
import flipY from "components/animations/Flip/flipY"

export const Wrapper: StyledComponent<
  {| +flip: "X" | "Y", +isAnimated: boolean |},
  Theme,
  HTMLDivElement
> = styled.div`
  animation: ${({ flip }) => (flip === "X" ? flipX : flipY)};
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-play-state: ${({ isAnimated }) =>
    isAnimated ? "running" : "paused"};
`
