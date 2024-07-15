import { Description, Image, Link } from "./styled"
import Bio from "./Bio"
import { ContentComponents } from "components/Content"
import React from "react"
import { prepareComponent } from "@bluframe/grapple"

export interface Props {
  avatar: React.ReactNode | string
  color?: string
  description: string
  name: string
}

export interface ComponentProps extends Omit<Props, "avatar" | "color"> {
  components: ContentComponents
  image: React.ReactNode
}

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

export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(Bio)
