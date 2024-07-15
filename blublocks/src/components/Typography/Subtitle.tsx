import { css } from "styled-components"
import { Theme } from "styles/theme"

const Subtitle = css`
  color: ${(props: { theme: Theme }) => props.theme.palette.subtitle.main};
  font-family: ${(props: { theme: Theme }) => props.theme.font.family};
  font-weight: 500;
  margin: 0;
`

export default Subtitle
