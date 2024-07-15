import DeleteButton from "./DeleteButton"
import { MouseEventHandler } from "react"

export interface Props {
  color?: string
  isDisabled?: boolean
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
  size?: string
}

export interface ComponentProps extends Props {}

export default DeleteButton
