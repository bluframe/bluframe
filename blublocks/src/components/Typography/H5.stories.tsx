import H5 from "components/Typography/H5"
import { StoryObj } from "@storybook/react"

const stories = {
  component: H5,
  title: "Typography/H5"
}

type Story = StoryObj<typeof H5>

export const Default: Story = {
  args: {
    children: "This is a heading"
  }
}

export default stories
