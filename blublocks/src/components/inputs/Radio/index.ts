import React, { MouseEventHandler } from "react"
import Radio from "./Radio"
import { prepareComponent } from "@bluframe/grapple"

export type OptionValue = number | string

export interface Props {
  inputId?: string
  isChecked: boolean
  label: React.ReactNode
  name: string
  // eslint-disable-next-line no-unused-vars
  onChange: (value: OptionValue) => void
  value: OptionValue
}

export interface ComponentProps extends Omit<Props, "onChange"> {
  labelId?: string
  onClick: MouseEventHandler<HTMLElement>
}

const usePrepareComponent = (props: Props): ComponentProps => {
  const labelId = props.inputId && `${props.inputId}-label`

  const onClick = () => {
    props.onChange(props.value)
  }

  return {
    ...props,
    labelId,
    onClick
  }
}

export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Radio
)
