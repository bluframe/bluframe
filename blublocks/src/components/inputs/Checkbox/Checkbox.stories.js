// @flow

import Checkbox, { type Props } from "components/inputs/Checkbox"
import React from "react"
import type { Story } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const stories = {
  component: Checkbox,
  title: "Inputs/Checkbox"
}

const Template = (args: Props) => <Checkbox {...args} />

const args = {
  inputId: "apple-checkbox",
  isChecked: true,
  label: "Apple",
  name: "fruit",
  onChange: action("onChange"),
  value: "apple"
}

export const Checked: Story<Props> = Template.bind({})
Checked.args = args

export const Unchecked: Story<Props> = Template.bind({})
Unchecked.args = {
  ...args,
  isChecked: false
}

export default stories
