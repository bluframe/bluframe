// @flow
/* eslint-disable max-lines-per-function, no-ternary */

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
import React, { type ElementRef, forwardRef } from "react"
import type { ComponentProps } from "."

const Select: React$AbstractComponent<ComponentProps, React$Node> = forwardRef(
  (
    {
      className,
      defaultValue,
      displayValue,
      isControlled,
      isLabelShrunk,
      isOpen,
      label,
      name,
      onChange,
      onToggleIsOpen,
      options,
      value
    }: ComponentProps,
    ref: ElementRef<HTMLSelectElement | null>
  ): React$Node => (
    <Wrapper className={className}>
      <Control onClick={onToggleIsOpen}>
        <Label id={`${name}-label`} isShrunk={isLabelShrunk}>
          {label}
        </Label>
        <DisplayValue
          isSelected={Boolean((!isControlled && defaultValue) || value)}
        >
          {displayValue}
        </DisplayValue>
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
              aria-selected={
                (!isControlled && option.value === defaultValue) ||
                option.value === value
              }
              id={`${name}-listbox-${index}`}
              key={option.value}
              onClick={onChange(option.value)}
              role="option"
            >
              {option.label}
            </Option>
          ))}
        </Options>
      ) : null}
      <Input
        defaultValue={defaultValue}
        name={name}
        ref={ref}
        value={value === null ? undefined : value}
      />
    </Wrapper>
  )
)

Select.displayName = "Select"

export default Select
