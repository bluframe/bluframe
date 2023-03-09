// @flow

import type { ComponentProps } from "."
import RadioGroup from "./RadioGroup"
import React from "react"
import { render } from "tests"

jest.mock(".", () => ({}))
jest.mock("components/inputs/Radio", () => "radio-component")

describe("RadioGroup", () => {
  const props: ComponentProps = {
    groupId: "fruit-radiogroup",
    label: "Select a fruit",
    labelId: "fruit-radiogroup-label",
    name: "fruit",
    onChange: jest.fn(),
    options: [
      {
        label: "Apple",
        value: "apple"
      },
      {
        label: "Banana",
        value: "banana"
      }
    ],
    selected: "banana"
  }

  it("renders", () => {
    const { container } = render(<RadioGroup {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
