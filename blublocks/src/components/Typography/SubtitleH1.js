// @flow

import styled, { type StyledComponent } from "styled-components"
import Subtitle from "./Subtitle"
import type { Theme } from "@bluframe/blublocks"

const SubtitleH1: StyledComponent<{||}, Theme, HTMLParagraphElement> = styled.p`
  ${Subtitle}

  font-size: 22px;
`

export default SubtitleH1
