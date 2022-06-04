// @flow

import FAIcon from "./FAIcon"
import React from "react"
import { render } from "tests"

describe("BluFrame", () => {
  describe("FAIcon", () => {
    it("renders default size", () => {
      const props = {
        name: "angle-double-up"
      }

      const { container } = render(<FAIcon {...props} />)

      expect(container.firstChild).toMatchSnapshot()
    })

    it("renders custom size", () => {
      const props = {
        fontSize: "30px",
        name: "angle-double-up"
      }

      const { container } = render(<FAIcon {...props} />)

      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
