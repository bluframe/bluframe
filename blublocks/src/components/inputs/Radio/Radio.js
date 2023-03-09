// @flow
/* eslint-disable no-ternary */

import { Circle, Input, Label, Wrapper } from "./styled"
import type { ComponentProps } from "."
import React from "react"

const Radio = ({
  inputId,
  isChecked,
  label,
  labelId,
  name
}: ComponentProps): React$Node => (
  <Wrapper>
    <Circle
      aria-checked={isChecked}
      aria-labelledby={labelId}
      checked={isChecked}
      id={inputId}
      role="radio"
    />

    <Input defaultChecked={isChecked} name={name} />

    <Label id={inputId ? `${inputId}-label` : ""}>{label}</Label>
  </Wrapper>
)

export default Radio
