import Bio from "components/Bio"
import { StoryObj } from "@storybook/react"
import mediaQueries from "styles/mediaQueries"
import styled from "styled-components"

const meta = {
  component: Bio,
  title: "Components/Bio"
}

const Wrapper = styled.div`
  width: 100%;

  ${mediaQueries.tablet} {
    width: 600px;
  }
`

type Story = StoryObj<typeof Bio>

export const Default: Story = {
  args: {
    avatar:
      "https://0.gravatar.com/avatar/c88fdd33c5a3a417782e94a0774cee15?s=96&#038;d=mm&#038;r=g",
    description:
      "Edoardo L'Astorina has 15 years of experience in software development. Edoardo has had a major role in the new [Transport for London](https://tfl.gov.uk) site and led the development of the new [Royal Opera House](https://roh.org.uk) site. Edoardo has developed sites and apps for [Intuit](https://intuit.com), [Stint](https://stint.co), [JPC](https://thinkjpc.com), [The Crocodile](//thecroc.com) and [Miura](https://miura.gi) Edoardo started [Blu Frame](https://blufra.me) to help companies develop sites that stand out, load fast and are easy for users to access Edoardo is passionate about risotto, Terrence Malick movies, Oasis songs and rowing",
    name: "Edoardo L'Astorina"
  },
  render: (args: any) => (
    <Wrapper>
      <Bio {...args} />
    </Wrapper>
  )
}

export const Color: Story = {
  args: {
    avatar:
      "https://0.gravatar.com/avatar/c88fdd33c5a3a417782e94a0774cee15?s=96&#038;d=mm&#038;r=g",
    color: "#FF7D14",
    description:
      "Edoardo L'Astorina has 15 years of experience in software development. Edoardo has had a major role in the new [Transport for London](https://tfl.gov.uk) site and led the development of the new [Royal Opera House](https://roh.org.uk) site. Edoardo has developed sites and apps for [Intuit](https://intuit.com), [Stint](https://stint.co), [JPC](https://thinkjpc.com), [The Crocodile](//thecroc.com) and [Miura](https://miura.gi) Edoardo started [Blu Frame](https://blufra.me) to help companies develop sites that stand out, load fast and are easy for users to access Edoardo is passionate about risotto, Terrence Malick movies, Oasis songs and rowing",
    name: "Edoardo L'Astorina"
  }
}

export const ImageComponent: Story = {
  args: {
    avatar: (
      <img
        alt="Edoardo L'Astorina"
        src="https://0.gravatar.com/avatar/c88fdd33c5a3a417782e94a0774cee15?s=96&#038;d=mm&#038;r=g"
      />
    ),
    description:
      "Edoardo L'Astorina has 15 years of experience in software development. Edoardo has had a major role in the new [Transport for London](https://tfl.gov.uk) site and led the development of the new [Royal Opera House](https://roh.org.uk) site. Edoardo has developed sites and apps for [Intuit](https://intuit.com), [Stint](https://stint.co), [JPC](https://thinkjpc.com), [The Crocodile](//thecroc.com) and [Miura](https://miura.gi) Edoardo started [Blu Frame](https://blufra.me) to help companies develop sites that stand out, load fast and are easy for users to access Edoardo is passionate about risotto, Terrence Malick movies, Oasis songs and rowing",
    name: "Edoardo L'Astorina"
  }
}

export default meta
