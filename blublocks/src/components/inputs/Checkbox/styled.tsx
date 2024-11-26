/* eslint-disable no-ternary */

import { Theme } from "styles/theme"
import styled from "styled-components"

export const Wrapper = styled.div`
  align-items: center;
  column-gap: 4px;
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 1fr;
`

export const Input = styled.input.attrs({ type: "checkbox" })`
  display: none;
`

export const StyledCheckbox = styled.label<{ $checked: boolean }>`
  background: ${({ $checked, theme }: { $checked: boolean; theme: Theme }) =>
    $checked ? theme.palette.primary.main : theme.palette.primary.contrast};
  border: ${({ $checked, theme }: { $checked: boolean; theme: Theme }) =>
    $checked ? "none" : `1px solid ${theme.palette.primary.main}`};
  border-radius: 3px;
  display: inline-block;
  height: 16px;
  transition: all 150ms;
  width: 16px;
`

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const Polyline = styled.polyline``

export const Label = styled.label`
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.main};
  cursor: pointer;
  font-size: 16px;
`
