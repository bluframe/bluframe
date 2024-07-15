import { keyframes } from "styled-components"

const fadeInUp = keyframes`
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
