import { Palette, Theme } from "styles/theme"
import styled from "styled-components"

export const Wrapper = styled.span`
  align-items: center;
  background-color: ${({
  theme,
  color
}: {
  color: keyof Palette
  theme: Theme
}): string => theme.palette[color].main};
  border-radius: 10px;
  color: ${({ theme, color }: { color: keyof Palette; theme: Theme }): string =>
    theme.palette[color].contrast};
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  justify-content: center;
  line-height: 1;
  padding: 4px 8px;
`
