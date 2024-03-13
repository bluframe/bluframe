// @flow

import styled, { type StyledComponent } from "styled-components"
import type { Theme } from "@bluframe/blublocks"

export const TextAreaWrapper: StyledComponent<
  {||},
  Theme,
  HTMLDivElement
> = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  position: relative;
  width: 100%;
`

export const TextAreaInput: StyledComponent<
  {||},
  Theme,
  HTMLTextAreaElement
> = styled.textarea`
  background: ${({ theme }) => theme.palette.text.contrast};
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 4px;
  box-shadow: none;
  padding: 22px 16px 0;
  resize: none;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  &:focus {
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: none;
  }

  :not(:placeholder-shown) + label,
  &:focus + label {
    font-size: 12px;
    left: 16px;
    top: 2px;
  }
`

export const Label: StyledComponent<
  {||},
  Theme,
  HTMLLabelElement
> = styled.label`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 14px;
  left: 16px;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: all 200ms;
`
