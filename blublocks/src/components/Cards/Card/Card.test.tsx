import { render, screen } from "tests"
import Card from "./Card"
import { ComponentProps } from "."
import card from "mocks/cards/card"

describe("Card", () => {
  let props: ComponentProps

  beforeEach(() => {
    props = {
      ...card,
      headingId: "card-heading"
    }
  })

  it("renders", () => {
    render(<Card {...props} />)

    expect(
      screen.getByRole("heading", { level: 5, name: props.heading })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("region", { name: props.heading })
    ).toBeInTheDocument()

    expect(screen.getByText("Card Content")).toBeInTheDocument()
  })
})
