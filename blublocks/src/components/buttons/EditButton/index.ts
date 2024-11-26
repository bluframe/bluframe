import EditButton from "./EditButton"
import { MouseEventHandler } from "react"

export interface Props {
  isDisabled?: boolean
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
  secondary?: boolean
  size?: string
}

export interface ComponentProps extends Props {}

export default EditButton
