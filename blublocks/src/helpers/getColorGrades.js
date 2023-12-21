// @flow

import type { ColorGrades, Theme } from "@bluframe/blublocks"

type Props = {
  +disabled?: boolean,
  +$secondary?: boolean
}

const getColorGrades = (props: { ...Props, +theme: Theme }): ColorGrades => {
  let colorGrades = props.theme.palette.primary

  if (props.$secondary) {
    colorGrades = props.theme.palette.secondary
  }

  if (props.disabled) {
    colorGrades = props.theme.palette.disabled
  }

  return colorGrades
}

export default getColorGrades
