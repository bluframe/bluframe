import Breadcrumbs from "./Breadcrumbs"
import Link from "next/link"
import React from "react"
import { StyledComponent } from "styled-components"

export interface Props {
  LinkComponent?:
    | React.ComponentType<{
        children: React.ReactNode
        href?: string
      }>
    | StyledComponent<
        "a" | typeof Link,
        {
          children: React.ReactNode
          href?: string
        },
        {},
        never
      >
  className?: string
  items: {
    label: string
    href?: string
  }[]
}

export interface ComponentProps extends Props {}

export default Breadcrumbs
