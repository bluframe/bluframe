// @flow

import styled, { type StyledComponent } from "styled-components"

type Props = {|
  +center?: boolean
|}

const Row: StyledComponent<Props, mixed, HTMLDivElement> = styled.div`
  ${({ center }) => center && "text-align: center"};
`

export default Row
