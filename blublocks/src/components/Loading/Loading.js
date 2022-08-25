// @flow

import type { ComponentProps } from "."
import React from "react"
import { Wrapper } from "./styled"

const DEFAULT_SIZE = 16

const Loading = ({
  contrast,
  disabled,
  secondary,
  size = DEFAULT_SIZE
}: ComponentProps): React$Node => (
  <Wrapper
    contrast={contrast}
    disabled={disabled}
    secondary={secondary}
    size={size}
  />
)

export default Loading
