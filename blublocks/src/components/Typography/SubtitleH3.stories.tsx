import { StoryObj } from "@storybook/react"
import SubtitleH3 from "components/Typography/SubtitleH3"

const meta = {
  component: SubtitleH3,
  title: "Typography/SubtitleH3"
}

type Story = StoryObj<typeof SubtitleH3>

export const Default: Story = {
  args: {
    children: "This is a subtitle"
  }
}

export default meta
