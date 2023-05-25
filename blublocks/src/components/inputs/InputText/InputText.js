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
        isFullBorder,
        label,
        labelId,
        name,
        onBlur,
        onChange,
        value
      }: ComponentProps,
      ref: ElementRef<HTMLInputElement | null>
    ): React$Node => (
      <Wrapper className={className}>
        <Input
          defaultValue={defaultValue}
          id={inputId}
          isFullBorder={isFullBorder}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
          value={value}
        />
        <Label htmlFor={inputId} id={labelId} isFullBorder={isFullBorder}>
          {label}
        </Label>
      </Wrapper>
    )
  )

InputText.displayName = "InputText"

export default InputText
