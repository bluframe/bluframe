// @flow
import TextArea from "./TextArea"
import type { TextAreaProps } from "@bluframe/blublocks"
import { prepareComponent } from "@bluframe/grapple"

export type Props = {|
  ...TextAreaProps
|}

export type ComponentProps = {|
  ...Props,
  +labelId?: string
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
  TextArea
): React$AbstractComponent<Props, HTMLInputElement>)
