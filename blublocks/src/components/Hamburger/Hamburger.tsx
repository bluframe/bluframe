import { Bar, Button, ScreenReaderOnly } from "./styled"
import type { ComponentProps } from "."
import React from "react"

const Hamburger = ({
  onClick,
  isMenuExpanded = false,
  menuId
}: ComponentProps) => (
  <Button
    aria-controls={menuId}
    aria-expanded={isMenuExpanded}
    aria-label="Toggle navigation"
    onClick={onClick}
    role="menu"
    type="button"
  >
    <ScreenReaderOnly>{"Toggle navigation"}</ScreenReaderOnly>

    <Bar />
    <Bar />
    <Bar />
  </Button>
)

export default Hamburger
