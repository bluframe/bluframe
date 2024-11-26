/* eslint-disable max-lines-per-function */

import { fireEvent, render, screen } from "tests"
import { ComponentProps } from "."
import Modal from "./Modal"

describe("Modal component", () => {
  let props: ComponentProps = {
    children: "Modal Content",
    isOpen: true,
    onClose: jest.fn()
  }

  it("renders modal correctly with props", () => {
    render(<Modal {...props} />)

    expect(
      screen.getByRole("presentation", { name: "Modal" })
    ).toBeInTheDocument()

    expect(screen.getByRole("dialog", { name: "Dialog" })).toHaveTextContent(
      "Modal Content"
    )
  })

  it("renders aria-label from name", () => {
    props = {
      ...props,
      name: "Content"
    }

    render(<Modal {...props} />)

    expect(
      screen.getByRole("presentation", { name: "Content Modal" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("dialog", { name: "Content Dialog" })
    ).toBeInTheDocument()
  })

  it("doesn't modal when not open", () => {
    props = {
      children: "Modal Content",
      isOpen: false,
      onClose: jest.fn()
    }

    render(<Modal {...props} />)

    expect(screen.queryByRole("dialog")).toBeNull()
  })

  it("fires the onClose prop when the close button is clicked", () => {
    render(<Modal {...props} />)

    const closeButton = screen.getByLabelText("Close Dialog")

    fireEvent.click(closeButton)

    expect(props.onClose).toHaveBeenCalled()
  })

  it("fires the onClose prop when clicking outside modal content", () => {
    const { container } = render(<Modal {...props} />)

    fireEvent.click(container.firstChild)

    expect(props.onClose).toHaveBeenCalled()
  })
})
