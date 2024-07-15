import styled from "styled-components"
import { Theme } from "styles/theme"

export const Wrapper = styled.span`
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.main};
`
