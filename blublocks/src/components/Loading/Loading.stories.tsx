import Loading, { Props } from "components/Loading"
import React from "react"

const stories = {
  argTypes: {
    contrast: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    secondary: { control: { type: "boolean" } },
    size: { control: { type: "number" } }
  },
  component: Loading,
  title: "Components/Loading"
}

const Template = (args: Props) => <Loading {...args} />

export const Default: any = Template.bind({})
Default.args = {}

export default stories
