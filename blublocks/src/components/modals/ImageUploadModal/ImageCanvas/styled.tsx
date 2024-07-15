import styled from "styled-components"
import mediaQueries from "styles/mediaQueries"

export const Canvas = styled.canvas`
  height: auto;
  max-width: 100%;

  ${mediaQueries.tablet} {
    max-width: 300px;
  }
`
