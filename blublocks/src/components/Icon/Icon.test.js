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
})
