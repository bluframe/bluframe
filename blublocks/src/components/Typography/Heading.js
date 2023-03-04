// @flow

import { type CSSRules, css } from "styled-components"

const Heading: CSSRules = css`
  color: ${(props) => props.theme.palette.text.main};
  font-family: ${(props) => props.theme.font.family};
  font-weight: 700;
  margin: 0;
`

export default Heading
