import { Meta, StoryObj } from "@storybook/react"
import Icon from "components/Icon"
import fa6Icons from "./fa6Icons"
import ionIcons from "./ionIcons"

const meta: Meta<typeof Icon> = {
  argTypes: {
    color: { control: "color" }
  },
  component: Icon,
  title: "Components/Icon"
}

type Story = StoryObj<typeof Icon>

export const Ion: Story = {
  argTypes: {
    name: {
      control: "select",
      options: Object.keys(ionIcons)
    }
  },
  args: {
    group: "io5",
    name: "IoSpeedometerOutline",
    size: "50px"
  }
}

export const Fa: Story = {
  argTypes: {
    name: {
      control: "select",
      options: Object.keys(fa6Icons)
    }
  },
  args: {
    group: "fa6",
    name: "FaQuoteLeft",
    size: "50px"
  }
}

export default meta
