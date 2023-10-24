// @flow

import Bio, { type Props } from "components/Bio"
import styled, { type StyledComponent } from "styled-components"
import React from "react"
import type { Story } from "@storybook/react"
import type { Theme } from "@bluframe/blublocks"
import mediaQueries from "styles/mediaQueries"

const stories = {
  component: Bio,
  title: "Components/Bio"
}

const Wrapper: StyledComponent<{||}, Theme, HTMLDivElement> = styled.div`
  width: 100%;

  ${mediaQueries.tablet} {
    width: 600px;
  }
`

const Template = (args: Props) => (
  <Wrapper>
    <Bio {...args} />
  </Wrapper>
)

export const Default: Story<Props> = Template.bind({})
Default.args = {
  avatar:
    "https://0.gravatar.com/avatar/c88fdd33c5a3a417782e94a0774cee15?s=96&#038;d=mm&#038;r=g",
  description:
    "Edoardo L'Astorina has 15 years of experience in software development. Edoardo has had a major role in the new [Transport for London](https://tfl.gov.uk) site and led the development of the new [Royal Opera House](https://roh.org.uk) site. Edoardo has developed sites and apps for [Intuit](https://intuit.com), [Stint](https://stint.co), [JPC](https://thinkjpc.com), [The Crocodile](//thecroc.com) and [Miura](https://miura.gi) Edoardo started [Blu Frame](https://blufra.me) to help companies develop sites that stand out, load fast and are easy for users to access Edoardo is passionate about risotto, Terrence Malick movies, Oasis songs and rowing",
  name: "Edoardo L'Astorina"
}

export const Color: Story<Props> = Template.bind({})
Color.args = {
  avatar:
    "https://0.gravatar.com/avatar/c88fdd33c5a3a417782e94a0774cee15?s=96&#038;d=mm&#038;r=g",
  color: "#FF7D14",
  description:
    "Edoardo L'Astorina has 15 years of experience in software development. Edoardo has had a major role in the new [Transport for London](https://tfl.gov.uk) site and led the development of the new [Royal Opera House](https://roh.org.uk) site. Edoardo has developed sites and apps for [Intuit](https://intuit.com), [Stint](https://stint.co), [JPC](https://thinkjpc.com), [The Crocodile](//thecroc.com) and [Miura](https://miura.gi) Edoardo started [Blu Frame](https://blufra.me) to help companies develop sites that stand out, load fast and are easy for users to access Edoardo is passionate about risotto, Terrence Malick movies, Oasis songs and rowing",
  name: "Edoardo L'Astorina"
}

export default stories
