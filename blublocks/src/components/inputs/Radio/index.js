// @flow

import Radio from "./Radio"
import { prepareComponent } from "@bluframe/grapple"

export type Props = {|
  +inputId?: string,
  +isChecked: boolean,
  +label: string,
  +name: string
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
  Radio
): React$ComponentType<Props>)
