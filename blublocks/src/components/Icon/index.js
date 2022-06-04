// @flow

import Icon from "./Icon"
import ionIcons from "./ionIcons"
import { prepareComponent } from "@bluframe/grapple"

type IconGroup = "ion"

export type Props = {|
  +color?: string,
  +group: IconGroup,
  +name: string,
  +size?: string
|}

export type ComponentProps = {|
  +color?: string,
  +SelectedIcon: React$StatelessFunctionalComponent<*>,
  +size?: string
|}

const usePrepareComponent = ({
  color,
  group,
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
