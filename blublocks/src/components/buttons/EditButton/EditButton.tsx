/* eslint-disable no-ternary, react/jsx-no-bind */

import { Button } from "./styled"
import type { ComponentProps } from "."
import Icon from "components/Icon"
import React from "react"

const EditButton = ({
  isDisabled,
  label,
  onClick,
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
  />
)

export default EditButton
