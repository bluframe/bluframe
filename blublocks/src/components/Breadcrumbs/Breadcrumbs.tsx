/* eslint-disable no-ternary */

import { Li, Link as StyledLink, Ul } from "./styled"
import { ComponentProps } from "."
import Icon from "components/Icon"
import React from "react"

const ONE = 1

const BreadcrumbsComponent = ({
  LinkComponent,
  className,
  items
}: ComponentProps) => {
  const Link = (LinkComponent ?? StyledLink) as React.ComponentType<{
    children: React.ReactNode
    href?: string
  }>

  return (
    <Ul aria-label="Breadcrumbs" className={className}>
      {items.map((item, index) => (
        <Li aria-label={item.label} key={item.label}>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - ONE ? (
            <Icon group="io5" name="IoChevronForward" />
          ) : null}
        </Li>
      ))}
    </Ul>
  )
}

export default BreadcrumbsComponent
