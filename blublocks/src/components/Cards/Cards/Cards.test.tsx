/* eslint-disable max-statements */

import { render, screen } from "tests"
import Cards from "./Cards"
import { ComponentProps } from "."
import cards from "mocks/cards/cards"

describe("Cards", () => {
  let props: ComponentProps

  beforeEach(() => {
    props = {
      ariaLabel: "Cards",
      cards
    }
  })

  it("renders", () => {
    render(<Cards {...props} />)

    const [cardOne, cardTwo] = cards

    expect(
      screen.getByRole("list", { name: props.ariaLabel })
    ).toBeInTheDocument()
    expect(screen.getAllByRole("listitem")).toHaveLength(cards.length)

    expect(
      screen.getByRole("listitem", { name: `${props.ariaLabel} 1` })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { level: 5, name: cardOne.heading })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("region", { name: cardOne.heading })
    ).toBeInTheDocument()
    expect(screen.getByText("Card Content 1")).toBeInTheDocument()

    expect(
      screen.getByRole("listitem", { name: `${props.ariaLabel} 2` })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { level: 5, name: cardTwo.heading })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("region", { name: cardTwo.heading })
    ).toBeInTheDocument()
    expect(screen.getByText("Card Content 2")).toBeInTheDocument()
  })
})
