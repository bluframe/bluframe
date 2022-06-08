// @flow

import Button, { type ComponentProps } from "components/buttons/Button"
import FAIcon from "components/FAIcon"
import React from "react"

const stories = {
  argTypes: {
    bold: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    onClick: { action: "button click" },
    outlined: { control: { type: "boolean" } },
    padded: { control: { type: "boolean" } },
    secondary: { control: { type: "boolean" } }
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
  bold: true,
  label: "Button"
}

export const Disabled: any = Template.bind({})
Disabled.args = {
  disabled: true,
  label: "Button"
}

export const IconEnd: any = Template.bind({})
IconEnd.args = {
  iconEnd: <FAIcon name="angle-double-up" />,
  label: "Button"
}

export const IconStart: any = Template.bind({})
IconStart.args = {
  iconStart: <FAIcon name="angle-double-up" />,
  label: "Button"
}

export const NoHoverHighlight: any = Template.bind({})
NoHoverHighlight.args = {
  label: "Button",
  noHoverHighlight: true
}

export const Outlined: any = Template.bind({})
Outlined.args = {
  label: "Button",
  outlined: true
}

export const Padded: any = Template.bind({})
Padded.args = {
  label: "Button",
  padded: true
}

export const Secondary: any = Template.bind({})
Secondary.args = {
  label: "Button",
  secondary: true
}

export default stories
