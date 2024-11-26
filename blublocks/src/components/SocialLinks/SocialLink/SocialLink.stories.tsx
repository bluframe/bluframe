import { Meta, StoryObj } from "@storybook/react"
import SocialLink from "components/SocialLinks/SocialLink"

const meta: Meta<typeof SocialLink> = {
  component: SocialLink,
  parameters: {
    layout: "centered"
  },
  title: "Components/SocialLinks/SocialLink"
}

type Story = StoryObj<typeof SocialLink>

export const Default: Story = {
  args: {
    iconGroup: "fa6",
    iconName: "FaInstagram",
    link: "https://www.instagram.com/mightychroma",
    name: "mightychroma",
    platformName: "Instagram"
  }
}

export default meta
