// @flow
/* eslint-disable no-ternary */

import { Input, Label, Wrapper } from "./styled"
import type { ComponentProps } from "."
import React from "react"

const TextInput = ({
  inputId,
  isFocused,
  label,
  labelId,
  name,
  onBlur,
  onChange,
  onFocus,
  value
}: ComponentProps): React$Node => (
  <Wrapper>
    <Input
      id={inputId}
      isFocused={isFocused}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      value={value}
    />
    <Label htmlFor={inputId} id={labelId} isFocused={isFocused}>
      {label}
    </Label>
  </Wrapper>
)

export default TextInput
