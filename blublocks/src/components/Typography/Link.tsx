import { Theme } from "styles/theme"
import styled from "styled-components"

const Link = styled.a`
  color: ${({ color, theme }: { color?: string; theme: Theme }) =>
    color ?? theme.palette.primary.main};

  &:hover,
  &:focus {
    color: ${({ color, theme }: { color?: string; theme: Theme }) =>
      color ?? theme.palette.primary.main};
  }
`

export default Link
