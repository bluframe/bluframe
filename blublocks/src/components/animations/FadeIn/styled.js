// @flow
/* eslint-disable no-ternary, no-nested-ternary */

import styled, { type StyledComponent } from "styled-components"
import type { Theme } from "@bluframe/blublocks"
import fadeInLeft from "components/animations/FadeIn/fadeInLeft"
import fadeInRight from "components/animations/FadeIn/fadeInRight"
import fadeInUp from "components/animations/FadeIn/fadeInUp"

export const Wrapper: StyledComponent<
  {| +$fadeIn: "Left" | "Right" | "Up", +$isAnimated: boolean |},
  Theme,
  HTMLDivElement
> = styled.div`
  animation: ${({ $fadeIn }) =>
    $fadeIn === "Left"
      ? fadeInLeft
      : $fadeIn === "Right"
      ? fadeInRight
      : fadeInUp};
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-play-state: ${({ $isAnimated }) =>
    $isAnimated ? "running" : "paused"};
`
