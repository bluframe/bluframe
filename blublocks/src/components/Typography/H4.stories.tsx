import H4 from "components/Typography/H4"
import { StoryObj } from "@storybook/react"

const meta = {
  component: H4,
  title: "Typography/H4"
}

type Story = StoryObj<typeof H4>

export const Default: Story = {
  args: {
    children: "This is a heading"
  }
}

export default meta
