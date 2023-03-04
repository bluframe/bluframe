// @flow

import H4 from "components/Typography/H4"
import React from "react"
import type { Story } from "@storybook/react"

const stories = {
  component: H4,
  title: "Typography/H4"
}

const Template = () => <H4>{"This is a heading"}</H4>

export const Default: Story<{||}> = Template.bind({})

export default stories
