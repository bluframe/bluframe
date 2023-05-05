// @flow
/* eslint-disable no-ternary, react/jsx-no-bind */

import { Input, Label, Wrapper } from "./styled"
import type { ComponentProps } from "."
import React from "react"

const InputText = ({
  inputId,
  label,
  labelId,
  name,
  onChange,
  value
}: ComponentProps): React$Node => (
  <Wrapper>
    <Label htmlFor={inputId} id={labelId}>
      {label}
    </Label>
    <Input
      id={inputId}
      name={name}
      onChange={(event) => onChange(event.target.value)}
      value={value}
    />
  </Wrapper>
)

export default InputText
