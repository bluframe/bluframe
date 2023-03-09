// @flow

import Radio from "./Radio"
import type { RadioProps } from "@bluframe/blublocks"
import { prepareComponent } from "@bluframe/grapple"

export type Props = {|
  ...RadioProps
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
  Radio
): React$ComponentType<Props>)
