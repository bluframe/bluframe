import H3 from "components/Typography/H6"
import { StoryObj } from "@storybook/react"

const meta = {
  component: H3,
  title: "Typography/H3"
}

type Story = StoryObj<typeof H3>

export const Default: Story = {
  args: {
    children: "This is a heading"
  }
}

export default meta
