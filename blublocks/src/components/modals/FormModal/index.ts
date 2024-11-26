import React, { FormEventHandler } from "react"
import FormModal from "./FormModal"

export interface Props {
  cancelLabel?: string
  children: React.ReactNode
  isDisabled?: boolean
  isLoading?: boolean
  onClose: () => void
  onSubmit: FormEventHandler<HTMLFormElement>
  submitLabel?: string
}

export interface ComponentProps extends Props {}

export default FormModal
