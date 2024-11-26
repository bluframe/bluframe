import { Meta, StoryObj } from "@storybook/react"
import SocialLinks from "components/SocialLinks"
import renderStoriesWrapper from "helpers/renderStoriesWrapper"

const meta: Meta<typeof SocialLinks> = {
  component: SocialLinks,
  title: "Components/SocialLinks"
}

type Story = StoryObj<typeof SocialLinks>

export const Default: Story = {
  args: {
    facebook: "mightychroma",
    instagram: "mightychroma",
    reddit: "mightychroma",
    twitterX: "mightychroma",
    website: "https://mightychroma.me",
    youtube: "mightychroma"
  },
  render: renderStoriesWrapper(SocialLinks)
}

export default meta
