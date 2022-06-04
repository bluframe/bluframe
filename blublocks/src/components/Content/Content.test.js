// @flow

import Content from "./Content"
import React from "react"
import { render } from "tests"

jest.mock(".", () => ({}))
jest.mock(
  "react-markdown",
  () =>
    function ReactMarkdown({ children }) {
      return <div>{children}</div>
    }
)

describe("Content", () => {
  it("renders", () => {
    const props = {
      components: {
        code: jest.fn(),
        em: jest.fn()
      },
      content: `
        ## Markdown Content

        Looks **awesome!!**
      `,
      rehypePlugins: [],
      remarkPlugins: []
    }

    const { container } = render(<Content {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
