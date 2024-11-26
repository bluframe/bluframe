import Reset from "components/Reset"
import mediaQueries from "styles/mediaQueries"
import styled from "styled-components"

export const Ul = styled(Reset.Ul)`
  align-items: center;
  column-gap: 10px;
  display: grid;
  font-size: 14px;
  justify-items: start;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  width: 100%;

  ${mediaQueries.tablet} {
    column-gap: 20px;
    font-size: 16px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    row-gap: 10px;
  }
`

export const Li = styled(Reset.Li)``
