import { Meta, StoryObj } from "@storybook/react"
import Card from "components/Cards/Card"
import card from "mocks/cards/card"

const meta: Meta<typeof Card> = {
  component: Card,
  parameters: {
    layout: "centered"
  },
  title: "Cards/Card"
}

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    ...card
  }
}

export default meta
