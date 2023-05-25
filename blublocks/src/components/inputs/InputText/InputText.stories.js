// @flow

import InputText, { type Props } from "components/inputs/InputText"
import React from "react"
import type { Story } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const stories = {
  component: InputText,
  title: "Inputs/Text Input"
}

const Template = (args: Props) => <InputText {...args} />

const args = {
  inputId: "name-input",
  label: "Name",
  name: "name",
  onBlur: action("onBlur"),
  onChange: action("onChange")
}

export const Default: Story<Props> = Template.bind({})
Default.args = args

export const DefaultValue: Story<Props> = Template.bind({})
DefaultValue.args = {
  ...args,
  defaultValue: "Edoardo"
}

export const Value: Story<Props> = Template.bind({})
Value.args = {
  ...args,
  value: "Edoardo"
}

export const FullBorder: Story<Props> = Template.bind({})
FullBorder.args = {
  ...args,
  isFullBorder: true
}

export const Error: Story<Props> = Template.bind({})
Error.args = {
  ...args,
  error: true,
  helperText: "This field is required"
}

export const ErrorFullBorder: Story<Props> = Template.bind({})
ErrorFullBorder.args = {
  ...args,
  error: true,
  helperText: "This field is required",
  isFullBorder: true
}

export const Required: Story<Props> = Template.bind({})
Required.args = {
  ...args,
  required: true
}

export default stories
