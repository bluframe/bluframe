import { Meta, StoryObj } from "@storybook/react"
import Bio from "components/Bio"
import { Description } from "./styled"
import mediaQueries from "styles/mediaQueries"
import styled from "styled-components"

const meta: Meta<typeof Bio> = {
  component: Bio,
  title: "Components/Bio"
}

const Wrapper = styled.div`
  width: 100%;

  ${mediaQueries.tablet} {
    width: 600px;
  }
`

const OverrideDescription = styled(Description)`
  margin-bottom: 10px;
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
  ...Default,
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
  ...Default,
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

export const AvatarCircle: Story = {
  ...Default,
  args: {
    ...Default.args,
    isAvatarCircle: true
  }
}

export const ShowNameFalse: Story = {
  ...AvatarCircle,
  args: {
    ...AvatarCircle.args,
    isShowName: false
  }
}

export const OverrideComponents: Story = {
  ...Default,
  args: {
    ...Default.args,
    components: {
      // eslint-disable-next-line id-length
      p: (componentProps) => <OverrideDescription {...componentProps} />
    },
    description:
      "Edoardo L'Astorina has 15 years of experience in software development\n\n Edoardo has had a major role in the new [Transport for London](https://tfl.gov.uk) site and led the development of the new [Royal Opera House](https://roh.org.uk) site. Edoardo has developed sites and apps for [Intuit](https://intuit.com), [Stint](https://stint.co), [JPC](https://thinkjpc.com), [The Crocodile](//thecroc.com) and [Miura](https://miura.gi)\n\n Edoardo started [Blu Frame](https://blufra.me) to help companies develop sites that stand out, load fast and are easy for users to access Edoardo is passionate about risotto, Terrence Malick movies, Oasis songs and rowing"
  }
}

export const Url: Story = {
  ...AvatarCircle,
  args: {
    ...AvatarCircle.args,
    url: "https://blufra.me"
  }
}

export const SocialLinks: Story = {
  ...AvatarCircle,
  args: {
    ...AvatarCircle.args,
    isShowName: false,
    socialLinks: {
      facebook: "mightychroma",
      instagram: "mightychroma",
      reddit: "edoardomightychroma",
      twitterX: "mightychroma",
      website: "https://mightychroma.me",
      youtube: "@mightychroma"
    }
  }
}

export default meta
