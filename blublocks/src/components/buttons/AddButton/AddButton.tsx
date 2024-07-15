import { Button } from "./styled"
import { ComponentProps } from "."
import Icon from "components/Icon"
import React from "react"

// AddButton page component
const AddButton = ({
  disabled,
  label,
  onClick,
  size = "48px"
}: ComponentProps) => (
  <Button
    disabled={disabled}
    icon={<Icon name="IoAddCircle" size={size} />}
    iconOnly
    label={label}
    onClick={onClick}
    raised
    rounded
    transparent
  />
)

export default AddButton
