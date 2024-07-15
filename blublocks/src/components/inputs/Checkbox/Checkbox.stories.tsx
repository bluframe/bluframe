import Checkbox from "components/inputs/Checkbox"
import { StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const meta = {
  component: Checkbox,
  title: "Inputs/Checkbox"
}

type Story = StoryObj<typeof Checkbox>

const args = {
  inputId: "apple-checkbox",
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
