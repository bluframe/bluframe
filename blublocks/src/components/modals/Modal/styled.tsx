/* eslint-disable no-ternary */

import styled from "styled-components"
import { Theme } from "styles/theme"
import colors from "styles/colors"
import { rgba } from "polished"

const BACKDROP_ALPHA = 0.2

export const Wrapper = styled.div`
  background: ${rgba(colors.black, BACKDROP_ALPHA)};
  display: ${({ $isOpen }: { $isOpen: boolean }) =>
    $isOpen ? "block" : "none"};
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`

export const Container = styled.div`
  background: ${({ theme }: { theme: Theme }) => theme.palette.text.contrast};
  display: grid;
  margin: 15% auto;
  padding: 10px 10px 50px;
  row-gap: 10px;
  width: 80%;
`

export const Top = styled.div`
  display: grid;
  justify-items: end;
`

export const Content = styled.div`
  align-items: center;
  display: grid;
  justify-items: center;
`
