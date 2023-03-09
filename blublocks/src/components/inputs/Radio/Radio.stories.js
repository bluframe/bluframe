// @flow

import Radio, { type Props } from "components/inputs/Radio"
import React from "react"
import type { Story } from "@storybook/react"

const stories = {
  component: Radio,
  title: "Inputs/Radio"
}

const Template = (args: Props) => <Radio {...args} />

const args = {
  inputId: "apple-radio",
  isChecked: true,
  label: "Apple",
  name: "fruit"
}

export const Checked: Story<Props> = Template.bind({})
Checked.args = args

export const Unchecked: any = Template.bind({})
Unchecked.args = {
  ...args,
  isChecked: false
}

export default stories
