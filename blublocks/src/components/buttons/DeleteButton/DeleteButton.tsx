import { Button } from "./styled"
import { ComponentProps } from "."
import Icon from "components/Icon"
import React from "react"
import colors from "styles/colors"

// DeleteButton page component
const DeleteButton = ({
  color = colors.silver,
  isDisabled,
  label,
  onClick,
  size = "24px"
}: ComponentProps) => (
  <Button
    disabled={isDisabled}
    icon={<Icon color={color} name="IoTrashOutline" size={size} />}
    iconOnly
    label={label}
    onClick={onClick}
    transparent
  />
)

export default DeleteButton
