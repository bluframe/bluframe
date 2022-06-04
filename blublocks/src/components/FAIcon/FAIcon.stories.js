// @flow

import FAIcon, { type ComponentProps } from "components/FAIcon"
import React from "react"

const stories = {
  component: FAIcon,
  title: "Components/FAIcon"
}

const Template = (args: ComponentProps) => <FAIcon {...args} />

export const Default: any = Template.bind({})
Default.args = {
  name: "angle-double-up"
}

export const Big: any = Template.bind({})
Big.args = {
  fontSize: "40px",
  name: "angle-double-up"
}

export default stories
