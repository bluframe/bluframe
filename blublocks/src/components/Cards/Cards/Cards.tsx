import { Li, Ul } from "./styled"
import Card from "components/Cards/Card"
import { ComponentProps } from "."

const ONE = 1

const Cards = ({ ariaLabel = "Cards", cards, className }: ComponentProps) => (
  <Ul aria-label={ariaLabel} className={className}>
    {cards.map((card, index) => (
      <Li aria-label={`${ariaLabel} ${index + ONE}`} key={card.heading}>
        <Card {...card} />
      </Li>
    ))}
  </Ul>
)

export default Cards
