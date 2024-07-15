import Modal from "."
import { StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const meta = {
  component: Modal,
  title: "Modals/Modal"
}

type Story = StoryObj<typeof Modal>

// Modal with button to close
export const Open: Story = {
  args: {
    children: "Modal Content",
    isOpen: true,
    onClose: action("onClose")
  }
}

// Modal not open by default
export const Closed: Story = {
  args: {
    children: "Modal Content",
    isOpen: false,
    onClose: action("onClose")
  }
}

// Modal that lets user click outside of it to close
export const ClickOutsideToClose: Story = {
  args: {
    children: "Modal Content",
    isOpen: true,
    onClose: action("onClose")
  }
}

export default meta
