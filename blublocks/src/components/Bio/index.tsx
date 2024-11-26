"use client"

import { Description, Image, Link } from "./styled"
import Bio from "./Bio"
import { ContentComponents } from "components/Content"
import React from "react"
import { Props as SocialLinksProps } from "components/SocialLinks"
import { prepareComponent } from "@bluframe/grapple"

export interface Props {
  LinkComponent?: React.JSXElementConstructor<any>
  avatar: React.ReactNode | string
  color?: string
  components?: ContentComponents
  description: string
  isAvatarCircle?: boolean
  isShowName?: boolean
  name: string
  socialLinks?: SocialLinksProps
  url?: string
}

export interface ComponentProps extends Omit<Props, "avatar" | "color"> {
  components: ContentComponents
  image: React.ReactNode
}

export const usePrepareComponent = ({
  avatar,
  color,
  components: overrideComponents,
  ...props
}: Props): ComponentProps => {
  // If we ever need our own shared overrides
  const components: ContentComponents = {
    // eslint-disable-next-line id-length
    a: ({ children, href, node, ...componentProps }) => (
      <Link color={color} href={href} {...componentProps}>
        {children}
      </Link>
    ),
    // eslint-disable-next-line id-length
    p: ({ node, ...componentProps }) => <Description {...componentProps} />
  }

  let image = avatar

  if (typeof avatar === "string") {
    image = <Image alt={props.name} src={avatar} />
  }

  return {
    ...props,
    components: {
      ...components,
      ...overrideComponents
    },
    image
  }
}

export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(Bio)
