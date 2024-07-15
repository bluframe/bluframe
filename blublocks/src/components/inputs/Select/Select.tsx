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
import { ForwardedRef, forwardRef } from "react"
import { ComponentProps } from "."

const Select = forwardRef(
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
      onBlur,
      onChange,
      onToggleIsOpen,
      options,
      value,
      wrapperRef
    }: ComponentProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <Wrapper
      className={className}
      onBlur={onBlur}
      ref={wrapperRef}
      tabIndex={-1}
    >
      <Control onClick={onToggleIsOpen}>
        <Label $isShrunk={isLabelShrunk} id={`${name}-label`}>
          {label}
        </Label>
        <DisplayValue
          $isSelected={Boolean((!isControlled && defaultValue) || value)}
        >
          {displayValue}
        </DisplayValue>
        <Triangle $isOpen={isOpen} />
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
