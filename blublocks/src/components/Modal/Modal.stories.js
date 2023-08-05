// @flow

import Modal, { type Props } from "."
import React from "react"
import type { Story } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const stories = {
  component: Modal,
  title: "Components/Modal"
}

const Template = (args: Props) => <Modal {...args} />

// Modal with button to close
export const Open: Story<Props> = Template.bind({})
Open.args = {
  children: "Modal Content",
  isOpen: true,
  onClose: action("onClose")
}

// Modal not open by default
export const Closed: Story<Props> = Template.bind({})
Closed.args = {
  children: "Modal Content",
  isOpen: false,
  onClose: action("onClose")
}

// Modal that lets user click outside of it to close
export const ClickOutsideToClose: Story<Props> = Template.bind({})
ClickOutsideToClose.args = {
  children: "Modal Content",
  isOpen: true,
  onClose: action("onClose")
}

export default stories
