// @flow

import type { Props } from "."
import React from "react"
import type { Story } from "@storybook/react"
import TextArea from "components/inputs/TextArea"
import { action } from "@storybook/addon-actions"

export default {
  component: TextArea,
  title: "Inputs/TextArea"
}

const Template: Story<Props> = (args) => <TextArea {...args} />

export const Default: Story<Props> = Template.bind({})
Default.args = {
  inputId: "story-textarea",
  label: "Story Label",
  name: "storyTextArea",
  onChange: action("onChange"),
  placeholder: "Type something..."
}

export const WithValue: Story<Props> = Template.bind({})
WithValue.args = {
  ...Default.args,
  defaultValue: "This is a default value"
}

export const RequiredTextArea: Story<Props> = Template.bind({})
RequiredTextArea.args = {
  ...Default.args,
  required: true
}

export const WithPlaceholder: Story<Props> = Template.bind({})
WithPlaceholder.args = {
  ...Default.args,
  placeholder: "Placeholder text here..."
}

export const ColsAndRows: Story<Props> = Template.bind({})
ColsAndRows.args = {
  ...Default.args,
  cols: 20,
  rows: 5
}
