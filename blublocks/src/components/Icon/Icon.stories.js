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
          "IoAdd",
          "IoArrowBack",
          "IoArrowForward",
          "IoBagOutline",
          "IoBookmarkOutline",
          "IoBulbOutline",
          "IoCaretUp",
          "IoChatbubbleOutline",
          "IoCheckmark",
          "IoClose",
          "IoCloudOutline",
          "IoEaselOutline",
          "IoHeartOutline",
          "IoHelpOutline",
          "IoHomeOutline",
          "IoLaptopOutline",
          "IoLogoFacebook",
          "IoLogoTwitter",
          "IoMapOutline",
          "IoPaperPlaneOutline",
          "IoPencilOutline",
          "IoPeopleOutline",
          "IoPhonePortraitOutline",
          "IoSearch",
          "IoSettingsOutline",
          "IoShareSocialOutline",
          "IoSpeedometerOutline",
          "IoTrendingDownOutline",
          "IoTrendingUpOutline",
          "IoWarningOutline"
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
