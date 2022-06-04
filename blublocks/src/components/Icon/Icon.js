// @flow

import type { ComponentProps } from "."
import React from "react"
import { Icon as StyledIcon } from "./styled"

const Icon = ({ color, SelectedIcon, size }: ComponentProps): React$Node => (
  <StyledIcon>
    <SelectedIcon color={color} size={size} />
  </StyledIcon>
)

export default Icon
