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
  onChange: action("onChange"),
  value: ""
}

export const Default: Story<Props> = Template.bind({})
Default.args = args

export default stories
