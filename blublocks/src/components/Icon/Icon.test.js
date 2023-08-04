// @flow

import Icon from "./Icon"
import React from "react"
import { render } from "tests"

describe("Icon", () => {
  it("renders default size", () => {
    const props = {
      SelectedIcon: () => "SelectedIcon"
    }

    const { container } = render(<Icon {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders size", () => {
    const props = {
      SelectedIcon: () => "SelectedIcon",
      size: "32px"
    }

    const { container } = render(<Icon {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders color", () => {
    const props = {
      SelectedIcon: () => "SelectedIcon",
      color: "blue"
    }

    const { container } = render(<Icon {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
