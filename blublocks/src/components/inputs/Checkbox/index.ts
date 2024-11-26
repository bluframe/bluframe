import React, { ChangeEventHandler } from "react"
import Checkbox from "./Checkbox"
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
  onChange: ChangeEventHandler<HTMLInputElement>
}

const usePrepareComponent = (props: Props): ComponentProps => {
  const labelId = props.inputId && `${props.inputId}-label`

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.stopPropagation()

    props.onChange(props.value)
  }

  return {
    ...props,
    labelId,
    onChange
  }
}

export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Checkbox
)
