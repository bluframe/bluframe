import Flip, { type Props } from "components/animations/Flip"
import React from "react"

const stories = {
  component: Flip,
  title: "Animations/Flip"
}

const Template = (args: Props) => <Flip {...args}>{"Hello!"}</Flip>

export const Default: any = Template.bind({})
Default.args = {
  flip: "X",
  isAnimated: false
}

export const Animated: any = Template.bind({})
Animated.args = {
  flip: "X",
  isAnimated: true
}

export default stories
