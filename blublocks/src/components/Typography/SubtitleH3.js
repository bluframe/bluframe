// @flow

import styled, { type StyledComponent } from "styled-components"
import Subtitle from "./Subtitle"
import type { Theme } from "@bluframe/blublocks"

const SubtitleH3: StyledComponent<{||}, Theme, HTMLParagraphElement> = styled.p`
  ${Subtitle}

  font-size: 18px;
`

export default SubtitleH3
