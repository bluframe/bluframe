/* eslint-disable no-ternary */

import { Icon, Input, Label, Polyline, StyledCheckbox, Wrapper } from "./styled"
import { ComponentProps } from "."

const Checkbox = ({
  inputId,
  isChecked,
  label,
  labelId,
  name,
  onChange,
  value
}: ComponentProps) => (
  <Wrapper>
    <Input
      defaultChecked={isChecked}
      id={inputId}
      name={name}
      onChange={onChange}
      value={value}
    />

    <StyledCheckbox
      $checked={isChecked}
      aria-checked={isChecked}
      aria-labelledby={labelId}
      htmlFor={inputId}
      role="checkbox"
    >
      <Icon viewBox="0 0 24 24">
        <Polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>

    <Label htmlFor={inputId} id={labelId}>
      {label}
    </Label>
  </Wrapper>
)

export default Checkbox
