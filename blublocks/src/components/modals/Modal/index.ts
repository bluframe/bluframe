import Modal from "./Modal"
import React from "react"

export interface Props {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

export interface ComponentProps extends Props {}

export default Modal
