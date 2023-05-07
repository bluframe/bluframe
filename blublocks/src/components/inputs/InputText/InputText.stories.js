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

export default stories
