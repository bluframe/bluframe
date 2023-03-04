// @flow

import H5 from "components/Typography/H5"
import React from "react"
import type { Story } from "@storybook/react"

const stories = {
  component: H5,
  title: "Typography/H5"
}

const Template = () => <H5>{"This is a heading"}</H5>

export const Default: Story<{||}> = Template.bind({})

export default stories
