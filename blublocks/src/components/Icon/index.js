// @flow

import Icon from "./Icon"
import type { IconProps } from "@bluframe/blublocks"
import ionIcons from "./ionIcons"
import { prepareComponent } from "@bluframe/grapple"

export type Props = {|
  ...IconProps
|}

export type ComponentProps = {|
  +color?: string,
  +SelectedIcon: React$StatelessFunctionalComponent<*>,
  +size?: string
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
): React$AbstractComponent<Props, any>)
