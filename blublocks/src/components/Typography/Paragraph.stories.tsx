import Paragraph from "components/Typography/Paragraph"
import { StoryObj } from "@storybook/react"

const meta = {
  component: Paragraph,
  title: "Typography/Paragraph"
}

type Story = StoryObj<typeof Paragraph>

export const Default: Story = {
  args: {
    children: "This is a paragraph"
  }
}

export default meta
