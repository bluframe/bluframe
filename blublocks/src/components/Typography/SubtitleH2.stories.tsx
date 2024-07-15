import { StoryObj } from "@storybook/react"
import SubtitleH2 from "components/Typography/SubtitleH2"

const stories = {
  component: SubtitleH2,
  title: "Typography/SubtitleH2"
}

type Story = StoryObj<typeof SubtitleH2>

export const Default: Story = {
  args: {
    children: "This is a subtitle"
  }
}

export default stories
