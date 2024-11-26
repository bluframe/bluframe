import H5 from "components/Typography/H5"
import { Theme } from "styles/theme"
import styled from "styled-components"

export const Wrapper = styled.div`
  background: ${({ theme }: { theme: Theme }) => theme.palette.text.contrast};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: grid;
  padding: 20px;
  row-gap: 10px;
`

export const Heading = styled(H5)`
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
`

export const Main = styled.div`
  display: grid;
`
