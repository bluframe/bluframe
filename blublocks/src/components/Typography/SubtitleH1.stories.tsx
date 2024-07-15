import { StoryObj } from "@storybook/react"
import SubtitleH1 from "components/Typography/SubtitleH1"

const meta = {
  component: SubtitleH1,
  title: "Typography/SubtitleH1"
}

type Story = StoryObj<typeof SubtitleH1>

export const Default: Story = {
  args: {
    children: "This is a subtitle"
  }
}

export default meta
