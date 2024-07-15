import Hamburger from "./Hamburger"

export interface Props {
  isMenuExpanded?: boolean
  menuId?: string
  onClick?: () => void
}

export interface ComponentProps extends Props {}

export default Hamburger
