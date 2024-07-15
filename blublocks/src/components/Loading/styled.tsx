/* eslint-disable no-ternary */

import styled, { keyframes } from "styled-components"
import { Theme } from "styles/theme"
import getColorGrades from "helpers/getColorGrades"

interface Props {
  $contrast?: boolean
  $secondary?: boolean
  disabled?: boolean
  size: number
}

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const getColor = (props: Props & { theme: Theme }) => {
  const colorGrades = getColorGrades(props)

  return props.$contrast ? colorGrades.contrast : colorGrades.main
}

export const Wrapper = styled.div<Props>`
  animation: ${rotation} 1s linear infinite;
  border: 2px solid ${getColor};
  border-bottom-color: transparent;
  border-radius: 50%;
  height: ${({ size }: { size: number }) => `${size}px`};
  width: ${({ size }: { size: number }) => `${size}px`};
`
