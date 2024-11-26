import { render, screen } from "tests"
import { ComponentProps } from "."
import Icon from "./Icon"
import ionIcons from "./ionIcons"

describe("Icon", () => {
  const props: ComponentProps = {
    SelectedIcon: ionIcons.IoPerson,
    title: "Person"
  }

  it("renders default", () => {
    render(<Icon {...props} />)

    const svg = screen.getByTitle("Person").closest("svg")

    expect(svg).toHaveAttribute("fill", "currentColor")
    expect(svg).toHaveAttribute("height", "16px")
    expect(svg).toHaveAttribute("stroke", "currentColor")
    expect(svg).toHaveAttribute("width", "16px")
  })

  it("renders size", () => {
    props.size = "32px"

    render(<Icon {...props} />)

    const svg = screen.getByTitle("Person").closest("svg")

    expect(svg).toHaveAttribute("height", "32px")
    expect(svg).toHaveAttribute("width", "32px")
  })

  it("renders color", () => {
    props.color = "blue"

    render(<Icon {...props} />)

    const svg = screen.getByTitle("Person").closest("svg")

    expect(svg).toHaveAttribute("color", "blue")
    expect(svg).toHaveAttribute("style", "color: blue;")
  })

  it("renders aria-hidden", () => {
    props.ariaHidden = true

    render(<Icon {...props} />)

    const svg = screen.getByTitle("Person").closest("svg")

    expect(svg).toHaveAttribute("aria-hidden", "true")
  })
})
