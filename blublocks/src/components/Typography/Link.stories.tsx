import { Meta, StoryObj } from "@storybook/react"
import Link from "./Link"
import Paragraph from "./Paragraph"

const meta: Meta<typeof Link> = {
  // @ts-ignore
  component: Link,
  title: "Typography/Link"
}

type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    href: "#"
  },
  render: (args) => (
    <Paragraph>
      <Link {...args}>{"This is a link"}</Link>
    </Paragraph>
  )
}

export default meta
