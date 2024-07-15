/* eslint-disable no-ternary */

import { Buttons, Content, Message } from "./styled"
import Button from "components/buttons/Button"
import { ComponentProps } from "."
import React from "react"

const ConfirmModal = ({
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
        label="Cancel"
        onClick={onClose}
        outlined
      />
      <Button
        disabled={isDisabled || isLoading}
        label="Confirm"
        loading={isLoading}
        onClick={onConfirm}
      />
    </Buttons>
  </Content>
)

export default ConfirmModal
