// @flow

import { type ComponentProps, DEFAULT_FONT_SIZE } from "."
import React from "react"
import { Icon as StyledIcon } from "./styled"

const BluFrameFAIcon = ({
  name,
  fontSize = DEFAULT_FONT_SIZE
}: ComponentProps): React$Node => (
  <StyledIcon className={`fa fa-${name} fa-2-5x`} fontSize={fontSize} />
)

export default BluFrameFAIcon
