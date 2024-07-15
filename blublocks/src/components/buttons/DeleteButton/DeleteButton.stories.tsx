import DeleteButton from "components/buttons/DeleteButton"
import { StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const meta = {
  component: DeleteButton,
  title: "Buttons/DeleteButton"
}

type Story = StoryObj<typeof DeleteButton>

export const Default: Story = {
  args: {
    label: "DeleteButton",
    onClick: action("onClick")
  }
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    label: "DeleteButton",
    onClick: action("onClick")
  }
}

export const Small: Story = {
  args: {
    label: "DeleteButton",
    onClick: action("onClick"),
    size: "24px"
  }
}

export const Color: Story = {
  args: {
    color: "red",
    label: "DeleteButton",
    onClick: action("onClick"),
    size: "24px"
  }
}

export default meta
