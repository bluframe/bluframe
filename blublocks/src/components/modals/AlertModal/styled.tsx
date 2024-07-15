import styled from "styled-components"
import Paragraph from "components/Typography/Paragraph"

export const Content = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 16px;
`

export const Buttons = styled.div`
  display: grid;
`

export const Message = styled(Paragraph)`
  text-align: center;
`
