// @flow

import Paragraph from "components/Typography/Paragraph"
import React from "react"
import type { Story } from "@storybook/react"

const stories = {
  component: Paragraph,
  title: "Typography/Paragraph"
}

const Template = () => <Paragraph>{"This is a paragraph"}</Paragraph>

export const Default: Story<{||}> = Template.bind({})

export default stories
