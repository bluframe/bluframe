// @flow

import styled, { type StyledComponent } from "styled-components"
import Heading from "./Heading"
import type { Theme } from "@bluframe/blublocks"

const H2: StyledComponent<{||}, Theme, HTMLHeadingElement> = styled.h2`
  ${Heading}

  font-size: 32px;
`

export default H2
