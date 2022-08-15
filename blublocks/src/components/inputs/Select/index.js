// @flow

import { useMemo, useState } from "react"
import Select from "./Select"
import type { SelectProps } from "@bluframe/blublocks"
import { prepareComponent } from "@bluframe/grapple"

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
  const [isOpen, setIsOpen] = useState(DEFAULT_IS_OPEN)

  const label = useMemo(() => {
    const selectedOption = props.options.find(
      (option) => option.value === props.selected
    )

    if (selectedOption) {
      return selectedOption.label
    }

    return ""
  }, [props.options, props.selected])

  const onToggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const onSelect = (value: number | string | null) => () => {
    props.onSelect(value)
    setIsOpen(false)
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
