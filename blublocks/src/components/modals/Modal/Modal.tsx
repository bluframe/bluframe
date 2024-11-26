/* eslint-disable react/jsx-no-bind, no-ternary */

import { Container, Content, Top, Wrapper } from "./styled"
import Button from "components/buttons/Button"
import { ComponentProps } from "."
import Icon from "components/Icon"

const Modal = ({ children, isOpen, name, onClose }: ComponentProps) => (
  <Wrapper
    $isOpen={isOpen}
    aria-label={name ? `${name} Modal` : "Modal"}
    onClick={onClose}
    role="presentation"
  >
    <Container
      aria-label={name ? `${name} Dialog` : "Dialog"}
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
