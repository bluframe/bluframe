// @flow

import styled, { type StyledComponent } from "styled-components"
import mediaQueries from "styles/mediaQueries"

const Container: StyledComponent<{}, mixed, HTMLDivElement> = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  padding-right: 0;
  padding-left: 0;

  &:after {
    clear: both;
    content: " ";
    display: block;
  }

  ${mediaQueries.desktop} {
    padding-right: 15px;
    padding-left: 15px;
  }

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }

  @media (max-width: 767px) {
    width: auto;
  }

  @media (max-width: 979px) {
    width: auto;
  }

  @media only screen and (max-width: 1110px) and (min-width: 980px) {
    width: 96%;
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`

export default Container
