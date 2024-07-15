import Select from "components/inputs/Select"
import { StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const meta = {
  component: Select,
  title: "Inputs/Select"
}

type Story = StoryObj<typeof Select>

const options = [
  {
    label: "Apple",
    value: "apple"
  },
  {
    label: "Orange",
    value: "orange"
  },
  {
    label: "Banana",
    value: "banana"
  },
  {
    label: "Lemon",
    value: "lemon"
  },
  {
    label: "Pear",
    value: "pear"
  },
  {
    label: "Kiwi",
    value: "kiwi"
  },
  {
    label: "Mango",
    value: "mango"
  }
]

const args = {
  label: "Fruit",
  name: "fruit",
  onBlur: action("onBlur"),
  onChange: action("onChange"),
  options
}

export const Default: Story = {
  args
}

export const Placeholder: Story = {
  args: {
    ...args,
    placeholder: "Select a fruit"
  }
}

export const DefaultValue: Story = {
  args: {
    ...args,
    defaultValue: "orange",
    placeholder: "Select a fruit"
  }
}

export const Value: Story = {
  args: {
    ...args,
    placeholder: "Select a fruit",
    value: "orange"
  }
}

export default meta
