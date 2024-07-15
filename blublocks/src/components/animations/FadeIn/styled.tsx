/* eslint-disable no-ternary, no-nested-ternary */

import styled from "styled-components"
import fadeInLeft from "components/animations/FadeIn/fadeInLeft"
import fadeInRight from "components/animations/FadeIn/fadeInRight"
import fadeInUp from "components/animations/FadeIn/fadeInUp"

export const Wrapper = styled.div<{
  $isAnimated: boolean
  $fadeIn: "Left" | "Right" | "Up"
}>`
  animation: ${({ $fadeIn }: { $fadeIn: "Left" | "Right" | "Up" }) =>
    $fadeIn === "Left"
      ? fadeInLeft
      : $fadeIn === "Right"
        ? fadeInRight
        : fadeInUp};
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-play-state: ${({ $isAnimated }: { $isAnimated: boolean }) =>
    $isAnimated ? "running" : "paused"};
`
