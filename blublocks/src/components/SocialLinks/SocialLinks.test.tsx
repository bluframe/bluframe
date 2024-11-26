/* eslint-disable max-lines-per-function */

import { render, screen } from "tests"
import { ComponentProps } from "."
import SocialLinks from "./SocialLinks"

describe("SocialLinks", () => {
  let props: ComponentProps

  beforeEach(() => {
    props = {
      facebook: "mightychroma",
      instagram: "mightychroma",
      reddit: "mightychroma",
      twitterX: "mightychroma",
      website: "https://mightychroma.me",
      youtube: "mightychroma"
    }
  })

  it("renders social links", () => {
    render(<SocialLinks {...props} />)
    expect(
      screen.getByRole("list", { name: "Social Links" })
    ).toBeInTheDocument()
  })

  it("renders instagram", () => {
    render(<SocialLinks {...props} />)

    expect(
      screen.getByRole("listitem", { name: "Instagram" })
    ).toBeInTheDocument()
    expect(screen.getByTitle("Instagram")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Instagram" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Instagram" })).toHaveAttribute(
      "href",
      "https://instagram.com/mightychroma"
    )
    expect(screen.getByRole("link", { name: "Instagram" })).toHaveAttribute(
      "target",
      "__blank"
    )
    expect(screen.getByRole("link", { name: "Instagram" })).toHaveTextContent(
      "mightychroma"
    )
  })

  it("renders facebook", () => {
    render(<SocialLinks {...props} />)

    expect(
      screen.getByRole("listitem", { name: "Facebook" })
    ).toBeInTheDocument()
    expect(screen.getByTitle("Facebook")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Facebook" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Facebook" })).toHaveAttribute(
      "href",
      "https://facebook.com/mightychroma"
    )
    expect(screen.getByRole("link", { name: "Facebook" })).toHaveAttribute(
      "target",
      "__blank"
    )
    expect(screen.getByRole("link", { name: "Facebook" })).toHaveTextContent(
      "mightychroma"
    )
  })

  it("renders twitter", () => {
    render(<SocialLinks {...props} />)

    expect(
      screen.getByRole("listitem", { name: "Twitter X" })
    ).toBeInTheDocument()
    expect(screen.getByTitle("Twitter X")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Twitter X" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Twitter X" })).toHaveAttribute(
      "href",
      "https://twitter.com/mightychroma"
    )
    expect(screen.getByRole("link", { name: "Twitter X" })).toHaveAttribute(
      "target",
      "__blank"
    )
    expect(screen.getByRole("link", { name: "Twitter X" })).toHaveTextContent(
      "mightychroma"
    )
  })

  it("renders youtube", () => {
    render(<SocialLinks {...props} />)

    expect(
      screen.getByRole("listitem", { name: "YouTube" })
    ).toBeInTheDocument()
    expect(screen.getByTitle("YouTube")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "YouTube" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "YouTube" })).toHaveAttribute(
      "href",
      "https://youtube.com/mightychroma"
    )
    expect(screen.getByRole("link", { name: "YouTube" })).toHaveAttribute(
      "target",
      "__blank"
    )
    expect(screen.getByRole("link", { name: "YouTube" })).toHaveTextContent(
      "mightychroma"
    )
  })

  it("renders reddit", () => {
    render(<SocialLinks {...props} />)

    expect(screen.getByRole("listitem", { name: "Reddit" })).toBeInTheDocument()
    expect(screen.getByTitle("Reddit")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Reddit" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Reddit" })).toHaveAttribute(
      "href",
      "https://reddit.com/user/mightychroma"
    )
    expect(screen.getByRole("link", { name: "Reddit" })).toHaveAttribute(
      "target",
      "__blank"
    )
    expect(screen.getByRole("link", { name: "Reddit" })).toHaveTextContent(
      "mightychroma"
    )
  })

  it("renders website", () => {
    render(<SocialLinks {...props} />)

    expect(
      screen.getByRole("listitem", { name: "Website" })
    ).toBeInTheDocument()
    expect(screen.getByTitle("Website")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Website" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Website" })).toHaveAttribute(
      "href",
      "https://mightychroma.me"
    )
    expect(screen.getByRole("link", { name: "Website" })).toHaveTextContent(
      "mightychroma.me"
    )
  })
})
