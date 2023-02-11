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
  +isOpen: boolean,
  +label: string,
  +onSelect: (value: number | string | null) => () => void,
  +onToggleIsOpen: () => void
|}

const DEFAULT_IS_OPEN = false

const usePrepareComponent = (props: Props): ComponentProps => {
  const [isOpen, toggleIsOpen] = useToggle(DEFAULT_IS_OPEN)

  // Get label
  const label = useMemo(() => {
    // Get selected option
    const selectedOption = props.options.find(
      (option) => option.value === props.selected
    )

    // Return label from selected option
    if (selectedOption) {
      return selectedOption.label
    }

    // Return empty label
    return ""
  }, [props.options, props.selected])

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
    isOpen,
    label,
    onSelect,
    onToggleIsOpen
  }
}

export default (prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Select
): React$ComponentType<Props>)
