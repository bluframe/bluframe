/* eslint-disable no-ternary */

import { Theme } from "styles/theme"
import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
`

export const Input = styled.input`
  display: none;

  &:checked + label:before {
    left: 22px;
  }

  &:checked + label {
    background: ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
  }

  &:disabled + label {
    background: ${({ theme }: { theme: Theme }) => theme.palette.disabled.main};
    cursor: not-allowed;
    pointer-events: none;
  }
`

export const SwitchAndLabel = styled.div<{ $hasLabel: boolean }>`
  display: grid;
  ${({ $hasLabel }) =>
    $hasLabel
      ? `
align-items: center;
column-gap: 4px;
grid-template-columns: auto 1fr;`
      : ""}
`

export const Label = styled.label`
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.main};
  cursor: pointer;
  font-size: 16px;
`

export const Switch = styled.label`
  position: relative;
  width: 40px;
  height: 20px;
  background: ${({ theme }: { theme: Theme }) => theme.palette.disabled.main};
  border-radius: 20px;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: ${({ theme }: { theme: Theme }) =>
      theme.palette.primary.contrast};
    border-radius: 50%;
    transition: left 0.2s;
  }
`
