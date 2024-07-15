import AlertModal from "./AlertModal"

export interface Props {
  onOkay: () => void
  message: string
}

export interface ComponentProps extends Props {}

export default AlertModal
