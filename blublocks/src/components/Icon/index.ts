import Icon from "./Icon"
import { IconType } from "react-icons"
import fa6Icons from "./fa6Icons"
import ionIcons from "./ionIcons"
import { prepareComponent } from "@bluframe/grapple"

export type IconGroupName = "fa6" | "io5"

export interface Props {
  ariaHidden?: boolean
  color?: string
  group?: IconGroupName
  name: keyof typeof fa6Icons | keyof typeof ionIcons
  size?: string
  title?: string
}

export interface ComponentProps extends Omit<Props, "group" | "name"> {
  SelectedIcon: IconType | (() => null)
}

const isIonIcon = (name: Props["name"]): name is keyof typeof ionIcons => {
  return name in ionIcons
}

const isFaIcon = (name: Props["name"]): name is keyof typeof fa6Icons => {
  return name in fa6Icons
}

const usePrepareComponent = ({
  group = "io5",
  name,
  ...props
}: Props): ComponentProps => {
  if (group === "io5" && isIonIcon(name)) {
    return {
      ...props,
      SelectedIcon: ionIcons[name]
    }
  }

  if (group === "fa6" && isFaIcon(name)) {
    return {
      ...props,
      SelectedIcon: fa6Icons[name]
    }
  }

  return {
    ...props,
    SelectedIcon: () => null
  }
}

export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Icon
)
