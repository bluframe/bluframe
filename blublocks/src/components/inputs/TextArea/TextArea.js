// @flow
/* eslint-disable no-ternary */

import { Label, TextAreaInput, TextAreaWrapper } from "./styled"
import React, { type ElementRef, forwardRef } from "react"
import type { ComponentProps } from "."

const DEFAULT_COLS = 50
const DEFAULT_ROWS = 10

const TextArea: React$AbstractComponent<ComponentProps, React$Node> =
  forwardRef(
    (
      {
        className,
        cols = DEFAULT_COLS,
        defaultValue,
        inputId,
        label,
        labelId,
        name,
        onBlur,
        onChange,
        placeholder,
        required,
        rows = DEFAULT_ROWS,
        value
      }: ComponentProps,
      ref: ElementRef<HTMLInputElement | null>
    ): React$Node => (
      <TextAreaWrapper className={className}>
        <TextAreaInput
          aria-labelledby={labelId}
          cols={cols}
          defaultValue={defaultValue}
          id={inputId}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
          required={required}
          rows={rows}
          value={value}
        />
        {label ? (
          <Label htmlFor={inputId} id={labelId}>
            {label}
          </Label>
        ) : null}
      </TextAreaWrapper>
    )
  )

TextArea.displayName = "TextArea"

export default TextArea
