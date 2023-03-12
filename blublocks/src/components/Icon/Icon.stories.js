// @flow

import Icon, { type Props } from "components/Icon"
import React from "react"
import type { Story } from "@storybook/react"

const stories = {
  argTypes: {
    name: {
      control: {
        options: [
          "IoAccessibilityOutline",
          "IoArrowBack",
          "IoArrowForward",
          "IoBulbOutline",
          "IoCaretUp",
          "IoChatbubbleOutline",
          "IoCloudOutline",
          "IoHeartOutline",
          "IoLaptopOutline",
          "IoLogoFacebook",
          "IoLogoTwitter",
          "IoMapOutline",
          "IoPaperPlaneOutline",
          "IoSpeedometerOutline"
        ],
        type: "select"
      }
    }
  },
  component: Icon,
  title: "Components/Icon"
}

const Template = (args: Props) => <Icon {...args} />

export const Ion: Story<Props> = Template.bind({})
Ion.args = {
  group: "io5",
  name: "IoSpeedometerOutline",
  size: "50px"
}

export default stories
