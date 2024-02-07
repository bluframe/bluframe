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
    $contrast={contrast}
    $secondary={secondary}
    aria-label="Loading"
    disabled={disabled}
    role="status"
    size={size}
  />
)

export default Loading
