import Badge from "./Badge"
import { Palette } from "styles/theme"

export interface Props {
  className?: string
  color?: keyof Palette
  label: string
}

export interface ComponentProps extends Props {}

export default Badge
