import H2 from "components/Typography/H6"
import { StoryObj } from "@storybook/react"

const meta = {
  component: H2,
  title: "Typography/H2"
}

type Story = StoryObj<typeof H2>

export const Default: Story = {
  args: {
    children: "This is a heading"
  }
}

export default meta
