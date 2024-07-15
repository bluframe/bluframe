import React, { ChangeEvent, FocusEvent, ForwardedRef } from "react"
import TextArea from "./TextArea"
import { prepareComponent } from "@bluframe/grapple"

export interface Props {
  className?: string
  cols?: number
  defaultValue?: string
  disabled?: boolean
  error?: boolean
  errorText?: string
  infoText?: string
  inputId?: string
  isExpanded?: boolean
  isFullBorder?: boolean
  label?: React.ReactNode
  // eslint-disable-next-line no-unused-vars
  onBlur?: (event: FocusEvent) => void
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: ChangeEvent) => void
  name: string
  placeholder?: string
  ref?: ForwardedRef<HTMLTextAreaElement>
  required?: boolean
  rows?: number
  success?: boolean
  successText?: string
  type?: string
  value?: string
}

export interface ComponentProps extends Props {
  labelId?: string
}

const usePrepareComponent = (props: Props): ComponentProps => {
  const labelId = props.inputId && `${props.inputId}-label`

  const onBlur = (event: FocusEvent) => {
    if (props.onBlur) {
      props.onBlur(event)
    }
  }

  const onChange = (event: ChangeEvent) => {
    if (props.onChange) {
      props.onChange(event)
    }
  }

  return {
    ...props,
    labelId,
    onBlur,
    onChange
  }
}

export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  TextArea
)
