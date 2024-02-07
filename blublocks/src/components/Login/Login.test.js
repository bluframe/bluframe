// @flow
/* eslint-disable max-lines-per-function */

import { fireEvent, render } from "tests"
import Login from "./Login"
import React from "react"

describe("Login", () => {
  const defaultProps = {
    isLoading: false,
    onSubmit: jest.fn(),
    passwordRef: { current: null },
    usernameRef: { current: null }
  }

  it("renders correctly", () => {
    const { getByLabelText } = render(<Login {...defaultProps} />)

    expect(getByLabelText("Username", { exact: false })).toBeInTheDocument()
    expect(getByLabelText("Password", { exact: false })).toBeInTheDocument()
  })

  it("calls onSubmit on form submit", () => {
    const { getByLabelText, getByText } = render(<Login {...defaultProps} />)

    fireEvent.input(getByLabelText("Username", { exact: false }), {
      target: {
        value: "test.username"
      }
    })
    fireEvent.input(getByLabelText("Password", { exact: false }), {
      target: {
        value: "testPassword"
      }
    })

    fireEvent.submit(getByText("Login"))

    expect(defaultProps.onSubmit).toHaveBeenCalled()
  })

  it("renders with a name heading when name prop is provided", () => {
    const propsWithName = {
      ...defaultProps,
      name: "Welcome"
    }
    const { getByText } = render(<Login {...propsWithName} />)

    expect(getByText("Welcome")).toBeInTheDocument()
  })

  it("does not render a name heading when name prop is not provided", () => {
    // Here we are basically using the defaultProps which does not include the 'name' property.
    const { queryByText } = render(<Login {...defaultProps} />)

    // Assuming 'Welcome' is a unique text that would only be rendered if 'name' prop was provided.
    expect(queryByText("Welcome")).not.toBeInTheDocument()
  })

  it("disables login button and shows loading state when 'isLoading' is true", () => {
    const { getByRole, getByText } = render(
      <Login {...defaultProps} isLoading />
    )

    const loginButton = getByText("Login")

    // Check if the button is disabled
    expect(loginButton).toBeDisabled()

    // Check for loading spinner
    expect(getByRole("status", { name: "Loading" })).toBeInTheDocument()
  })
})
