"use client"

import React, {
  ChangeEvent,
  FocusEvent,
  FormEventHandler,
  ForwardedRef,
  KeyboardEvent,
  useState
} from "react"
import InputText from "./InputText"
import { prepareComponent } from "@bluframe/grapple"

export interface Props {
  className?: string
  defaultValue?: string
  disabled?: boolean
  error?: boolean
  errorText?: string
  infoText?: string
  inputId?: string
  inputProps?: {
    "aria-activedescendant"?: string
    "aria-autocomplete"?: "list" | "none" | "inline" | "both"
    "aria-controls"?: string
    "aria-expanded"?: boolean
    "aria-labelledby"?: string
    autoComplete?: string
    id?: string
    // eslint-disable-next-line no-unused-vars
    onBlur?: (event: FocusEvent) => void
    // eslint-disable-next-line no-unused-vars
    onChange?: (event: ChangeEvent) => void
    role?: string
  }
  isFullBorder?: boolean
  label: React.ReactNode
  loading?: boolean
  max?: number
  min?: number
  // eslint-disable-next-line no-unused-vars
  onBlur?: (event: FocusEvent) => void
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: ChangeEvent) => void
  // eslint-disable-next-line no-unused-vars
  onKeyDown?: (event: KeyboardEvent) => void
  name: string
  ref?: ForwardedRef<HTMLInputElement>
  required?: boolean
  size?: number
  step?: string
  success?: boolean
  successText?: string
  type?: string
  value?: string
}

export interface ComponentProps extends Props {
  hasContent: boolean
  labelId?: string
  onInput: FormEventHandler<HTMLInputElement>
}

const ZERO = 0

const usePrepareComponent = (props: Props): ComponentProps => {
  const labelId = props.inputId && `${props.inputId}-label`
  const [hasValue, setHasValue] = useState<boolean | null>(null)

  const onBlur = (event: FocusEvent) => {
    if (props.onBlur) {
      props.onBlur(event)
    }

    if (props.inputProps?.onBlur) {
      props.inputProps.onBlur(event)
    }
  }

  const onChange = (event: ChangeEvent) => {
    if (props.onChange) {
      props.onChange(event)
    }

    if (props.inputProps?.onChange) {
      props.inputProps.onChange(event)
    }
  }

  const onInput: FormEventHandler<HTMLInputElement> = (event) => {
    // @ts-ignore
    setHasValue(event.target.value.length > ZERO)
  }

  const hasContent = Boolean(hasValue ?? props.defaultValue ?? props.value)

  return {
    ...props,
    hasContent,
    labelId,
    onBlur,
    onChange,
    onInput
  }
}

export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  InputText
)
