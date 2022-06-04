// @flow

import styled, { type StyledComponent } from "styled-components"
import mediaQueries from "styles/mediaQueries"

const Section: StyledComponent<{}, mixed, HTMLElement> = styled.section`
  padding: 20px 10px;

  ${mediaQueries.tablet} {
    padding: 60px 20px;
  }
`

export default Section
