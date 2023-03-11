// @flow

import type { IconProps, SelectedIconProps } from "@bluframe/blublocks"
import Icon from "./Icon"
import ionIcons from "./ionIcons"
import { prepareComponent } from "@bluframe/grapple"

export type Props = {|
  ...IconProps
|}

export type ComponentProps = {|
  ...SelectedIconProps,
  +SelectedIcon: React$ComponentType<SelectedIconProps>
|}

const usePrepareComponent = ({
  color,
  group = "ion",
  name,
  size
}: Props): ComponentProps => {
  if (group === "ion" && ionIcons[name]) {
    return {
      SelectedIcon: ionIcons[name],
      color,
      size
    }
  }

  return {
    SelectedIcon: () => null,
    color,
    size
  }
}

export default (prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Icon
): React$ComponentType<Props>)
