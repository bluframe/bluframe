import Content from "./Content"
import React from "react"
import { render } from "tests"

describe("Content", () => {
  it("renders and uses custom components and plugins", () => {
    const mockCodeComponent = jest.fn(() => <code>{"Custom code"}</code>)
    const mockEmComponent = jest.fn(() => <em>{"Custom em"}</em>)

    const props = {
      components: {
        code: mockCodeComponent,
        em: mockEmComponent
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
