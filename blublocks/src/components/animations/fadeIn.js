// @flow

import { type KeyFrames, keyframes } from "styled-components"

const fadeIn: KeyFrames = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export default fadeIn
