import { ComponentProps } from "."

const Icon = ({
  ariaHidden,
  color,
  SelectedIcon,
  size = "16px",
  title
}: ComponentProps) => (
  <SelectedIcon
    aria-hidden={ariaHidden}
    color={color}
    size={size}
    title={title}
  />
)

export default Icon
