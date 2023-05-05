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
  +onChange: (event: SyntheticKeyboardEvent<HTMLInputElement>) => void,
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
  }

  const onChange = (event) => {
    props.onChange(event.currentTarget.value)
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
