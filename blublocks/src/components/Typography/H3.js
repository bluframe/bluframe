// @flow

import styled, { type StyledComponent } from "styled-components"
import Heading from "./Heading"
import type { Theme } from "@bluframe/blublocks"

const H3: StyledComponent<{||}, Theme, HTMLHeadingElement> = styled.h3`
  ${Heading}

  font-size: 30px;
`

export default H3
