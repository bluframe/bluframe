import FadeIn, { Props } from "components/animations/FadeIn"
import React from "react"

const stories = {
  component: FadeIn,
  title: "Animations/FadeIn"
}

const Template = (args: Props) => <FadeIn {...args}>{"Hello!"}</FadeIn>

export const Default: any = Template.bind({})
Default.args = {
  fadeIn: "Left",
  isAnimated: false
}

export const Left: any = Template.bind({})
Left.args = {
  fadeIn: "Left",
  isAnimated: true
}

export const Right: any = Template.bind({})
Right.args = {
  fadeIn: "Right",
  isAnimated: true
}

export const Up: any = Template.bind({})
Up.args = {
  fadeIn: "Up",
  isAnimated: true
}

export default stories
