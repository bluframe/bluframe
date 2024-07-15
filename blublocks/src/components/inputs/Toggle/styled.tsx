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

  &:disabled + label {
    background: ${({ theme }: { theme: Theme }) => theme.palette.disabled.main};
    cursor: not-allowed;
    pointer-events: none;
  }
`

export const Label = styled.label`
  position: relative;
  width: 40px;
  height: 20px;
  background: ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
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
