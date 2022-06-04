// @flow

import Hamburger, { type ComponentProps } from "components/Hamburger"
import React from "react"

const stories = {
  argTypes: {
    onClick: { action: "button click" }
  },
  component: Hamburger,
  title: "Components/Hamburger"
}

const Template = (args: ComponentProps) => <Hamburger {...args} />

export const Default: any = Template.bind({})

export default stories
