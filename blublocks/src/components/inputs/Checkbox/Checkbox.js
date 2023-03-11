// @flow
/* eslint-disable no-ternary */

import { Icon, Input, Label, Polyline, StyledCheckbox, Wrapper } from "./styled"
import type { ComponentProps } from "."
import React from "react"

const Checkbox = ({
  inputId,
  isChecked,
  label,
  labelId,
  name,
  onChange,
  value
}: ComponentProps): React$Node => (
  <Wrapper onClick={onChange}>
    <Input defaultChecked={isChecked} name={name} value={value} />

    <StyledCheckbox
      aria-checked={isChecked}
      aria-labelledby={labelId}
      checked={isChecked}
      id={inputId}
      role="checkbox"
    >
      <Icon viewBox="0 0 24 24">
        <Polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>

    <Label id={labelId}>{label}</Label>
  </Wrapper>
)

export default Checkbox
