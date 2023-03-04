// @flow

import H2 from "components/Typography/H2"
import React from "react"
import type { Story } from "@storybook/react"

const stories = {
  component: H2,
  title: "Typography/H2"
}

const Template = () => <H2>{"This is a heading"}</H2>

export const Default: Story<{||}> = Template.bind({})

export default stories
