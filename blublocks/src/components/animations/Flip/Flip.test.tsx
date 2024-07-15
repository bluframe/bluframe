import { ComponentProps } from "."
import Flip from "./Flip"
import React from "react"
import { render } from "tests"

jest.mock(".", () => ({}))

describe("Flip", () => {
  it("renders", () => {
    const props: Omit<ComponentProps, "children"> = {
      flip: "X",
      isAnimated: false
    }

    const { container } = render(
      <Flip {...props}>
        <div />
      </Flip>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
