// @flow

import { type KeyFrames, keyframes } from "styled-components"

const fadeOut: KeyFrames = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

export default fadeOut
