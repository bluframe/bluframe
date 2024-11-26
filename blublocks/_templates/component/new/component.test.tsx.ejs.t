---
to: "<%= path ? `src/components/${path}/${name}/${name}.test.tsx` : `src/components/${name}/${name}.test.tsx` %>"
---
import { fireEvent, render, screen } from "tests"
import { ComponentProps } from "."
import <%= name %> from "./<%= name %>"

describe("<%= name %>", () => {
  let props: ComponentProps

  beforeEach(() => {
    props = {
      // default props
    }
  })

  it("renders", () => {
    render(<<%= name %> {...props} />)
    // test implementation
  })
})
