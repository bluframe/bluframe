// @flow

import Checkbox from "./Checkbox"
import type { CheckboxProps } from "@bluframe/blublocks"
import { prepareComponent } from "@bluframe/grapple"

export type Props = {|
  ...CheckboxProps
|}

export type ComponentProps = {|
  ...Props,
  +labelId?: string
|}

const usePrepareComponent = (props: Props): ComponentProps => {
  const labelId = props.inputId && `${props.inputId}-label`

  const onChange = () => {
    props.onChange(props.value)
  }

  return {
    ...props,
    labelId,
    onChange
  }
}

export default (prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Checkbox
): React$ComponentType<Props>)
