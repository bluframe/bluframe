// @flow

import RadioGroup from "./RadioGroup"
import type { RadioGroupProps } from "@bluframe/blublocks"
import { prepareComponent } from "@bluframe/grapple"
import { useMemo } from "react"

export type Props = {|
  ...RadioGroupProps
|}

export type ComponentProps = {|
  ...Props,
  +groupId: string,
  +labelId: string
|}

const FIRST = 0

const usePrepareComponent = (props: Props): ComponentProps => {
  const groupId = `${props.name}-radiogroup`
  const labelId = `${groupId}-label`

  // Auto select first option if no selected option is provided
  const selected = useMemo(() => {
    if (props.selected) {
      return props.selected
    }

    if (!props.options.length) {
      return null
    }

    return props.options[FIRST].value
  }, [props.options, props.selected])

  return {
    ...props,
    groupId,
    labelId,
    selected
  }
}

export default (prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  RadioGroup
): React$ComponentType<Props>)
