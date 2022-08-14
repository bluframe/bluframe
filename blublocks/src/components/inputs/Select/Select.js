// @flow
/* eslint-disable no-ternary */

import {
  Control,
  Input,
  Label,
  Option,
  Options,
  Triangle,
  Wrapper
} from "./styled"
import type { ComponentProps } from "."
import React from "react"

const Select = ({
  className,
  isOpen,
  label,
  name,
  onSelect,
  onToggleIsOpen,
  options,
  placeholder,
  selected
}: ComponentProps): React$Node => (
  <Wrapper className={className}>
    <Control onClick={onToggleIsOpen}>
      <Label isSelected={Boolean(selected)}>{label || placeholder}</Label>
      <Triangle isOpen={isOpen} />
    </Control>
    {isOpen ? (
      <Options>
        {options.map((option) => (
          <Option key={option.value} onClick={onSelect}>
            {option.label}
          </Option>
        ))}
      </Options>
    ) : null}
    <Input name={name} value={selected || ""} />
  </Wrapper>
)

export default Select
