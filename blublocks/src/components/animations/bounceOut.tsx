import { keyframes } from "styled-components"

const bounceOut = keyframes`
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(.95);
  }

  50% {
    opacity: 1;
    transform: scale(1.1);
  }

  100% {
    opacity: 0;
    transform: scale(.3);
  }
`

export default bounceOut
