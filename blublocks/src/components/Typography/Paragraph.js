// @flow

import styled, { type StyledComponent } from "styled-components"
import type { Theme } from "@bluframe/blublocks"

const Paragraph: StyledComponent<{||}, Theme, HTMLParagraphElement> = styled.p`
  color: ${(props) => props.theme.palette.text.main};
  font-family: ${(props) => props.theme.font.family};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
`

export default Paragraph
