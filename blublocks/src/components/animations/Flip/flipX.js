// @flow

import { type KeyFrames, keyframes } from "styled-components"

const flipInX: KeyFrames = keyframes`
0% {
  -webkit-transform: perspective(400px) rotateX(90deg);
  transform: perspective(400px) rotateX(90deg);
  opacity: 0;
}

40% {
  -webkit-transform: perspective(400px) rotateX(-10deg);
  transform: perspective(400px) rotateX(-10deg);
}

70% {
  -webkit-transform: perspective(400px) rotateX(10deg);
  transform: perspective(400px) rotateX(10deg);
}

100% {
  -webkit-transform: perspective(400px) rotateX(0deg);
  transform: perspective(400px) rotateX(0deg);
  opacity: 1;
}
`

export default flipInX
