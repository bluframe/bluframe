// @flow

import styled, { type StyledComponent } from "styled-components"
import Heading from "./Heading"
import type { Theme } from "@bluframe/blublocks"

const H4: StyledComponent<{||}, Theme, HTMLHeadingElement> = styled.h4`
  ${Heading}

  font-size: 28px;
`

export default H4
