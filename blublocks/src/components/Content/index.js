// @flow
/* eslint-disable max-lines-per-function */

import type { ContentComponents, ContentProps } from "@bluframe/blublocks"
import { prepareComponent, useTrimText } from "@bluframe/grapple"
import Content from "./Content"
import React from "react"
import strip from "strip-markdown"

type Props = {|
  ...ContentProps
|}

export type ComponentProps = {|
  +className?: string,
  +components: ContentComponents,
  +content: string,
  +rehypePlugins: any[],
  +remarkPlugins: any[]
|}

const usePrepareComponent = ({
  className,
  components: overrideComponents = {},
  content,
  max = Infinity,
  paragraphAs,
  stripMarkdown
}: Props): ComponentProps => {
  const components: ContentComponents = {}

  if (paragraphAs) {
    // eslint-disable-next-line react/display-name, no-unused-vars, id-length
    components.p = ({ node, ...props }) =>
      React.createElement(paragraphAs, props)
  }

  const remarkPlugins = []

  if (stripMarkdown) {
    remarkPlugins.push(strip)
  }

  const rehypePlugins = []

  return {
    className,
    components: {
      ...components,
      ...overrideComponents
    },
    content: useTrimText(content, max),
    rehypePlugins,
    remarkPlugins
  }
}

export default (prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Content
): React$ComponentType<Props>)
