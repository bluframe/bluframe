import { StoryObj } from "@storybook/react"
import TextArea from "components/inputs/TextArea"
import { action } from "@storybook/addon-actions"

export default {
  component: TextArea,
  title: "Inputs/TextArea"
}

type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {
    inputId: "story-textarea",
    label: "Story Label",
    name: "storyTextArea",
    onChange: action("onChange")
  }
}

export const WithValue: Story = {
  args: {
    ...Default.args,
    defaultValue: "This is a default value"
  }
}

export const RequiredTextArea: Story = {
  args: {
    ...Default.args,
    required: true
  }
}

export const WithPlaceholder: Story = {
  args: {
    ...Default.args,
    placeholder: "Placeholder text here..."
  }
}

export const Expanded: Story = {
  args: {
    ...Default.args,
    isExpanded: true
  }
}

export const Info: Story = {
  args: {
    ...Default.args,
    infoText: "You can only set your name once!"
  }
}

export const Success: Story = {
  args: {
    ...Default.args,
    success: true,
    successText: "Username is available!"
  }
}

export const Error: Story = {
  args: {
    ...Default.args,
    error: true,
    errorText: "This field is required"
  }
}

export const ColsAndRows: Story = {
  args: {
    ...Default.args,
    cols: 20,
    rows: 5
  }
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true
  }
}
