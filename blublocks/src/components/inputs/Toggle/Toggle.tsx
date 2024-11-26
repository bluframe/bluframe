/* eslint-disable no-ternary */

import { ForwardedRef, forwardRef } from "react"
import { Input, Label, Switch, SwitchAndLabel, Wrapper } from "./styled"
import { ComponentProps } from "."

const Toggle = forwardRef(
  (
    {
      checked,
      className,
      defaultChecked,
      disabled = false,
      inputId,
      label,
      labelId,
      name,
      onChange,
      onKeyDown,
      switchId
    }: ComponentProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <Wrapper className={className}>
      <SwitchAndLabel $hasLabel={Boolean(label)}>
        <Input
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          id={inputId}
          name={name}
          onChange={onChange}
          ref={ref}
          type="checkbox"
        />
        <Switch
          aria-checked={checked}
          aria-disabled={disabled}
          aria-labelledby={labelId}
          htmlFor={inputId}
          id={switchId}
          onKeyDown={onKeyDown}
          role="switch"
          tabIndex={0}
        />
        {label ? (
          <Label htmlFor={inputId} id={labelId}>
            {label}
          </Label>
        ) : null}
      </SwitchAndLabel>
    </Wrapper>
  )
)

Toggle.displayName = "Toggle"

export default Toggle
