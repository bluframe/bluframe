import styled from "styled-components"
import Paragraph from "components/Typography/Paragraph"
import { Theme } from "styles/theme"
import colors from "styles/colors"
import mediaQueries from "styles/mediaQueries"

export const Section = styled.section`
  background: ${colors.white};
  border: 1px solid ${colors.gallery};
  display: grid;
  font-family: ${({ theme }: { theme: Theme }) => theme.font.family};
  padding: 10px;
  row-gap: 20px;

  ${mediaQueries.tablet} {
    padding: 25px;
  }
`

export const Image = styled.img`
  width: 80px;
`

export const Top = styled.div`
  align-items: center;
  column-gap: 20px;
  display: grid;
  grid-template-columns: 80px 1fr;
`

export const Name = styled.h4`
  color: ${colors.black};
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0;
`

export const Description = styled(Paragraph)`
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
`

export const Link = styled.a`
  color: ${({ color, theme }: { color?: string; theme: Theme }) =>
    color || theme.palette.primary.main};
  font-weight: bold;

  &:hover {
    color: ${({ color, theme }: { color?: string; theme: Theme }) =>
    color || theme.palette.primary.main};
  }
`
