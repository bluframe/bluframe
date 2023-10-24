// @flow

import type { BioProps, ContentComponents } from "@bluframe/blublocks"
import { Description, Image, Link } from "./styled"
import Bio from "./Bio"
import React from "react"
import { prepareComponent } from "@bluframe/grapple"

export type Props = {|
  ...BioProps
|}

export type ComponentProps = {|
  ...$Diff<BioProps, {| +avatar: React$Node | string, +color?: string |}>,
  +components: ContentComponents,
  +image: React$Node
|}

export const usePrepareComponent = ({
  avatar,
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

  let image = avatar

  if (typeof avatar === "string") {
    image = <Image alt={props.name} src={avatar} />
  }

  return {
    ...props,
    components,
    image
  }
}

export default (prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Bio
): React$ComponentType<Props>)
