import styled from "styled-components"
import { Theme } from "styles/theme"

const Paragraph = styled.p`
  color: ${(props: { theme: Theme }) => props.theme.palette.text.main};
  font-family: ${(props: { theme: Theme }) => props.theme.font.family};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
`

export default Paragraph
