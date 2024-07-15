import Login from "components/Login"
import { StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"

const meta = {
  component: Login,
  title: "Components/Login"
}

type Story = StoryObj<typeof Login>

const args = {
  onSubmitLogin: action("onSubmitLogin")
}

export const Default: Story = {
  args: {
    ...args
  }
}

export const Name: Story = {
  args: {
    ...args,
    name: "Welcome"
  }
}

export const Loading: Story = {
  args: {
    ...args,
    isLoading: true
  }
}

export default meta
