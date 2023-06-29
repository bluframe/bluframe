// @flow

import Badge, { type Props } from "components/Badge"
import type { BadgeProps } from "@bluframe/blublocks"
import React from "react"
import type { Story } from "@storybook/react"

const stories = {
  component: Badge,
  title: "Components/Badge"
}

const Template = (args: BadgeProps) => <Badge {...args} />

export const Default: Story<Props> = Template.bind({})
Default.args = {
  label: "Apples"
}

export const Secondary: Story<Props> = Template.bind({})
Secondary.args = {
  color: "secondary",
  label: "Apples"
}

export default stories
