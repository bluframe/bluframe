import EditButton from "components/buttons/EditButton"
import { StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const meta = {
  component: EditButton,
  title: "Buttons/EditButton"
}

type Story = StoryObj<typeof EditButton>

export const Default: Story = {
  args: {
    label: "EditButton",
    onClick: action("onClick")
  }
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    label: "EditButton",
    onClick: action("onClick")
  }
}

export const Small: Story = {
  args: {
    label: "EditButton",
    onClick: action("onClick"),
    size: "16px"
  }
}

export default meta
