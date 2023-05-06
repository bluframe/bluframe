// @flow

import Select, { type Props } from "components/inputs/Select"
import React from "react"

const stories = {
  argTypes: {
    onSelect: { action: "onSelect" }
  },
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
  options,
  selected: null
}

export const Default: any = Template.bind({})
Default.args = args

export const Placeholder: any = Template.bind({})
Placeholder.args = {
  ...args,
  placeholder: "Select a fruit"
}

export const Selected: any = Template.bind({})
Selected.args = {
  ...args,
  placeholder: "Select a fruit",
  selected: "orange"
}

export default stories
