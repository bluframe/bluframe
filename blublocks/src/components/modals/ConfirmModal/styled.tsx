import styled from "styled-components"
import Paragraph from "components/Typography/Paragraph"

export const Content = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 16px;
`

export const Buttons = styled.div`
  column-gap: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Message = styled(Paragraph)`
  text-align: center;
`
