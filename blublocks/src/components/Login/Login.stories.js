// @flow

import Login, { type Props } from "components/Login"
import React from "react"
import type { Story } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const stories = {
  component: Login,
  title: "Components/Login"
}

const Template = (args: Props) => <Login {...args} />

const args = {
  onSubmitLogin: action("onSubmitLogin")
}

export const Default: Story<Props> = Template.bind({})
Default.args = {
  ...args
}

export const Name: Story<Props> = Template.bind({})
Name.args = {
  ...args,
  name: "Welcome"
}

export const Loading: Story<Props> = Template.bind({})
Loading.args = {
  ...args,
  isLoading: true
}

export default stories
