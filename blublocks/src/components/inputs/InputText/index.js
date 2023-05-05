// @flow

import InputText from "./InputText"
import type { InputTextProps } from "@bluframe/blublocks"
import { prepareComponent } from "@bluframe/grapple"

export type Props = {|
  ...InputTextProps
|}

export type ComponentProps = {|
  ...Props,
  +labelId?: string
|}

const usePrepareComponent = (props: Props): ComponentProps => {
  const labelId = props.inputId && `${props.inputId}-label`

  return {
    ...props,
    labelId
  }
}

export default (prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  InputText
): React$ComponentType<Props>)
