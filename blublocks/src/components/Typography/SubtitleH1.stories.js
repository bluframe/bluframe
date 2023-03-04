// @flow

import React from "react"
import type { Story } from "@storybook/react"
import SubtitleH1 from "components/Typography/SubtitleH1"

const stories = {
  component: SubtitleH1,
  title: "Typography/SubtitleH1"
}

const Template = () => <SubtitleH1>{"This is a subtitle"}</SubtitleH1>

export const Default: Story<{||}> = Template.bind({})

export default stories
