import { Heading, Main, Wrapper } from "./styled"
import { ComponentProps } from "."

const Card = ({ children, heading, headingId, id }: ComponentProps) => (
  <Wrapper aria-labelledby={headingId} id={id} role="region">
    <Heading id={headingId}>{heading}</Heading>
    <Main>{children}</Main>
  </Wrapper>
)

export default Card
