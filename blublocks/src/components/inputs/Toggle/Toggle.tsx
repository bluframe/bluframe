import { ForwardedRef, forwardRef } from "react"
import { Input, Label, Wrapper } from "./styled"
import { ComponentProps } from "."

const Toggle = forwardRef(
  (
    {
      checked,
      className,
      defaultChecked,
      disabled = false,
      inputId,
      labelId,
      name,
      onChange,
      onKeyDown
    }: ComponentProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <Wrapper className={className}>
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
      <Label
        aria-checked={checked}
        aria-disabled={disabled}
        htmlFor={inputId}
        id={labelId}
        onKeyDown={onKeyDown}
        role="switch"
        tabIndex={0}
      />
    </Wrapper>
  )
)

Toggle.displayName = "Toggle"

export default Toggle
