// @flow

import Button, { type ComponentProps } from "components/buttons/Button"
import React from "react"

const stories = {
  argTypes: {
    isBold: { control: { type: "boolean" } },
    isHome: { control: { type: "boolean" } },
    isPadded: { control: { type: "boolean" } },
    onClick: { action: "button click" }
  },
  component: Button,
  title: "Buttons/Button"
}

const Template = (args: ComponentProps) => <Button {...args} />

export const Default: any = Template.bind({})
Default.args = {
  label: "Button"
}

export const Bold: any = Template.bind({})
Bold.args = {
  isBold: true,
  label: "Button"
}

export const Padded: any = Template.bind({})
Padded.args = {
  isPadded: true,
  label: "Button"
}

export default stories
