/* eslint-disable max-lines-per-function, max-statements */

import { fireEvent, render } from "tests"
import Button from "./Button"
import { type ComponentProps } from "."
import Icon from "components/Icon"
import React from "react"

describe("Button", () => {
  const props: ComponentProps = {
    label: "Button",
    onClick: jest.fn()
  }

  it("renders", () => {
    const { container } = render(<Button {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders bold", () => {
    const { container } = render(<Button {...props} bold />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders padded", () => {
    const { container } = render(<Button {...props} padded />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders small", () => {
    const { container } = render(<Button {...props} small />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders disabled", () => {
    const { container } = render(<Button {...props} disabled />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders outlined", () => {
    const { container } = render(<Button {...props} outlined />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders secondary", () => {
    const { container } = render(<Button {...props} secondary />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders with iconStart and iconEnd", () => {
    const { container } = render(
      <Button
        {...props}
        iconEnd={<div>{"Icon End"}</div>}
        iconStart={<div>{"Icon Start"}</div>}
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it("triggers onClick event", () => {
    const { getByText } = render(<Button {...props} />)

    fireEvent.click(getByText(props.label))
    expect(props.onClick).toHaveBeenCalled()
  })

  it("does not trigger onClick event if disabled", () => {
    const { getByText } = render(<Button {...props} disabled />)

    fireEvent.click(getByText(props.label))
    expect(props.onClick).not.toHaveBeenCalled()
  })

  it("renders iconOnly button", () => {
    const { container } = render(
      <Button {...props} icon={<Icon name="IoArrowBack" />} iconOnly />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders transparent iconOnly button", () => {
    const { container } = render(
      <Button
        {...props}
        icon={<Icon name="IoArrowBack" />}
        iconOnly
        transparent
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders with expanded and outlined", () => {
    const { container } = render(<Button {...props} expanded outlined />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders with secondary, rounded, and raised", () => {
    const { container } = render(<Button {...props} raised rounded secondary />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders aria label", () => {
    const { container, getByLabelText } = render(
      <Button {...props} ariaLabel="Aria Label" />
    )

    const button = getByLabelText("Aria Label")

    expect(button).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
