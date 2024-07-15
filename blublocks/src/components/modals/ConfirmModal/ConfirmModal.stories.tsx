import ConfirmModal from "."
import { StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const meta = {
  component: ConfirmModal,
  title: "Modals/Confirm"
}

type Story = StoryObj<typeof ConfirmModal>

// ConfirmModal
export const Default: Story = {
  args: {
    message: "Are you sure?",
    onClose: action("onClose"),
    onConfirm: action("onConfirmSuccess")
  }
}

// ConfirmModal Disabled
export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true
  }
}

// ConfirmModal Loading
export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true
  }
}

export default meta
