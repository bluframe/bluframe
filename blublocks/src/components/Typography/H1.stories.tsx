import H1 from "components/Typography/H6"
import { StoryObj } from "@storybook/react"

const meta = {
  component: H1,
  title: "Typography/H1"
}

type Story = StoryObj<typeof H1>

export const Default: Story = {
  args: {
    children: "This is a heading"
  }
}

export default meta
