/* eslint-disable no-ternary */

import Card from "./Card"
import prepareComponent from "@bluframe/grapple/prepareComponent"

export interface Props {
  children: React.ReactNode
  heading: string
  id?: string
}

export interface ComponentProps extends Props {
  headingId?: string
}

const usePrepareComponent = (props: Props): ComponentProps => {
  const headingId = props.id ? `${props.id}-heading` : undefined

  return {
    ...props,
    headingId
  }
}

export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Card
)
