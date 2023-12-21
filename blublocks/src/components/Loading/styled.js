// @flow
/* eslint-disable no-ternary */

import styled, { type StyledComponent, keyframes } from "styled-components"
import type { Theme } from "@bluframe/blublocks"
import getColorGrades from "helpers/getColorGrades"

type Props = {
  +$contrast?: boolean,
  +$secondary?: boolean,
  +disabled?: boolean,
  +size: number
}

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const getColor = (props: { ...Props, +theme: Theme }) => {
  const colorGrades = getColorGrades(props)

  return props.$contrast ? colorGrades.contrast : colorGrades.main
}

export const Wrapper: StyledComponent<
  Props,
  Theme,
  HTMLDivElement
> = styled.div`
  animation: ${rotation} 1s linear infinite;
  border: 2px solid ${getColor};
  border-bottom-color: transparent;
  border-radius: 50%;
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
`
