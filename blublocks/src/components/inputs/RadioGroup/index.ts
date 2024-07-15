import React, { useMemo } from "react"
import RadioGroup from "./RadioGroup"
import { prepareComponent } from "@bluframe/grapple"

export type OptionValue = number | string

export interface Option {
  label: React.ReactNode
  value: OptionValue
}

export interface Props {
  className?: string
  label: React.ReactNode
  name: string
  // eslint-disable-next-line no-unused-vars
  onChange: (value: OptionValue) => void
  options: Option[]
  selected: OptionValue | null
}

export interface ComponentProps extends Props {
  groupId: string
  labelId: string
}

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

export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  RadioGroup
)
