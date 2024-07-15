/* eslint-disable react/jsx-no-bind */

import { Container, Content, Top, Wrapper } from "./styled"
import Button from "components/buttons/Button"
import type { ComponentProps } from "."
import Icon from "components/Icon"
import React from "react"

const Modal = ({ children, isOpen, onClose }: ComponentProps) => (
  <Wrapper $isOpen={isOpen} onClick={onClose} role="presentation">
    <Container
      aria-modal="true"
      onClick={(event) => event.stopPropagation()}
      role="dialog"
    >
      <Top>
        <Button
          icon={<Icon name="IoClose" size="24px" />}
          iconOnly
          label="Close Dialog"
          onClick={onClose}
          transparent
        />
      </Top>
      <Content>{children}</Content>
    </Container>
  </Wrapper>
)

export default Modal
