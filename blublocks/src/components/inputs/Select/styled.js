// @flow
/* eslint-disable no-ternary */

import styled, { type StyledComponent } from "styled-components"
import type { Theme } from "@bluframe/blublocks"

export const Wrapper: StyledComponent<{||}, Theme, HTMLDivElement> = styled.div`
  min-width: 150px;
  position: relative;
`

export const Control: StyledComponent<{||}, Theme, HTMLDivElement> = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.palette.text.contrast};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 2px;
  column-gap: 20px;
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 20px;
  padding: 5px 10px;
  height: 44px;
`

export const Label: StyledComponent<
  {| +isSelected: boolean |},
  Theme,
  HTMLLabelElement
> = styled.label`
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.palette.text.main : theme.palette.text.light};
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`

export const Triangle: StyledComponent<
  {| +isOpen: boolean |},
  Theme,
  HTMLDivElement
> = styled.div`
  border-color: ${({ theme }) => theme.colors.gray.light};
  border-style: solid;
  border-width: 3.5px 3.5px 0 0;
  display: inline-block;
  height: 12px;
  position: relative;
  top: ${({ isOpen }) => (isOpen ? "2px" : "-2px")};
  width: 12px;
  transform: rotate(${({ isOpen }) => (isOpen ? "-45deg" : "135deg")});
`

export const Options: StyledComponent<
  {||},
  Theme,
  HTMLUListElement
> = styled.ul`
  list-style: none;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  width: 100%;
  z-index: 10;
`

export const Option: StyledComponent<{||}, Theme, HTMLLIElement> = styled.li`
  background: ${({ theme }) => theme.palette.text.contrast};
  color: ${({ theme }) => theme.palette.text.main};
  cursor: pointer;
  padding: 5px 10px;
  transition: 0.25s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrast};
    width: 100%;
  }
`

export const Input: StyledComponent<
  {||},
  Theme,
  HTMLInputElement
> = styled.input.attrs({ type: "hidden" })``
