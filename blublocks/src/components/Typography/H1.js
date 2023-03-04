// @flow

import styled, { type StyledComponent } from "styled-components"
import Heading from "./Heading"
import type { Theme } from "@bluframe/blublocks"

const H1: StyledComponent<{||}, Theme, HTMLHeadingElement> = styled.h1`
  ${Heading}

  font-size: 34px;
`

export default H1
