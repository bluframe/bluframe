// @flow

import React from "react"
import type { Story } from "@storybook/react"
import SubtitleH2 from "components/Typography/SubtitleH2"

const stories = {
  component: SubtitleH2,
  title: "Typography/SubtitleH2"
}

const Template = () => <SubtitleH2>{"This is a subtitle"}</SubtitleH2>

export const Default: Story<{||}> = Template.bind({})

export default stories
