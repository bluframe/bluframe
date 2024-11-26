import { Props as IconProps } from "components/Icon"
import SocialLink from "./SocialLink"

export interface Props {
  iconGroup: IconProps["group"]
  iconName: IconProps["name"]
  link: string
  name: string
  platformName: string
}

export interface ComponentProps extends Props {}

export default SocialLink
