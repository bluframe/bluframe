/* eslint-disable no-ternary */

import { Circle, Input, Label, Wrapper } from "./styled"
import { ComponentProps } from "."

const Radio = ({
  inputId,
  isChecked,
  label,
  labelId,
  name,
  onClick,
  value
}: ComponentProps) => (
  <Wrapper onClick={onClick}>
    <Circle
      aria-checked={isChecked}
      aria-labelledby={labelId}
      checked={isChecked}
      id={inputId}
      role="radio"
    />

    <Input defaultChecked={isChecked} name={name} value={value} />

    <Label id={labelId}>{label}</Label>
  </Wrapper>
)

export default Radio
