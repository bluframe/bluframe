/* eslint-disable no-ternary */

import BaseLink from "components/Typography/Link"
import Paragraph from "components/Typography/Paragraph"
import { Theme } from "styles/theme"
import colors from "styles/colors"
import mediaQueries from "styles/mediaQueries"
import styled from "styled-components"

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

export const Top = styled.div<{
  $isAvatarCircle?: boolean
  $isShowName?: boolean
}>`
  align-items: center;
  column-gap: 20px;
  display: grid;
  grid-template-columns: 80px 1fr;

  ${({ $isShowName }) =>
    $isShowName
      ? ""
      : `
grid-template-columns: auto; 
align-items: start;
justify-items: center;
`}

  & img {
    border-radius: ${({ $isAvatarCircle }) => ($isAvatarCircle ? "50%" : "0")};
    width: 80px;
  }

  ${mediaQueries.tablet} {
    column-gap: 40px;
  }
`

export const NameAndSocialLinks = styled.div`
  display: grid;
  row-gap: 10px;
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

export const Link = styled(BaseLink)`
  font-weight: bold;
`
