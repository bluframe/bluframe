/* eslint-disable no-ternary */

import styled from "styled-components"
import flipX from "components/animations/Flip/flipX"
import flipY from "components/animations/Flip/flipY"

export const Wrapper = styled.div<{ $isAnimated: boolean; $flip: "X" | "Y" }>`
  animation: ${({ $flip }: { $flip: "X" | "Y" }) =>
    $flip === "X" ? flipX : flipY};
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-play-state: ${({ $isAnimated }: { $isAnimated: boolean }) =>
    $isAnimated ? "running" : "paused"};
`
