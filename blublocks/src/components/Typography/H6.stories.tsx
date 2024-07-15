import H6 from "components/Typography/H6"
import { StoryObj } from "@storybook/react"

const meta = {
  component: H6,
  title: "Typography/H6"
}

type Story = StoryObj<typeof H6>

export const Default: Story = {
  args: {
    children: "This is a heading"
  }
}

export default meta
