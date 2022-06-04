// @flow

import { type KeyFrames, keyframes } from "styled-components"

const bounceIn: KeyFrames = keyframes`
  0% {
    opacity: 0;
    transform: scale(.3);
  }

  50% {
    opacity: 1;
    transform: scale(1.05);
  }

  70% {
    transform: scale(.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export default bounceIn
