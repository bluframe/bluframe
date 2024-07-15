import { Buttons, Content, Message } from "./styled"
import Button from "components/buttons/Button"
import type { ComponentProps } from "."
import React from "react"

const AlertModal = ({ message, onOkay }: ComponentProps) => (
  <Content>
    <Message>{message}</Message>
    <Buttons>
      <Button label="Okay" onClick={onOkay} />
    </Buttons>
  </Content>
)

export default AlertModal
