import Hamburger, { Props } from "components/Hamburger"
import React from "react"

const stories = {
  argTypes: {
    onClick: { action: "button click" }
  },
  component: Hamburger,
  title: "Components/Hamburger"
}

const Template = (args: Props) => <Hamburger {...args} />

export const Default: any = Template.bind({})

export default stories
