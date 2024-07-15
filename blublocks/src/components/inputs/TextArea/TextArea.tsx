/* eslint-disable no-ternary, max-lines-per-function */

import {
  ErrorText,
  InfoText,
  Label,
  SuccessText,
  TextAreaInput,
  TextAreaWrapper
} from "./styled"
import React, { ForwardedRef, forwardRef } from "react"
import { ComponentProps } from "."

const DEFAULT_COLS = 50
const DEFAULT_ROWS = 10

const TextArea = forwardRef(
  (
    {
      className,
      cols = DEFAULT_COLS,
      defaultValue,
      disabled,
      error,
      errorText,
      infoText,
      inputId,
      isExpanded,
      label,
      labelId,
      name,
      onBlur,
      onChange,
      placeholder,
      required,
      rows = DEFAULT_ROWS,
      success,
      successText,
      value
    }: ComponentProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => (
    <TextAreaWrapper $isExpanded={isExpanded} className={className}>
      <TextAreaInput
        $error={error}
        $success={success}
        aria-labelledby={labelId}
        cols={cols}
        defaultValue={defaultValue}
        disabled={disabled}
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
      {errorText ? <ErrorText role="alert">{errorText}</ErrorText> : null}
      {infoText ? (
        <InfoText aria-live="polite">{infoText}</InfoText>
      ) : null}{" "}
      {successText ? (
        <SuccessText aria-live="polite">{successText}</SuccessText>
      ) : null}
    </TextAreaWrapper>
  )
)

TextArea.displayName = "TextArea"

export default TextArea
