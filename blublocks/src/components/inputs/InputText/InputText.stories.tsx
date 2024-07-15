import Icon from "components/Icon"
import InputText from "components/inputs/InputText"
import React from "react"
import { StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const meta = {
  component: InputText,
  title: "Inputs/Text Input"
}

type Story = StoryObj<typeof InputText>

const args = {
  inputId: "name-input",
  label: "Name",
  name: "name",
  onBlur: action("onBlur"),
  onChange: action("onChange")
}

export const Default: Story = {
  args
}

export const DefaultValue: Story = {
  args: {
    ...args,
    defaultValue: "Edoardo"
  }
}

export const Value: Story = {
  args: {
    ...args,
    value: "Edoardo"
  }
}

export const FullBorder: Story = {
  args: {
    ...args,
    isFullBorder: true
  }
}

export const Info: Story = {
  args: {
    ...args,
    infoText: "You can only set your name once!"
  }
}

export const InfoFullBorder: Story = {
  args: {
    ...args,
    infoText: "You can only set your name once!",
    isFullBorder: true
  }
}

export const Success: Story = {
  args: {
    ...args,
    success: true,
    successText: "Username is available!"
  }
}

export const SuccessFullBorder: Story = {
  args: {
    ...args,
    isFullBorder: true,
    success: true,
    successText: "Username is available!"
  }
}

export const ErrorAndMessage: Story = {
  args: {
    ...args,
    error: true,
    errorText: "This field is required"
  }
}

export const ErrorFullBorder: Story = {
  args: {
    ...args,
    error: true,
    errorText: "This field is required",
    isFullBorder: true
  }
}

export const Required: Story = {
  args: {
    ...args,
    required: true
  }
}

export const NumberType: Story = {
  args: {
    ...args,
    type: "number"
  }
}

export const NumberMaxMin: Story = {
  args: {
    ...args,
    max: 100,
    min: 0,
    type: "number"
  }
}

export const Disabled: Story = {
  args: {
    ...args,
    disabled: true
  }
}

export const LabelIcon: Story = {
  args: {
    ...args,
    label: (
      <>
        <Icon group="io5" name="IoPerson" />
        {"Name"}
      </>
    )
  }
}

export default meta
