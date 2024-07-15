import React, { MouseEventHandler } from "react"
import Button from "./Button"

export interface Props {
  ariaLabel?: string
  bold?: boolean
  className?: string
  disabled?: boolean
  expanded?: boolean
  icon?: React.ReactNode
  iconEnd?: React.ReactNode
  iconOnly?: boolean
  iconStart?: React.ReactNode
  label: string
  loading?: boolean
  noHoverHighlight?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  outlined?: boolean
  padded?: boolean
  raised?: boolean
  rounded?: boolean
  secondary?: boolean
  small?: boolean
  transparent?: boolean
  type?: "button" | "reset" | "submit"
}

export interface ComponentProps extends Props {}

export default Button
