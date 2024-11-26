/* eslint-disable no-ternary, react/jsx-no-bind */

import { Button } from "./styled"
import { ComponentProps } from "."
import Icon from "components/Icon"

const EditButton = ({
  isDisabled,
  label,
  onClick,
  secondary,
  size = "24px"
}: ComponentProps) => (
  <Button
    disabled={isDisabled}
    icon={<Icon name="IoPencilOutline" size={size} />}
    iconOnly
    label={label}
    onClick={onClick}
    raised
    rounded
    secondary={secondary}
  />
)

export default EditButton
