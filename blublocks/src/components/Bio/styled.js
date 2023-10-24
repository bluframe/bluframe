// @flow

import styled, {
  type PropsWithTheme,
  type StyledComponent
} from "styled-components"
import Paragraph from "components/Typography/Paragraph"
import type { Theme } from "@bluframe/blublocks"
import colors from "styles/colors"
import mediaQueries from "styles/mediaQueries"

type LinkProps = {|
  +color?: string
|}

export const Section: StyledComponent<
  {||},
  Theme,
  HTMLElement
> = styled.section`
  background: ${colors.white};
  border: 1px solid ${colors.gallery};
  display: grid;
  font-family: ${({ theme }: PropsWithTheme<{||}, Theme>) => theme.font.family};
  padding: 10px;
  row-gap: 20px;

  ${mediaQueries.tablet} {
    padding: 25px;
  }
`

export const Image: StyledComponent<{||}, Theme, HTMLImageElement> = styled.img`
  width: 80px;
`

export const Top: StyledComponent<{||}, Theme, HTMLDivElement> = styled.div`
  align-items: center;
  column-gap: 20px;
  display: grid;
  grid-template-columns: 80px 1fr;
`

export const Name: StyledComponent<{||}, Theme, HTMLHeadingElement> = styled.h4`
  color: ${colors.black};
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0;
`

export const Description: StyledComponent<
  {||},
  Theme,
  typeof Paragraph
> = styled(Paragraph)`
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
`

export const Link: StyledComponent<
  LinkProps,
  Theme,
  HTMLAnchorElement
> = styled.a`
  color: ${({ color, theme }: PropsWithTheme<LinkProps, Theme>) =>
    color || theme.palette.primary.main};
  font-weight: bold;

  &:hover {
    color: ${({ color, theme }: PropsWithTheme<LinkProps, Theme>) =>
      color || theme.palette.primary.main};
  }
`
