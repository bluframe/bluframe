import { Body, Buttons, Content } from "./styled"
import Button from "components/buttons/Button"
import { ComponentProps } from "."

const FormModal = ({
  cancelLabel,
  children,
  isDisabled,
  isLoading,
  onClose,
  onSubmit,
  submitLabel
}: ComponentProps) => (
  <form onSubmit={onSubmit}>
    <Content>
      <Body>{children}</Body>
      <Buttons>
        <Button
          disabled={isDisabled || isLoading}
          label={cancelLabel ?? "Cancel"}
          onClick={onClose}
          outlined
        />
        <Button
          disabled={isDisabled || isLoading}
          label={submitLabel ?? "Submit"}
          loading={isLoading}
          type="submit"
        />
      </Buttons>
    </Content>
  </form>
)

export default FormModal
