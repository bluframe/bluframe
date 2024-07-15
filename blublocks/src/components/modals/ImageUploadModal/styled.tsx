/* eslint-disable no-ternary */

import Paragraph from "components/Typography/Paragraph"
import { Theme } from "styles/theme"
import colors from "styles/colors"
import styled from "styled-components"

export const Content = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 16px;
`

export const Buttons = styled.div`
  column-gap: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Message = styled(Paragraph)`
  margin: 0;
  text-align: center;
`

export const UploadArea = styled.div`
  align-items: center;
  border: 2px dashed ${colors.wildSand};
  cursor: pointer;
  display: grid;
  justify-items: center;
  margin: 20px 0;
  padding: 16px;
  row-gap: 16px;
  text-align: center;
`

export const FileInput = styled.input<{ disabled: boolean }>`
  display: none;
`

export const FileInputLabel = styled.label<{ disabled: boolean }>`
  background: ${({ disabled, theme }: { disabled: boolean; theme: Theme }) =>
    disabled ? theme.palette.disabled.main : theme.palette.primary.main};
  color: ${({ theme }: { theme: Theme }) => theme.palette.primary.contrast};
  cursor: ${({ disabled }: { disabled: boolean }) =>
    disabled ? "not-allowed" : "pointer"};
  font-size: 16px;
  padding: 8px 16px;
`

export const Messages = styled.div`
  display: grid;
  row-gap: 6px;
`

export const AdditionalMessage = styled(Paragraph)`
  color: ${({ theme }: { theme: Theme }) => theme.palette.subtitle.main};
  font-size: 14px;
  margin: 0;
`

export const ErrorMessage = styled(Paragraph)`
  color: ${({ theme }: { theme: Theme }) => theme.palette.error.main};
  font-size: 14px;
  margin: 0;
`
