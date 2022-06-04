// @flow

import { Bar, Button, ScreenReaderOnly } from "./styled"
import type { ComponentProps } from "."
import React from "react"

const Hamburger = ({ onClick }: ComponentProps): React$Node => (
  <Button onClick={onClick} type="button">
    <ScreenReaderOnly>{"Toggle navigation"}</ScreenReaderOnly>

    <Bar />
    <Bar />
    <Bar />
  </Button>
)

export default Hamburger
