// @flow

import FadeIn from "./FadeIn"
import React from "react"
import { render } from "tests"

jest.mock(".", () => ({}))

describe("FadeIn", () => {
  it("renders", () => {
    const props = {
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
