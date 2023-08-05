// @flow

import { fireEvent, render } from "tests"
import type { ComponentProps } from "."
import Modal from "./Modal"
import React from "react"

jest.mock(".", () => ({}))

describe("Modal component", () => {
  let props: ComponentProps = {
    children: "Modal Content",
    isOpen: true,
    onClose: jest.fn()
  }

  it("renders modal correctly with props", () => {
    const { getByRole } = render(<Modal {...props} />)
    expect(getByRole("dialog")).toHaveTextContent("Modal Content")
  })

  it("doesn't modal when not open", () => {
    props = {
      children: "Modal Content",
      isOpen: false,
      onClose: jest.fn()
    }

    const { queryByRole } = render(<Modal {...props} />)
    expect(queryByRole("dialog")).toBeNull()
  })

  it("fires the onClose prop when the close button is clicked", () => {
    const { getByLabelText } = render(<Modal {...props} />)
    const closeButton = getByLabelText("Close Dialog")
    fireEvent.click(closeButton)
    expect(props.onClose).toHaveBeenCalled()
  })

  it("fires the onClose prop when clicking outside modal content", () => {
    const { container } = render(<Modal {...props} />)
    fireEvent.click(container.firstChild)
    expect(props.onClose).toHaveBeenCalled()
  })
})
