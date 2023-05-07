// @flow
/* eslint-disable max-lines-per-function */

import type { OptionValue, SelectProps } from "@bluframe/blublocks"
import { prepareComponent, useToggle } from "@bluframe/grapple"
import Select from "./Select"
import { useMemo } from "react"

export type Props = {|
  ...SelectProps
|}

export type ComponentProps = {|
  ...SelectProps,
  +displayValue: string | React$Node,
  +isControlled: boolean,
  +isLabelShrunk: boolean,
  +isOpen: boolean,
  +onChange: (value: OptionValue | null) => () => void,
  +onToggleIsOpen: () => void
|}

const DEFAULT_IS_OPEN = false

const usePrepareComponent = (props: Props): ComponentProps => {
  const [isOpen, toggleIsOpen] = useToggle(DEFAULT_IS_OPEN)

  // Determine if the component is controlled
  const isControlled = props.value !== undefined

  // Get displayValue and isLabelShrunk
  const [displayValue, isLabelShrunk] = useMemo(() => {
    // Get selected option
    const selectedOption = props.options.find(
      (option) =>
        (!isControlled && option.value === props.defaultValue) ||
        option.value === props.value
    )

    // If selected option exists, return its label and shrink the label
    if (selectedOption) {
      return [selectedOption.label, true]
    }

    // If no selected option and placeholder exists, return placeholder and shrink the label
    if (props.placeholder) {
      return [props.placeholder, true]
    }

    // Otherwise, return the label and shrink it when options are open
    return ["", isOpen]
  }, [
    props.defaultValue,
    props.options,
    props.value,
    props.placeholder,
    isControlled,
    isOpen
  ])

  const onToggleIsOpen = () => {
    // Toggle options dropdown
    toggleIsOpen()
  }

  const onChange = (value: OptionValue | null) => () => {
    // Select via onSelect from props
    props.onChange(value)

    if (props.onBlur) {
      props.onBlur()
    }

    // If open close options dropdown
    if (isOpen) {
      toggleIsOpen()
    }
  }

  return {
    ...props,
    displayValue,
    isControlled,
    isLabelShrunk,
    isOpen,
    onChange,
    onToggleIsOpen
  }
}

export default (prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Select
): React$ComponentType<Props>)
