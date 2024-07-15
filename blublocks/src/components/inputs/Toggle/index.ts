import { ChangeEventHandler, ForwardedRef, KeyboardEventHandler } from "react"
import Toggle from "./Toggle"
import prepareComponent from "@bluframe/grapple/prepareComponent"

export interface Props {
  checked?: boolean
  className?: string
  disabled?: boolean
  defaultChecked?: boolean
  inputId?: string
  name: string
  // eslint-disable-next-line no-unused-vars
  onChange?: (checked: boolean) => void
  ref?: ForwardedRef<HTMLInputElement>
}

export interface ComponentProps extends Omit<Props, "onChange"> {
  labelId?: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onKeyDown: KeyboardEventHandler<HTMLLabelElement>
}

const usePrepareComponent = (props: Props): ComponentProps => {
  if (props.checked !== undefined && props.defaultChecked !== undefined) {
    throw new Error("Toggle: cannot have both checked and defaultChecked props")
  }

  if (props.defaultChecked !== undefined && props.onChange) {
    throw new Error(
      "Toggle: cannot have defaultChecked prop with onChange prop"
    )
  }

  const labelId = props.inputId && `${props.inputId}-label`

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    props.onChange?.(event.target.checked)
  }

  const onKeyDown: KeyboardEventHandler<HTMLLabelElement> = (event) => {
    if (event.key === " " || event.key === "Enter") {
      if (!props.disabled) {
        event.currentTarget.parentElement?.querySelector("input")?.click()
      }
    }
  }

  return {
    ...props,
    labelId,
    onChange,
    onKeyDown
  }
}

export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Toggle
)
