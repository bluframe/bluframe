import ConfirmModal from "./ConfirmModal"
import React from "react"

export interface Props {
  cancelLabel?: string
  confirmLabel?: string
  isDisabled?: boolean
  isLoading?: boolean
  onClose: () => void
  onConfirm: () => void
  message: string | React.ReactNode
}

export interface ComponentProps extends Props {}

export default ConfirmModal
