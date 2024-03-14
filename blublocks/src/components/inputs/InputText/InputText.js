// @flow
/* eslint-disable no-ternary */

import { HelperText, Input, Label, Wrapper } from "./styled"
import React, { type ElementRef, forwardRef } from "react"
import type { ComponentProps } from "."

const InputText: React$AbstractComponent<ComponentProps, React$Node> =
  forwardRef(
    (
      {
        className,
        defaultValue,
        error,
        hasContent,
        helperText,
        inputId,
        isFullBorder,
        label,
        labelId,
        name,
        onBlur,
        onChange,
        onInput,
        required,
        step,
        type = "text",
        value
      }: ComponentProps,
      ref: ElementRef<HTMLInputElement | null>
    ): React$Node => (
      <Wrapper className={className}>
        <Input
          $error={error}
          $hasContent={hasContent}
          aria-invalid={error ? "true" : "false"}
          defaultValue={defaultValue}
          id={inputId}
          isFullBorder={isFullBorder}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onInput={onInput}
          ref={ref}
          required={required}
          step={step}
          type={type}
          value={value}
        />
        <Label htmlFor={inputId} id={labelId} isFullBorder={isFullBorder}>
          {label}
        </Label>
        {error ? <HelperText role="alert">{helperText}</HelperText> : null}
      </Wrapper>
    )
  )

InputText.displayName = "InputText"

export default InputText
