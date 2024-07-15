// @flow

import type { ComponentProps } from "."
import Radio from "./Radio"
import React from "react"
import { render } from "tests"

jest.mock(".", () => ({}))

describe("Radio", () => {
  const props: ComponentProps = {
    inputId: "apple-radio",
    isChecked: true,
    label: "Apple",
    name: "Fruit",
    onClick: jest.fn(),
    value: "apple"
  }

  it("renders", () => {
    const { container } = render(<Radio {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
