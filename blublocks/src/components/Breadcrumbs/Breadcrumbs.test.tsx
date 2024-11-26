/* eslint-disable max-lines-per-function, max-statements */

import { render, screen } from "tests"
import Breadcrumbs from "./Breadcrumbs"
import { ComponentProps } from "."

describe("Breadcrumbs", () => {
  it("renders", () => {
    const props: ComponentProps = {
      items: [
        { href: "/", label: "Home" },
        { href: "/electronics", label: "Electronics" },
        { href: "/electronics/tvs", label: "TVs" },
        { href: "/electronics/tvs/4k", label: "4K TVs" }
      ]
    }

    render(<Breadcrumbs {...props} />)

    expect(
      screen.getByRole("list", { name: "Breadcrumbs" })
    ).toBeInTheDocument()

    expect(screen.getByRole("listitem", { name: "Home" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument()
    expect(
      screen.getByRole("listitem", { name: "Electronics" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: "Electronics" })
    ).toBeInTheDocument()
    expect(screen.getByRole("listitem", { name: "TVs" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "TVs" })).toBeInTheDocument()
    expect(screen.getByRole("listitem", { name: "4K TVs" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "4K TVs" })).toBeInTheDocument()
  })

  it("renders without links", () => {
    const props: ComponentProps = {
      items: [
        { label: "Home" },
        { label: "Electronics" },
        { label: "TVs" },
        { label: "4K TVs" }
      ]
    }

    render(<Breadcrumbs {...props} />)

    expect(screen.getByRole("listitem", { name: "Home" })).toBeInTheDocument()
    expect(
      screen.getByRole("listitem", { name: "Electronics" })
    ).toBeInTheDocument()

    expect(screen.getByRole("listitem", { name: "TVs" })).toBeInTheDocument()
    expect(screen.getByRole("listitem", { name: "4K TVs" })).toBeInTheDocument()
  })

  it("renders with single item", () => {
    const props: ComponentProps = {
      items: [{ href: "/", label: "Home" }]
    }

    render(<Breadcrumbs {...props} />)

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument()
    expect(screen.getByRole("listitem", { name: "Home" })).toBeInTheDocument()
  })
})
