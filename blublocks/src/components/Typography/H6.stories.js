// @flow

import H6 from "components/Typography/H6"
import React from "react"
import type { Story } from "@storybook/react"

const stories = {
  component: H6,
  title: "Typography/H6"
}

const Template = () => <H6>{"This is a heading"}</H6>

export const Default: Story<{||}> = Template.bind({})

export default stories
