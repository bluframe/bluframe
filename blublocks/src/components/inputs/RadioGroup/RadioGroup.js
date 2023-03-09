// @flow

import { Label, Options, Wrapper } from "./styled"
import type { ComponentProps } from "."
import Radio from "components/inputs/Radio"
import React from "react"

const RadioGroup = ({
  className,
  groupId,
  label,
  labelId,
  name,
  onChange,
  options,
  selected
}: ComponentProps): React$Node => (
  <Wrapper
    aria-labelledby={labelId}
    className={className}
    id={groupId}
    role="radiogroup"
  >
    <Label id={labelId}>{label}</Label>
    <Options>
      {options.map((option) => (
        <Radio
          {...option}
          inputId={`${groupId}-${option.value}`}
          isChecked={option.value === selected}
          key={option.value}
          name={name}
          onChange={onChange}
        />
      ))}
    </Options>
  </Wrapper>
)

export default RadioGroup
