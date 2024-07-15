import { Theme } from "styles/theme"
import { css } from "styled-components"

const Heading = css`
  color: ${(props: { theme: Theme }) => props.theme.palette.text.main};
  font-family: ${(props: { theme: Theme }) => props.theme.font.family};
  font-weight: 700;
  margin: 0;
`

export default Heading
