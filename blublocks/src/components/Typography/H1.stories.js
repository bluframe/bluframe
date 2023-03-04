// @flow

import H1 from "components/Typography/H1"
import React from "react"
import type { Story } from "@storybook/react"

const stories = {
  component: H1,
  title: "Typography/H1"
}

const Template = () => <H1>{"This is a heading"}</H1>

export const Default: Story<{||}> = Template.bind({})

export default stories
