import { Props as CardProps } from "components/Cards/Card"
import Cards from "./Cards"

export interface Props {
  ariaLabel?: string
  cards: CardProps[]
  className?: string
}

export interface ComponentProps extends Props {}

export default Cards
