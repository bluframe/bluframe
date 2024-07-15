import { Meta, StoryObj } from "@storybook/react"
import Toggle from "components/inputs/Toggle"
import { action } from "@storybook/addon-actions"

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: "Inputs/Toggle"
}

type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    defaultChecked: false,
    disabled: false,
    inputId: "toggle-id"
  }
}

export const DefaultChecked: Story = {
  ...Default,
  args: {
    ...Default.args,
    defaultChecked: true
  }
}

export const ControlledChecked: Story = {
  ...Default,
  args: {
    ...Default.args,
    checked: true,
    defaultChecked: undefined,
    onChange: action("onChange")
  }
}

export const ControlledNotChecked: Story = {
  ...ControlledChecked,
  args: {
    ...ControlledChecked.args,
    checked: false,
    onChange: action("onChange")
  }
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true
  }
}

export const ControlledDisabled: Story = {
  ...ControlledNotChecked,
  args: {
    ...ControlledNotChecked.args,
    disabled: true
  }
}

export default meta
