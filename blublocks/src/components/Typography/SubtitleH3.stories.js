// @flow

import React from "react"
import type { Story } from "@storybook/react"
import SubtitleH3 from "components/Typography/SubtitleH3"

const stories = {
  component: SubtitleH3,
  title: "Typography/SubtitleH3"
}

const Template = () => <SubtitleH3>{"This is a subtitle"}</SubtitleH3>

export const Default: Story<{||}> = Template.bind({})

export default stories
