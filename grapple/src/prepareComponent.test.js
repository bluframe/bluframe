// @flow
/* eslint-disable react/no-multi-comp */

import { render, screen } from "tests"
import React from "react"
import prepareComponent from "./prepareComponent"

const THREE = 3

const ExampleComponent = ({ text }) => {
  return <div>{text}</div>
}

const usePrepareComponent = (props) => {
  return {
    text: props.text.toUpperCase()
  }
}

const options = {
  onlyRenderIf: (props) => props.text.length > THREE,
  onlyUpdate: ["text"]
}

const PreparedExampleComponent = prepareComponent(
  usePrepareComponent,
  options
)(ExampleComponent)

const TestComponent = ({ text }) => {
  return <PreparedExampleComponent text={text} />
}

describe("prepareComponent", () => {
  it("transforms props and render the component", () => {
    render(<TestComponent text="hello" />)
    expect(screen.getByText("HELLO")).toBeInTheDocument()
  })

  it("doesn't render if onlyRenderIf returns false", () => {
    render(<TestComponent text="hi" />)
    expect(screen.queryByText("HI")).toBeNull()
  })

  it("only updates the component if onlyUpdate prop changes", () => {
    const { rerender } = render(<TestComponent text="hello" />)
    expect(screen.getByText("HELLO")).toBeInTheDocument()

    rerender(<TestComponent text="world" />)
    expect(screen.getByText("WORLD")).toBeInTheDocument()
  })
})
