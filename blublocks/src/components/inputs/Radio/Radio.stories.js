// @flow

import Radio, { type Props } from "components/inputs/Radio"
import React from "react"
import type { Story } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const stories = {
  component: Radio,
  title: "Inputs/Radio"
}

const Template = (args: Props) => <Radio {...args} />

const args = {
  inputId: "apple-radio",
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
