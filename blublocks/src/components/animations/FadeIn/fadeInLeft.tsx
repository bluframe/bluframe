import { keyframes } from "styled-components"

const fadeInLeft = keyframes`
0% {
    opacity: 0;
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export default fadeInLeft
