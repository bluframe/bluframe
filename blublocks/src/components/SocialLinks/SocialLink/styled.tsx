import { Theme } from "styles/theme"
import mediaQueries from "styles/mediaQueries"
import styled from "styled-components"

export const Wrapper = styled.div`
  align-items: center;
  column-gap: 5px;
  display: grid;
  grid-template-columns: auto 1fr;

  & svg {
    color: ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
  }

  & a {
    overflow-wrap: anywhere;
  }

  ${mediaQueries.tablet} {
    & a {
      overflow-wrap: break-word;
    }
  }
`
