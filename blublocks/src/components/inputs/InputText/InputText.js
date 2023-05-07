// @flow

import { Input, Label, Wrapper } from "./styled"
import React, { type ElementRef, forwardRef } from "react"
import type { ComponentProps } from "."

const InputText: React$AbstractComponent<ComponentProps, React$Node> =
  forwardRef(
    (
      {
        className,
        defaultValue,
        inputId,
        isFocused,
        label,
        labelId,
        name,
        onBlur,
        onChange,
        onFocus,
        value
      }: ComponentProps,
      ref: ElementRef<HTMLInputElement | null>
    ): React$Node => (
      <Wrapper className={className}>
        <Input
          defaultValue={defaultValue}
          id={inputId}
          isFocused={isFocused}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          ref={ref}
          value={value}
        />
        <Label htmlFor={inputId} id={labelId} isFocused={isFocused}>
          {label}
        </Label>
      </Wrapper>
    )
  )

InputText.displayName = "InputText"

export default InputText
