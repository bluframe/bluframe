import Radio from "components/inputs/Radio"
import { StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const meta = {
  component: Radio,
  title: "Inputs/Radio"
}

type Story = StoryObj<typeof Radio>

const args = {
  inputId: "apple-radio",
  isChecked: true,
  label: "Apple",
  name: "fruit",
  onChange: action("onChange"),
  value: "apple"
}

export const Checked: Story = {
  args
}

export const Unchecked: Story = {
  args: {
    ...args,
    isChecked: false
  }
}

export default meta
