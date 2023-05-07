// @flow

import Select, { type Props } from "components/inputs/Select"
import React from "react"
import type { Story } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const stories = {
  component: Select,
  title: "Inputs/Select"
}

const Template = (args: Props) => <Select {...args} />

const options = [
  {
    label: "Apple",
    value: "apple"
  },
  {
    label: "Orange",
    value: "orange"
  },
  {
    label: "Banana",
    value: "banana"
  },
  {
    label: "Lemon",
    value: "lemon"
  },
  {
    label: "Pear",
    value: "pear"
  },
  {
    label: "Kiwi",
    value: "kiwi"
  },
  {
    label: "Mango",
    value: "mango"
  }
]

const args = {
  label: "Fruit",
  name: "fruit",
  onBlur: action("onBlur"),
  onChange: action("onChange"),
  options
}

export const Default: Story<Props> = Template.bind({})
Default.args = args

export const Placeholder: Story<Props> = Template.bind({})
Placeholder.args = {
  ...args,
  placeholder: "Select a fruit"
}

export const DefaultValue: Story<Props> = Template.bind({})
DefaultValue.args = {
  ...args,
  defaultValue: "orange",
  placeholder: "Select a fruit"
}

export const Value: Story<Props> = Template.bind({})
Value.args = {
  ...args,
  placeholder: "Select a fruit",
  value: "orange"
}

export default stories
