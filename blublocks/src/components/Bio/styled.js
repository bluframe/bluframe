// @flow

import styled, {
  type PropsWithTheme,
  type StyledComponent
} from "styled-components"
import Paragraph from "components/Typography/Paragraph"
import type { Theme } from "@bluframe/blublocks"
import colors from "styles/colors"
import mediaQueries from "styles/mediaQueries"

type Props = {|
  +color?: string
|}

export const Section: StyledComponent<
  {||},
  Theme,
  HTMLElement
> = styled.section`
  background: ${colors.white};
  border: 1px solid ${colors.gallery};
  column-gap: 20px;
  display: grid;
  font-family: ${({ theme }: PropsWithTheme<{||}, Theme>) => theme.font.family};
  grid-template-columns: 80px 1fr;
  padding: 10px;

  ${mediaQueries.tablet} {
    padding: 25px;
  }
`

export const Image: StyledComponent<{||}, Theme, HTMLImageElement> = styled.img`
  width: 80px;
`

export const Right: StyledComponent<{||}, Theme, HTMLDivElement> = styled.div`
  display: grid;
  row-gap: 10px;
`

export const Name: StyledComponent<{||}, Theme, HTMLHeadingElement> = styled.h4`
  color: ${colors.black};
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0;
`

export const Description: StyledComponent<
  Props,
  Theme,
  typeof Paragraph
> = styled(Paragraph)`
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
`

export const Link: StyledComponent<Props, Theme, HTMLAnchorElement> = styled.a`
  color: ${({ color, theme }: PropsWithTheme<Props, Theme>) =>
    color || theme.palette.primary.main};
  font-weight: bold;

  &:hover {
    color: ${({ color, theme }: PropsWithTheme<Props, Theme>) =>
      color || theme.palette.primary.main};
  }
`
