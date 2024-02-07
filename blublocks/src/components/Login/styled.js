// @flow

import styled, { type StyledComponent } from "styled-components"
import H1 from "components/Typography/H1"
import type { Theme } from "@bluframe/blublocks"

export const Container: StyledComponent<
  {||},
  Theme,
  HTMLDivElement
> = styled.div`
  background: ${({ theme }) => theme.palette.text.contrast};
  display: grid;
  justify-items: center;
  padding: 36px 48px;
  row-gap: 16px;
  width: 100%;
`

export const Form: StyledComponent<{||}, Theme, HTMLFormElement> = styled.form`
  display: grid;
  justify-items: center;
  row-gap: 36px;
`

export const Inputs: StyledComponent<{||}, Theme, HTMLDivElement> = styled.div`
  display: grid;
  row-gap: 16px;
`

export const Heading: StyledComponent<{||}, Theme, typeof H1> = styled(H1)`
  font-size: 24px;
`
