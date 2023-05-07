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
  +isFocused: boolean,
  +labelId?: string,
  +onBlur: () => void,
  +onFocus: () => void
|}

const usePrepareComponent = (props: Props): ComponentProps => {
  const [isFocused, setIsFocused] = useState(false)
  const labelId = props.inputId && `${props.inputId}-label`

  const onFocus = () => {
    setIsFocused(true)
  }

  const onBlur = () => {
    setIsFocused(false)

    if (props.onBlur) {
      props.onBlur()
    }
  }

  const onChange = (event) => {
    if (props.onChange) {
      props.onChange(event)
    }
  }

  return {
    ...props,
    isFocused,
    labelId,
    onBlur,
    onChange,
    onFocus
  }
}

export default (prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  InputText
): React$ComponentType<Props>)
