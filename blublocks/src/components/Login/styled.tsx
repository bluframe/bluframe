import styled from "styled-components"
import H1 from "components/Typography/H1"
import { Theme } from "styles/theme"

export const Container = styled.div`
  background: ${({ theme }: { theme: Theme }) => theme.palette.text.contrast};
  display: grid;
  justify-items: center;
  padding: 36px 48px;
  row-gap: 16px;
  width: 100%;
`

export const Form = styled.form`
  display: grid;
  justify-items: center;
  row-gap: 36px;
`

export const Inputs = styled.div`
  display: grid;
  row-gap: 16px;
`

export const Heading = styled(H1)`
  font-size: 24px;
`
