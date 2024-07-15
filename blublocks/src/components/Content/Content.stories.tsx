import Content from "components/Content"
import type { Props } from "."
import React from "react"

const stories = {
  component: Content,
  title: "Components/Content"
}

const Template = (args: Props) => <Content {...args} />

export const Default: any = Template.bind({})
Default.args = {
  content: `# Markdown Content
  Is **the best!!**`
}

export default stories
