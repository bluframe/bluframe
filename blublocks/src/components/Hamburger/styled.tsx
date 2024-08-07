import styled from "styled-components"
import { Theme } from "styles/theme"

export const Bar = styled.span`
  background: ${({ theme }: { theme: Theme }) => theme.palette.secondary.main};
  display: block;
  width: 24px;
  height: 4px;
  border-radius: 2px;

  + span {
    margin-top: 4px;
  }
`

export const Button = styled.button`
  position: relative;
  float: right;
  padding: 9px 10px;
  margin-top: 18px;
  margin-right: 0;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: none;
  border-radius: 4px;

  &:focus {
    background-color: white;
    outline: none;
  }
`

export const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`
