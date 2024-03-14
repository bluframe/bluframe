// @flow

import InputText from "./InputText"
import type { InputTextProps } from "@bluframe/blublocks"
import { prepareComponent } from "@bluframe/grapple"
import { useState } from "react"

export type Props = {|
  ...InputTextProps
|}

export type ComponentProps = {|
  ...Props,
  +hasContent: boolean,
  +labelId?: string,
  onInput: (event: SyntheticInputEvent<HTMLInputElement>) => void
|}

const ZERO = 0

const usePrepareComponent = (props: Props): ComponentProps => {
  const labelId = props.inputId && `${props.inputId}-label`
  const [hasValue, setHasValue] = useState(null)

  const onBlur = (event: SyntheticEvent<*>) => {
    if (props.onBlur) {
      props.onBlur(event)
    }
  }

  const onChange = (event) => {
    if (props.onChange) {
      props.onChange(event)
    }
  }

  const onInput = (event) => {
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

export default (prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  InputText
): React$AbstractComponent<Props, HTMLInputElement>)
