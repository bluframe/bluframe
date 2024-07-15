import FadeIn from "./FadeIn"
import { ComponentProps } from "."
import React from "react"
import { render } from "tests"

describe("FadeIn", () => {
  it("renders", () => {
    const props: Omit<ComponentProps, "children"> = {
      fadeIn: "Left",
      isAnimated: false
    }

    const { container } = render(
      <FadeIn {...props}>
        <div />
      </FadeIn>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
