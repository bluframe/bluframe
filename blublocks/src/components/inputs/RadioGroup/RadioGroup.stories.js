// @flow

import RadioGroup, { type Props } from "components/inputs/RadioGroup"
import React from "react"
import type { Story } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const stories = {
  component: RadioGroup,
  title: "Inputs/RadioGroup"
}

const Template = (args: Props) => <RadioGroup {...args} />

const args = {
  label: "Select a fruit",
  name: "fruit",
  onChange: action("onChange"),
  options: [
    {
      label: "Apple",
      value: "apple"
    },
    {
      label: "Banana",
      value: "banana"
    }
  ],
  selected: null
}

export const Default: Story<Props> = Template.bind({})
Default.args = args

export const Selected: Story<Props> = Template.bind({})
Selected.args = {
  ...args,
  selected: "banana"
}

export default stories
