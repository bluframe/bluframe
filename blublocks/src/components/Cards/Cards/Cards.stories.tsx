import { Meta, StoryObj } from "@storybook/react"
import Cards from "components/Cards/Cards"
import cards from "mocks/cards/cards"
import renderStoriesWrapper from "helpers/renderStoriesWrapper"

const meta: Meta<typeof Cards> = {
  component: Cards,
  title: "Cards/Cards"
}

type Story = StoryObj<typeof Cards>

export const Default: Story = {
  args: {
    ariaLabel: "Cards",
    cards
  },
  render: renderStoriesWrapper(Cards)
}

export default meta
