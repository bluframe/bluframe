import RadioGroup from "components/inputs/RadioGroup"
import { StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const meta = {
  component: RadioGroup,
  title: "Inputs/RadioGroup"
}

type Story = StoryObj<typeof RadioGroup>

const args = {
  label: "Select a fruit",
  name: "fruit",
  onChange: action("onChange"),
  options: [
    {
      label: "Apple",
      value: "apple"
    },
    {
      label: "Banana",
      value: "banana"
    }
  ],
  selected: null
}

export const Default: Story = {
  args
}

export const Selected: Story = {
  args: {
    ...args,
    selected: "banana"
  }
}

export default meta
