// @flow
/* eslint-disable no-ternary */

import {
  Control,
  DisplayValue,
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
  displayValue,
  isLabelShrunk,
  isOpen,
  label,
  name,
  onSelect,
  onToggleIsOpen,
  options,
  selected
}: ComponentProps): React$Node => (
  <Wrapper className={className}>
    <Control onClick={onToggleIsOpen}>
      <Label id={`${name}-label`} isShrunk={isLabelShrunk}>
        {label}
      </Label>
      <DisplayValue isSelected={Boolean(selected)}>{displayValue}</DisplayValue>
      <Triangle isOpen={isOpen} />
    </Control>
    {isOpen ? (
      <Options
        aria-labelledby={`${name}-label`}
        id={`${name}-listbox`}
        role="listbox"
      >
        {options.map((option, index) => (
          <Option
            aria-selected={option.value === selected}
            id={`${name}-listbox-${index}`}
            key={option.value}
            onClick={onSelect(option.value)}
            role="option"
          >
            {option.label}
          </Option>
        ))}
      </Options>
    ) : null}
    <Input name={name} value={selected || ""} />
  </Wrapper>
)

export default Select
