import { fireEvent, render, screen } from "tests"
import FormModal from "./FormModal"

const EXPECTED_CALL_COUNT = 1

describe("FormModal", () => {
  const defaultProps = {
    children: "Are you sure?",
    isDisabled: false,
    isLoading: false,
    onClose: jest.fn(),
    onSubmit: jest.fn((event) => event.preventDefault())
  }

  it("renders correctly with the provided children", () => {
    render(<FormModal {...defaultProps} />)
    expect(screen.getByText("Are you sure?")).toBeInTheDocument()
  })

  it('calls onClose when "Cancel" button is clicked', () => {
    render(<FormModal {...defaultProps} />)
    fireEvent.click(screen.getByText("Cancel"))
    expect(defaultProps.onClose).toHaveBeenCalledTimes(EXPECTED_CALL_COUNT)
  })

  it('calls onSubmit when "Submit" button is clicked', () => {
    render(<FormModal {...defaultProps} />)
    fireEvent.click(screen.getByText("Submit"))
    expect(defaultProps.onSubmit).toHaveBeenCalledTimes(EXPECTED_CALL_COUNT)
  })

  it('disables the "Submit" button when isDisabled is true', () => {
    render(<FormModal {...defaultProps} isDisabled />)
    expect(screen.getByText("Submit")).toBeDisabled()
  })
})
