// @flow

import styled, { type StyledComponent } from "styled-components"
import Heading from "./Heading"
import type { Theme } from "@bluframe/blublocks"

const H5: StyledComponent<{||}, Theme, HTMLHeadingElement> = styled.h5`
  ${Heading}

  font-size: 26px;
`

export default H5
