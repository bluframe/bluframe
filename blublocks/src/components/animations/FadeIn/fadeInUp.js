// @flow

import { type KeyFrames, keyframes } from "styled-components"

const fadeInUp: KeyFrames = keyframes`
0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export default fadeInUp
