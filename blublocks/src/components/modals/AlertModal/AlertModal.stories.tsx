import AlertModal from "."
import { StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const stories = {
  component: AlertModal,
  title: "Modals/Alert"
}

type Story = StoryObj<typeof AlertModal>

// AlertModal
export const Default: Story = {
  args: {
    message: "We did the update",
    onOkay: action("onOkay")
  }
}

export default stories
