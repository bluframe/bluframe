// @flow

import H3 from "components/Typography/H3"
import React from "react"
import type { Story } from "@storybook/react"

const stories = {
  component: H3,
  title: "Typography/H3"
}

const Template = () => <H3>{"This is a heading"}</H3>

export const Default: Story<{||}> = Template.bind({})

export default stories
