/* eslint-disable no-ternary */

import styled from "styled-components"
import type { Theme } from "styles/theme"

export const Wrapper = styled.div`
  min-width: 150px;
  position: relative;
`

export const Control = styled.div`
  align-items: center;
  background: ${({ theme }: { theme: Theme }) => theme.palette.text.contrast};
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.colors.gray.light};
  border-radius: 2px;
  column-gap: 20px;
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 20px;
  padding: 5px 10px 5px 16px;
  height: 44px;
`

export const DisplayValue = styled.label`
  color: ${({ $isSelected, theme }: { $isSelected: boolean; theme: Theme }) =>
    $isSelected ? theme.palette.text.main : theme.palette.text.light};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
`

export const Label = styled.label<{ $isShrunk?: boolean }>`
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.light};
  font-size: 16px;
  left: 16px;
  pointer-events: none;
  position: absolute;
  top: 8px;
  transition: all 200ms;

  ${({ $isShrunk }) =>
    $isShrunk &&
    `
    font-size: 12px;
    left: 16px;
    top: -24px;
  `}
`

export const Triangle = styled.div<{ $isOpen: boolean }>`
  border-color: ${({ theme }: { theme: Theme }) => theme.colors.gray.light};
  border-style: solid;
  border-width: 3.5px 3.5px 0 0;
  display: inline-block;
  height: 12px;
  position: relative;
  top: ${({ $isOpen }) => ($isOpen ? "2px" : "-2px")};
  width: 12px;
  transform: rotate(
    ${({ $isOpen }: { $isOpen: boolean }) => ($isOpen ? "-45deg" : "135deg")}
  );
`

export const Options = styled.ul`
  list-style: none;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  width: 100%;
  z-index: 10;
`

export const Option = styled.li`
  background: ${({ theme }: { theme: Theme }) => theme.palette.text.contrast};
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.main};
  cursor: pointer;
  padding: 5px 10px;
  transition: 0.25s ease-in-out;

  &:hover {
    background: ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
    color: ${({ theme }: { theme: Theme }) => theme.palette.primary.contrast};
    width: 100%;
  }
`

export const Input = styled.input.attrs({ type: "hidden" })``
