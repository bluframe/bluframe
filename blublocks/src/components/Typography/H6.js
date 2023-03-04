// @flow

import styled, { type StyledComponent } from "styled-components"
import Heading from "./Heading"
import type { Theme } from "@bluframe/blublocks"

const H6: StyledComponent<{||}, Theme, HTMLHeadingElement> = styled.h6`
  ${Heading}

  font-size: 24px;
`

export default H6
