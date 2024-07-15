/* eslint-disable no-ternary */

import styled from "styled-components"
import { Theme } from "styles/theme"

export const Wrapper = styled.div`
  display: grid;
  row-gap: 8px;
`

export const Label = styled.label`
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.main};
  font-size: 16px;
`

export const Options = styled.div`
  display: grid;
  row-gap: 4px;
`
