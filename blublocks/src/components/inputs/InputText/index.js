// @flow

import InputText from "./InputText"
import type { InputTextProps } from "@bluframe/blublocks"
import { prepareComponent } from "@bluframe/grapple"

export type Props = {|
  ...InputTextProps
|}

export type ComponentProps = {|
  ...Props,
  +labelId?: string,
  +onBlur: (event: SyntheticEvent<*>) => void
|}

const usePrepareComponent = (props: Props): ComponentProps => {
  const labelId = props.inputId && `${props.inputId}-label`

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

  return {
    ...props,
    labelId,
    onBlur,
    onChange
  }
}

export default (prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  InputText
): React$ComponentType<Props>)
