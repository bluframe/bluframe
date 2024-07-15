import AddButton from "./AddButton"

interface Props {
  disabled?: boolean
  label: string
  onClick: () => void
  size?: string
}

export interface ComponentProps extends Props {}

export default AddButton
