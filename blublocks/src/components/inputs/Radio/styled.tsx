/* eslint-disable no-ternary */

import type { Theme } from "styles/theme"
import styled from "styled-components"

export const Wrapper = styled.div`
  align-items: center;
  column-gap: 8px;
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 1fr;
`

export const Circle = styled.div<{ checked: boolean }>`
  border-color: ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
  border-style: solid;
  border-width: ${({ checked }: { checked: boolean }) =>
    checked ? "2px" : "1px"};
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  position: relative;
  width: 20px;

  &::after {
    background: ${({ checked, theme }: { checked: boolean; theme: Theme }) =>
      checked ? theme.palette.primary.main : "transparent"};
    border-radius: 50%;
    content: "";
    height: 12px;
    left: 2px;
    position: absolute;
    top: 2px;
    width: 12px;
  }
`

export const Input = styled.input.attrs({ type: "radio" })`
  opacity: 0;
  position: absolute;
`

export const Label = styled.label`
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.main};
  cursor: pointer;
  font-size: 16px;
`
