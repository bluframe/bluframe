import Badge from "components/Badge"
import { StoryObj } from "@storybook/react"

const meta = {
  component: Badge,
  title: "Components/Badge"
}

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    label: "Apples"
  }
}

export const Secondary: Story = {
  args: {
    color: "secondary",
    label: "Apples"
  }
}

export default meta
