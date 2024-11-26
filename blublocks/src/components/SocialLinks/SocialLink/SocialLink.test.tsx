import { render, screen } from "tests"
import { ComponentProps } from "."
import SocialLink from "./SocialLink"

describe("SocialLink", () => {
  let props: ComponentProps

  beforeEach(() => {
    props = {
      iconGroup: "fa6",
      iconName: "FaInstagram",
      link: "https://www.instagram.com/mightychroma",
      name: "mightychroma",
      platformName: "Instagram"
    }
  })

  it("renders", () => {
    render(<SocialLink {...props} />)

    expect(screen.getByTitle("Instagram")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Instagram" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Instagram" })).toHaveAttribute(
      "href",
      props.link
    )
    expect(screen.getByRole("link", { name: "Instagram" })).toHaveAttribute(
      "target",
      "__blank"
    )
    expect(screen.getByRole("link", { name: "Instagram" })).toHaveTextContent(
      "mightychroma"
    )
  })
})
