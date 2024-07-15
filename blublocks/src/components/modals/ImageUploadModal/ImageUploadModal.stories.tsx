import ImageUploadModal from "."
import { StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const meta = {
  component: ImageUploadModal,
  title: "Modals/Image Upload"
}

type Story = StoryObj<typeof ImageUploadModal>

// ImageUploadModal
export const Default: Story = {
  args: {
    onClose: action("onClose"),
    onSubmit: action("onSubmit")
  }
}

// ImageUploadModal Message
export const Message: Story = {
  args: {
    ...Default.args,
    message: "Upload an image"
  }
}

export const AdditionalMessage: Story = {
  args: {
    ...Default.args,
    additionalMessage:
      "Images must be in .jpg, .jpeg, .png, .gif, or .webp format"
  }
}

// ImageUploadModal Loading
export const Loading: Story = {
  args: {
    ...Default.args,
    isAddImageLoading: true
  }
}

export const ErrorMessages: Story = {
  args: {
    ...Default.args,
    errorMessage: "Error uploading image"
  }
}

export default meta
