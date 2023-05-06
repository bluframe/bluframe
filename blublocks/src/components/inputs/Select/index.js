// @flow

import { prepareComponent, useToggle } from "@bluframe/grapple"
import Select from "./Select"
import type { SelectProps } from "@bluframe/blublocks"
import { useMemo } from "react"

export type Props = {|
  ...SelectProps
|}

export type ComponentProps = {|
  ...SelectProps,
  +displayValue: string | React$Node,
  +isLabelShrunk: boolean,
  +isOpen: boolean,
  +onSelect: (value: number | string | null) => () => void,
  +onToggleIsOpen: () => void
|}

const DEFAULT_IS_OPEN = false

const usePrepareComponent = (props: Props): ComponentProps => {
  const [isOpen, toggleIsOpen] = useToggle(DEFAULT_IS_OPEN)

  // Get displayValue and isLabelShrunk
  const [displayValue, isLabelShrunk] = useMemo(() => {
    // Get selected option
    const selectedOption = props.options.find(
      (option) => option.value === props.selected
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
  }, [props.options, props.selected, props.placeholder, isOpen])

  const onToggleIsOpen = () => {
    // Toggle options dropdown
    toggleIsOpen()
  }

  const onSelect = (value: number | string | null) => () => {
    // Select via onSelect from props
    props.onSelect(value)

    // If open close options dropdown
    if (isOpen) {
      toggleIsOpen()
    }
  }

  return {
    ...props,
    displayValue,
    isLabelShrunk,
    isOpen,
    onSelect,
    onToggleIsOpen
  }
}

export default (prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Select
): React$ComponentType<Props>)
