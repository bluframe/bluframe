// @flow

import { type CSSRules, css } from "styled-components"

const Subtitle: CSSRules = css`
  color: ${(props) => props.theme.palette.subtitle.main};
  font-family: ${(props) => props.theme.font.family};
  font-weight: 500;
  margin: 0;
`

export default Subtitle
