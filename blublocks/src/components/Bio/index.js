// @flow

import type { BioProps, ContentComponents } from "@bluframe/blublocks"
import { Description, Link } from "./styled"
import Bio from "./Bio"
import React from "react"
import { prepareComponent } from "@bluframe/grapple"

export type Props = {|
  ...BioProps
|}

export type ComponentProps = {|
  ...$Diff<BioProps, {| +color?: string |}>,
  +components: ContentComponents
|}

export const usePrepareComponent = ({
  color,
  ...props
}: Props): ComponentProps => {
  // If we ever need our own shared overrides
  const components: ContentComponents = {
    // eslint-disable-next-line react/no-multi-comp, react/display-name, react/no-unstable-nested-components, id-length
    a: ({ children, href, ...componentProps }) => (
      <Link color={color} href={href} {...componentProps}>
        {children}
      </Link>
    ),
    // eslint-disable-next-line react/no-multi-comp, react/display-name, react/no-unstable-nested-components, id-length
    p: (componentProps) => <Description {...componentProps} />
  }

  return {
    ...props,
    components
  }
}

export default (prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Bio
): React$ComponentType<Props>)
