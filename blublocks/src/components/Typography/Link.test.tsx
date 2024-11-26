import { render, screen } from "tests"
import Link from "./Link"

describe("Section", () => {
  it("renders", () => {
    const props = {
      href: "/"
    }

    render(<Link {...props}>{"This is a link"}</Link>)

    expect(
      screen.getByRole("link", { name: "This is a link" })
    ).toBeInTheDocument()
  })
})
