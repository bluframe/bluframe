/* eslint-disable max-lines-per-function */

import React, {
  FocusEventHandler,
  ForwardedRef,
  RefObject,
  useMemo,
  useRef
} from "react"
import { prepareComponent, useToggle } from "@bluframe/grapple"
import Select from "./Select"

export type OptionValue = number | string

export interface Option {
  label: React.ReactNode
  value: OptionValue
}

export interface Props {
  defaultValue?: string
  className?: string
  label: React.ReactNode
  name: string
  onBlur?: FocusEventHandler
  // eslint-disable-next-line no-unused-vars
  onChange: (value: OptionValue | null) => void
  options: Option[]
  placeholder?: string
  ref?: ForwardedRef<HTMLInputElement>
  value?: OptionValue | null
}

export interface ComponentProps extends Props {
  displayValue: React.ReactNode
  isControlled: boolean
  isLabelShrunk: boolean
  isOpen: boolean
  // eslint-disable-next-line no-unused-vars
  onChange: (value: OptionValue | null) => () => void
  onToggleIsOpen: () => void
  wrapperRef: RefObject<HTMLDivElement>
}

const DEFAULT_IS_OPEN = false

const usePrepareComponent = (props: Props): ComponentProps => {
  const [isOpen, toggleIsOpen] = useToggle(DEFAULT_IS_OPEN)

  // Determine if the component is controlled
  const isControlled = props.value !== undefined

  const wrapperRef = useRef<HTMLDivElement>(null)

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

  const onBlur: FocusEventHandler = (event) => {
    if (props.onBlur) {
      props.onBlur(event)
    }
  }

  const onToggleIsOpen = () => {
    // If the dropdown is currently open and is being closed by a click, trigger onBlur
    if (isOpen) {
      if (wrapperRef.current) {
        wrapperRef.current.blur()
      }
    }

    // Toggle options dropdown
    toggleIsOpen()
  }

  const onChange = (value: OptionValue | null) => () => {
    // Select via onSelect from props
    props.onChange(value)

    // If open close options dropdown
    if (isOpen) {
      onToggleIsOpen()
    }
  }

  return {
    ...props,
    displayValue,
    isControlled,
    isLabelShrunk,
    isOpen,
    onBlur,
    onChange,
    onToggleIsOpen,
    wrapperRef
  }
}

export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Select
)
