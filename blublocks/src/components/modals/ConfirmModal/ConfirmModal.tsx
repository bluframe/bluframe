/* eslint-disable no-ternary */

import { Buttons, Content, Message } from "./styled"
import Button from "components/buttons/Button"
import { ComponentProps } from "."

const ConfirmModal = ({
  cancelLabel,
  confirmLabel,
  isDisabled,
  isLoading,
  message,
  onClose,
  onConfirm
}: ComponentProps) => (
  <Content>
    {typeof message === "string" ? <Message>{message}</Message> : message}
    <Buttons>
      <Button
        disabled={isDisabled || isLoading}
        label={cancelLabel ?? "Cancel"}
        onClick={onClose}
        outlined
      />
      <Button
        disabled={isDisabled || isLoading}
        label={confirmLabel ?? "Confirm"}
        loading={isLoading}
        onClick={onConfirm}
      />
    </Buttons>
  </Content>
)

export default ConfirmModal
