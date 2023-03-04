// @flow

import styled, { type StyledComponent } from "styled-components"
import Subtitle from "./Subtitle"
import type { Theme } from "@bluframe/blublocks"

const SubtitleH2: StyledComponent<{||}, Theme, HTMLParagraphElement> = styled.p`
  ${Subtitle}

  font-size: 20px;
`

export default SubtitleH2
