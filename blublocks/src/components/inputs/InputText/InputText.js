// @flow
/* eslint-disable no-ternary, react/jsx-no-bind */

import { Input, Label, Wrapper } from "./styled"
import React, { useState } from "react"
import type { ComponentProps } from "."

const TextInput = ({
  inputId,
  label,
  labelId,
  name,
  onChange,
  value
}: ComponentProps): React$Node => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <Wrapper>
      <Input
        id={inputId}
        isFocused={isFocused}
        name={name}
        onBlur={handleBlur}
        onChange={(event) => onChange(event.target.value)}
        onFocus={handleFocus}
        value={value}
      />
      <Label htmlFor={inputId} id={labelId} isFocused={isFocused}>
        {label}
      </Label>
    </Wrapper>
  )
}

export default TextInput
