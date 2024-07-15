/* eslint-disable no-ternary, max-lines-per-function */

import {
  ErrorText,
  InfoText,
  Input,
  Label,
  SuccessText,
  Wrapper
} from "./styled"
import { ForwardedRef, forwardRef } from "react"
import { ComponentProps } from "."

const InputText = forwardRef(
  (
    {
      className,
      defaultValue,
      disabled,
      error,
      errorText,
      hasContent,
      infoText,
      inputId,
      inputProps,
      isFullBorder,
      label,
      labelId,
      max,
      min,
      name,
      onBlur,
      onChange,
      onInput,
      onKeyDown,
      required,
      step,
      success,
      successText,
      type = "text",
      value
    }: ComponentProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <Wrapper className={className}>
      <Input
        {...inputProps}
        $error={error}
        $hasContent={hasContent}
        $success={success}
        aria-invalid={error ? "true" : "false"}
        defaultValue={defaultValue}
        disabled={disabled}
        id={inputId}
        isFullBorder={isFullBorder}
        max={max}
        min={min}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onInput={onInput}
        onKeyDown={onKeyDown}
        ref={ref}
        required={required}
        step={step}
        type={type}
        value={value}
      />
      <Label htmlFor={inputId} id={labelId} isFullBorder={isFullBorder}>
        {label}
      </Label>
      {errorText ? <ErrorText role="alert">{errorText}</ErrorText> : null}
      {infoText ? <InfoText aria-live="polite">{infoText}</InfoText> : null}
      {successText ? (
        <SuccessText aria-live="polite">{successText}</SuccessText>
      ) : null}
    </Wrapper>
  )
)

InputText.displayName = "InputText"

export default InputText
