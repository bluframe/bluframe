// @flow

import Icon, { type Props } from "components/Icon"
import React from "react"

const stories = {
  component: Icon,
  title: "Components/Icon"
}

const Template = (args: Props) => <Icon {...args} />

export const Ion: any = Template.bind({})
Ion.args = {
  group: "ion",
  name: "speedometerOutline",
  size: "50px"
}

export default stories
