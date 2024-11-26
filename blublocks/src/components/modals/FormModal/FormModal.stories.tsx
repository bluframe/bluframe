import { FormEvent } from "react"
import FormModal from "."
import InputText from "components/inputs/InputText"
import { StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import renderStoriesWrapper from "helpers/renderStoriesWrapper"

const meta = {
  component: FormModal,
  title: "Modals/Form"
}

type Story = StoryObj<typeof FormModal>

// FormModal Default
export const Default: Story = {
  args: {
    onClose: action("onClose"),
    onSubmit: (event: FormEvent) => {
      event.preventDefault()

      action("onSubmit")(event)
    }
  },
  render: renderStoriesWrapper(
    FormModal,
    <InputText label="Name" name="name" />
  )
}

// FormModal Disabled
export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true
  }
}

// FormModal Loading
export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true
  }
}

export default meta
