import React from "react"
import mediaQueries from "styles/mediaQueries"
import styled from "styled-components"

const Wrapper = styled.div`
  ${mediaQueries.tablet} {
    width: 790px;
  }

  ${mediaQueries.desktop} {
    width: 880px;
  }
`

const renderStoriesWrapper =
  (Component: React.JSXElementConstructor<any>, children?: React.ReactNode) =>
  // eslint-disable-next-line react/display-name, react/function-component-definition
  (args: any) =>
    (
      <Wrapper>
        <Component {...args}>{children}</Component>
      </Wrapper>
    )

export default renderStoriesWrapper
